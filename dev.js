const { spawn } = require('child_process');
const fps = require('fs/promises');
const path = require('path');
const esbuild = require('esbuild');
const manifestPlugin = require('esbuild-plugin-manifest');
const chokidar = require('chokidar');
const kleur = require('kleur');

const writeFile = async (json, dest) => {
	await fps.writeFile(path.resolve(__dirname, dest), JSON.stringify(json, null, 2));
};

const loader = {
	'.jpg': 'file',
	'.png': 'file'
};

const isDev = process.env.NODE_ENV === 'production' ? false : true;

const fail = (m) => console.log(kleur.bgRed(kleur.white(m)));
const success = (m) => console.log(kleur.bgGreen(kleur.black(m)));

const buildClient = async () => {
	let result;
	try {
		result = await esbuild.build({
			assetNames: 'assets/[name]-[hash]',
			bundle: true,
			define: {
				__DEV__: isDev
			},
			entryPoints: ['src/main.client.tsx'],
			entryNames: '[dir]/[name]',
			format: 'iife',
			loader,
			// logLevel: 'info',
			logLevel: 'silent',
			metafile: true,
			// minify: !isDev,
			outbase: 'src',
			outdir: 'client',
			plugins: [
				manifestPlugin({
					// extensionless: 'input',
					filename: 'main.client.manifest.json',
					shortNames: true
				})
			],
			preserveSymlinks: false,
			pure: [],
			sourcemap: 'external',
			treeShaking: true,
			tsconfig: 'tsconfig.json'
		});
	} catch (e) {
		fail('CLIENT BUILD ERROR');
		console.error(e.message);
		return false;
	}

	if (result && result.metafile) {
		writeFile(result.metafile, 'client/main.client.meta.json');
	}
	success('BUILT CLIENT');
	return true;
};

const buildServer = async () => {
	let result;
	try {
		result = await esbuild.build({
			assetNames: 'assets/[name]-[hash]',
			bundle: true,
			define: {
				__DEV__: isDev
			},
			entryPoints: ['src/main.server.tsx'],
			// external: ['./node_modules/*'],
			loader,
			// logLevel: 'info',
			logLevel: 'silent',
			platform: 'node',
			outdir: 'server',
			target: 'node16.13'
			// watch: {
			// 	onRebuild(error, result) {
			// 		if (error) console.error('watch build failed:', error);
			// 		else console.log('watch build succeeded:', result);
			// 	}
			// }
		});
	} catch (e) {
		fail('SERVER BUILD ERROR');
		console.error(e.message);
		return false;
	}

	success('BUILT SERVER');
	return true;
};

const buildAll = async () => {
	if (await buildClient()) {
		await buildServer();
	}
};

let server = null;
const startServer = async () => {
	await stopServer();

	server = spawn('node', ['server/main.server.js']);

	server.stdout.setEncoding('utf-8');
	server.stdout.on('data', (data) => {
		console.log(data);
	});
	server.stderr.setEncoding('utf-8');
	server.stderr.on('data', (data) => {
		console.error(data);
	});

	// const ret = spawnSync('node', ['dist/main.server.js']);
	// console.log('Spawn server result:', ret);
	// if (ret.stderr) {
	// 	console.error(ret.stderr);
	// } else {
	// 	serverPid = ret.pid;
	// }
};

const stopServer = async () => {
	if (server) {
		server.kill();
		server = null;
	}
};

let ready = false;
chokidar.watch('./src').on('all', async (event, filePath) => {
	if (!ready) return;

	console.log(event, filePath);

	await stopServer();
	if (filePath === 'src/server/main.server.tsx') {
		await buildServer();
	} else {
		await buildAll();
	}
	await startServer();
});

(async () => {
	await buildAll();
	await startServer();
	ready = true;
})();

// let node;
// compiler.hooks.watchRun.tap('Dev', (compiler) => {
// 	console.log(`Compiling ${compiler.name}`);
// 	console.log({ node });
// 	// if (compiler.name === 'server' && node) {
// 	// 	node.kill();
// 	// 	node = undefined;
// 	// }
// });

// compiler.watch({}, (err, stats) => {
// 	if (err) {
// 		console.error(err);
// 		process.exit(1);
// 	}
// 	console.log(stats?.toString('minimal'));
// 	const compile_success = !stats?.hasErrors();
// 	if (compile_success && !node) {
// 		console.log('Starting nodejs...');
// 		node = spawn('node', ['--inspect', path.resolve(__dirname, '../dist/server.js')], {
// 			stdio: 'inherit'
// 		});
// 	}
// });

const { spawn } = require('child_process');
const chokidar = require('chokidar');
const { buildClient } = require('./buildClient');
const { buildServer } = require('./buildServer');

const isDev = true;

const buildAll = async () => {
	if (await buildClient({ isDev })) {
		await buildServer({ isDev });
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
		await buildServer({ isDev });
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

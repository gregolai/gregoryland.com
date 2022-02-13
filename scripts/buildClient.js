const path = require('path');
const fps = require('fs/promises');
const esbuild = require('esbuild');
const manifestPlugin = require('esbuild-plugin-manifest');
const { loader, fail, success } = require('./_utils');

const writeFile = async (json, dest) => {
	await fps.writeFile(path.resolve(__dirname, '..', dest), JSON.stringify(json, null, 2));
};

module.exports['buildClient'] = async ({ isDev }) => {
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
			minify: !isDev,
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

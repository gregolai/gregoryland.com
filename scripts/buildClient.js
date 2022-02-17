const path = require('path');
const fps = require('fs/promises');
const esbuild = require('esbuild');
const manifestPlugin = require('esbuild-plugin-manifest');
const { sharedConfig, fail, success } = require('./_utils');

const writeFile = async (json, dest) => {
	await fps.writeFile(path.resolve(__dirname, '..', dest), JSON.stringify(json, null, 2));
};

module.exports['buildClient'] = async ({ isDev }) => {
	let result;
	try {
		result = await esbuild.build({
			...sharedConfig({ isDev }),
			entryPoints: ['src/main.client.tsx'],
			format: 'iife',
			metafile: true,
			minify: !isDev,
			outdir: 'client',
			plugins: [
				manifestPlugin({
					hash: !isDev,
					filename: 'main.client.manifest.json',
					shortNames: true
				})
			],
			sourcemap: isDev ? 'external' : false
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

const esbuild = require('esbuild');
const { sharedConfig, fail, success } = require('./_utils');

module.exports['buildServer'] = async ({ isDev }) => {
	let result;
	try {
		result = await esbuild.build({
			...sharedConfig({ isDev }),
			entryPoints: ['src/main.server.tsx'],
			platform: 'node',
			outdir: 'server',
			target: 'node16.13'
		});
	} catch (e) {
		fail('SERVER BUILD ERROR');
		console.error(e.message);
		return false;
	}

	success('BUILT SERVER');
	return true;
};

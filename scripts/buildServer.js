const esbuild = require('esbuild');
const { loader, fail, success } = require('./_utils');

module.exports['buildServer'] = async ({ isDev }) => {
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

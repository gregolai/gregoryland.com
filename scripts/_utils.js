const kleur = require('kleur');

module.exports = {
	sharedConfig: ({ isDev }) => ({
		assetNames: 'assets/[name]-[hash]',
		bundle: true,
		define: {
			__DEV__: isDev
		},
		loader: {
			'.jpg': 'file',
			'.png': 'file'
		},
		treeShaking: true,
		tsconfig: 'tsconfig.json'
	}),
	fail: (m) => console.log(kleur.bgRed(kleur.white(m))),
	success: (m) => console.log(kleur.bgGreen(kleur.black(m)))
};

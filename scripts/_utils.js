const kleur = require('kleur');

module.exports = {
	loader: {
		'.jpg': 'file',
		'.png': 'file'
	},
	fail: (m) => console.log(kleur.bgRed(kleur.white(m))),
	success: (m) => console.log(kleur.bgGreen(kleur.black(m)))
};

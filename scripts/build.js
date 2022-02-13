const { buildClient } = require('./buildClient');
const { buildServer } = require('./buildServer');

const isDev = process.env.NODE_ENV === 'production' ? false : true;

(async () => {
	await buildClient({ isDev });
	await buildServer({ isDev });
})();

const path = require('path');

const { STATS, DEV_PORT, API_PORT, NODE_ENV } = process.env;

const hot = true;
const stats = STATS || false;
const env = NODE_ENV || 'development';
const dev = env === 'development';
const devPort = DEV_PORT || 8086;
const apiPort = API_PORT || 8087;

const paths = (() => {
	const root = path.resolve(__dirname, '..');
	const api = path.join(root, 'api');
	const src = path.join(root, 'src');
	const main = path.join(src, 'main');

	const _public = path.join(root, 'public');

	return {
		root,
		api,
		src,
		main,
		public: _public
	};
})();

module.exports = {
	hot,
	stats,
	devtool: dev ? 'source-map' : undefined,
	env,
	dev,
	prod: !dev,
	devPort,
	apiPort,
	paths
};

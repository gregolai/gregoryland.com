const gulp = require('gulp');
const webpack = require('webpack');
const WebpackDevServer = require('webpack-dev-server');
const opts = require('./options');

gulp.task('build:dev', (callback) => {
	console.log('build:dev');
	const config = require('./webpack.config');

	const compiler = webpack(config, (err, stats) => {
		if (err) {
			console.error('[build:dev]', err);
		}
		console.log(
			stats.toString({
				colors: true
			})
		);
		callback();
	});
});

gulp.task('build:prod', gulp.series('build:dev'));

gulp.task('watch:dev', () => {
	const config = require('./webpack.config');

	const compiler = webpack(config);

	const devServer = new WebpackDevServer(compiler, {
		stats: {
			assets: false,
			chunkModules: false,
			chunks: false,
			colors: true,
			hash: false,
			modules: false,
			timings: false,
			version: false
		},
		historyApiFallback: true,
		hot: true,
		overlay: true,
		// proxy: {
		// 	'*': `http://localhost:${opts.apiPort}` // <-- backend
		// },

		// PATHS
		contentBase: config.output.path,
		publicPath: config.output.publicPath
	});

	devServer.listen(opts.devPort, 'localhost', (err) => {
		if (err) {
			console.error('[watch:dev]', err);
		}
		console.log('[watch:dev]');
	});
});

gulp.task('watch:prod', gulp.series('watch:dev'));

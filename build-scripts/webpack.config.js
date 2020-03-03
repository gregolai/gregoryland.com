const path = require('path');
const webpack = require('webpack');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlPlugin = require('html-webpack-plugin');
const PreloadPlugin = require('preload-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');

// SIZE HELPERS
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
const Visualizer = require('webpack-visualizer-plugin');

const opts = require('./options');
const paths = opts.paths;

const STATIC_DIR_NAME = 'static';

const localIdentName = opts.dev ? '[name]__[local]___[hash:base64:4]' : '[hash:base64:4]';

const babelOptions = {
	presets: ['env'],
	plugins: ['transform-decorators-legacy', 'transform-class-properties', 'transform-runtime']
};

/**
 * @type {webpack.Configuration}
 */
const config = {
	cache: true,
	context: paths.root,
	mode: opts.env,
	devtool: opts.devtool,
	node: {
		fs: 'empty'
	},

	entry: (() => {
		const main = [paths.main];

		// if (opts.dev) {
		// 	main.unshift(`webpack-dev-server/client?http://localhost:${opts.devPort}`);
		// }

		return {
			main
		};
	})(),

	externals: {},

	module: (() => {
		const rules = [
			{
				test: /\.(js|jsx)$/,
				exclude: /node_modules/,
				// include: /node_modules\/pu2/,
				use: [
					{
						loader: 'ts-loader',
						options: {}
					}
					// {
					// 	loader: 'babel-loader',
					// 	options: babelOptions
					// }
				]
			},
			{
				test: /\.(ts|tsx)$/,
				exclude: /node_modules/,
				use: [
					{
						loader: 'ts-loader',
						options: {}
					}
					// {
					// 	loader: 'awesome-typescript-loader',
					// 	options: {
					// 		//useBabel: true,
					// 		useCache: true
					// 		//babelOptions
					// 	}
					// }
				]
			},
			{
				test: /\.(scss)$/,
				exclude: /node_modules/,
				use: [
					{ loader: MiniCssExtractPlugin.loader, options: {} },
					{
						loader: 'css-loader',
						options: {
							//localIdentName,
							//minimize: !opts.dev,
							modules: {
								localIdentName
							},
							sourceMap: opts.dev
						}
					},
					{
						loader: 'sass-loader',
						options: {
							sourceMap: opts.dev
						}
					}
				]
			},
			{
				test: /\.md$/i,
				use: [{ loader: 'raw-loader' }]
			}
			// {
			// 	// BLUEPRINTJS ASSETS/FONTS
			// 	test: /\.(ico|gif|png|jpg|jpeg|svg|woff|eot|ttf)$/,
			// 	use: [
			// 		{
			// 			loader: 'file-loader',
			// 			options: {
			// 				name: '[name]_[hash:4].[ext]'
			// 			}
			// 		}
			// 	]
			// }
		];

		return {
			rules
		};
	})(),

	output: {
		path: paths.public,
		publicPath: '',
		filename: '[name].js',
		chunkFilename: '[name].chunk.js'
	},

	plugins: (() => {
		const plugins = [
			new CleanWebpackPlugin([paths.public], {
				exclude: [STATIC_DIR_NAME],
				root: paths.root,
				verbose: false
			}),
			new HtmlPlugin({
				minify: opts.prod && {
					collapseWhitespace: true,
					minifyCSS: true
				},
				title: `---${opts.dev ? 'DEV' : 'PROD'}---`,
				template: path.join(paths.src, 'index.ejs')
			}),
			// new PreloadPlugin({
			// 	rel: 'prefetch'
			// }),
			new MiniCssExtractPlugin({
				filename: '[name].css',
				chunkFilename: '[id].css'
			}),
			new webpack.DefinePlugin({
				__API_PORT__: opts.apiPort,
				__DEV__: opts.dev
			})
		];

		if (opts.stats) {
			plugins.push(new BundleAnalyzerPlugin());
			plugins.push(new Visualizer());
		}

		if (opts.dev && opts.hot) {
			plugins.push(new webpack.HotModuleReplacementPlugin());
		}

		if (opts.prod) {
			plugins.push(
				new webpack.optimize.ModuleConcatenationPlugin(),
				new webpack.optimize.AggressiveMergingPlugin(),
				new webpack.optimize.OccurrenceOrderPlugin(true)
			);
		}

		return plugins;
	})(),

	resolve: {
		alias: {
			// NOT READY TO REMAP REACT TO PREACT
			// react: 'preact/compat',
			// 'react-dom': 'preact/compat'
		},
		extensions: ['.ts', '.tsx', '.js', '.jsx'],
		modules: [paths.src, 'node_modules']
	},

	resolveLoader: {},

	// https://webpack.js.org/configuration/optimization/
	optimization: (() => {
		const SUPER_AGGRESSIVE = true;

		/**
		 * @type {TerserPlugin.TerserPluginOptions}
		 */
		let minimizerOpts = undefined;

		if (SUPER_AGGRESSIVE) {
			minimizerOpts = {
				terserOptions: {
					ecma: undefined,
					warnings: false,
					parse: {},
					compress: {},
					mangle: {
						properties: true
					},
					module: false,
					output: null,
					toplevel: false,
					nameCache: null,
					ie8: false,
					keep_classnames: undefined,
					keep_fnames: false,
					safari10: false
				}
			};
		}

		return {
			minimize: opts.prod,
			minimizer: [new TerserPlugin(minimizerOpts)],
			nodeEnv: opts.env,
			noEmitOnErrors: true,
			usedExports: true
		};
	})()
};

module.exports = config;

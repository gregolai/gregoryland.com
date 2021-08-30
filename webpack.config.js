const path = require('path');
const webpack = require('webpack');

const isDev = process.env.NODE_ENV !== 'production';

/**
 * @type {webpack.Configuration}
 */
module.exports = {
	cache: true,
	context: path.resolve(__dirname),
	mode: isDev ? 'development' : 'production',
	devtool: isDev ? 'cheap-module-source-map' : false,
	target: 'web',
	node: {
		// fs: 'empty'
	},
	entry: {
		// app: path.resolve(__dirname, 'src/App.tsx')
		main: path.resolve(__dirname, 'src/main.ts')
	},
	externals: isDev
		? {
				react: 'React',
				'react-dom': 'ReactDOM'
		  }
		: undefined,
	module: {
		strictExportPresence: true,
		rules: [
			{
				test: /\.(ts|tsx)$/,
				include: path.resolve(__dirname, 'src'),
				use: [
					{
						loader: 'ts-loader',
						options: {
							configFile: 'tsconfig.json'
						}
					}
				]
			},
			{
				test: /\.md$/i,
				use: [{ loader: 'raw-loader' }]
			}
		]
	},
	output: {
		path: path.resolve(__dirname, 'public'),
		publicPath: '/',
		filename: 'js/[name].js',
		// chunkFilename: 'js/[name].chunk.js'
		globalObject: 'this'
	},
	plugins: [
		new webpack.DefinePlugin({
			__DEV__: isDev
		})
	],
	resolve: {
		extensions: ['.ts', '.tsx', '.js']
	}
};

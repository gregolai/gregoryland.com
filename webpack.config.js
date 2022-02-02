const path = require('path');
const webpack = require('webpack');

const isDev = process.env.NODE_ENV !== 'production';

const srcDir = path.resolve(__dirname, 'src');

let outDir = path.resolve(__dirname, 'dist');

if (process.env.PRESET === 'client') {
	outDir = path.resolve(__dirname, 'dist/client');
}

/**
 * @type {webpack.Configuration}
 */
module.exports = {
	cache: true,
	context: path.resolve(__dirname),
	mode: isDev ? 'development' : 'production',
	devtool: isDev ? 'cheap-module-source-map' : false,
	node: {
		// fs: 'empty'
	},
	entry: {
		main: path.resolve(__dirname, 'src/main.ts')
	},
	externals: {
		react: 'React',
		'react-dom': 'ReactDOM'
	},
	module: {
		strictExportPresence: true,
		rules: [
			{
				test: /\.(js|jsx|ts|tsx)$/,
				include: srcDir,
				loader: 'ts-loader'
			},
			{
				test: /\.css$/,
				include: srcDir,
				use: ['style-loader', 'css-loader']
			},
			{
				test: /\.md$/i,
				use: [{ loader: 'raw-loader' }]
			}
		]
	},
	output: {
		path: outDir,
		publicPath: '/',
		filename: 'js/[name].js',
		chunkFilename: 'js/[name].chunk.js'
	},
	plugins: [
		new webpack.DefinePlugin({
			__DEV__: isDev
		})
	],
	resolve: {
		extensions: ['.ts', '.tsx', '.js', '.jsx']
	}
};

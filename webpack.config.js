const webpack = require('webpack');
const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const extractLESS = new ExtractTextPlugin('style.css');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = function(env, options) {
	const isProduction = options.mode === 'production';

	const config = {
		context: path.resolve(__dirname, 'client/'),

		entry: './main.js',

		output: {
			path: path.join(__dirname, '/public'),
			filename: 'bundle.js',
			publicPath: '/'
		},

		mode: 'development',

		watch: true,

		devtool: isProduction ? 'none' : 'source-map',

		plugins: [
			new webpack.HotModuleReplacementPlugin(),
			extractLESS,
			new HtmlWebpackPlugin({
				title: 'React app',
				hash: true,
				template: './index.html'
			})
		],

		resolve: {
			extensions: ['.js', '.less']
		},

		module: {
			rules: [
				{
					test: /\.less$/i,
					use: extractLESS.extract({
						fallback: 'style-loader',
						use: ['css-loader', 'less-loader']
					})
				},
				{
					test: /\.jsx?$/,
					exclude: /node_modules/,
					loader: 'babel-loader',
				}
			]
		},

		devServer: {
			host: 'localhost',
			port: 8080,
			hot: true,
			historyApiFallback: true
		}
	};

	return config;
};

const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const NODE_ENV = process.env.NODE_ENV || 'dev';

const dirNode = 'node_modules';
const dirApp = path.join(__dirname, 'src');
const dirAssets = path.join(__dirname, 'assets');

module.exports = {
	entry: {
		vendor: [
			'@babel/polyfill',
			'lodash'
		],
		bundle: path.join(dirApp, 'index'),
		sw: path.join(dirApp, 'sw')
	},
	resolve: {
		modules: [
			dirNode,
			dirApp,
			dirAssets
		]
	},
	plugins: [
		new webpack.DefinePlugin({
			NODE_ENV
		}),
		new HtmlWebpackPlugin({
			template: path.join(dirApp, 'views/index.ejs'),
			title: 'Examen Front End Mercado Libre'
		})
	],
	module: {
		rules: [
			{
				test: /\.js$/,
				loader: 'babel-loader',
				exclude: /(node_modules)/,
				options: {
					compact: true
				}
			},
			{
				test: /\.css$/,
				use: [
					'style-loader',
					{
						loader: 'css-loader',
						options: {
							sourceMap: NODE_ENV === 'dev'
						}
					},
				]
			},
			{
				test: /\.scss/,
				use: [
					'style-loader',
					{
						loader: 'css-loader',
						options: {
							sourceMap: NODE_ENV === 'dev'
						}
					},
					{
						loader: 'sass-loader',
						options: {
							sourceMap: NODE_ENV === 'dev',
							includePaths: [dirAssets]
						}
					}
				]
			},
			{
				test: /\.(jpe?g|png|gif)$/,
				loader: 'file-loader',
				options: {
					name: '[path][name].[ext]'
				}
			}
		]
	}
};

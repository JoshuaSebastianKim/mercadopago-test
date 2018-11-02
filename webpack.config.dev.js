const express = require('express');
const merge = require('webpack-merge');
const webpackConfig = require('./webpack.config');

module.exports = merge(webpackConfig, {
	devtool: 'eval',

	output: {
		pathinfo: true,
		publicPath: '/',
		filename: '[name].js'
	},

	devServer: {
		host: '127.0.0.1',
		historyApiFallback: true,
		proxy: {
			"/api": "http://localhost:3000"
		},
		setup(app) {
			app.use('/static', express.static(__dirname + '/assets'))
		}
	}
});
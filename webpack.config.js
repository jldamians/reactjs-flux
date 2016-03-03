'use strict';

var pkg = require('./package.json');

 module.exports = {
	resolve: {
		extensions: ['', '.jsx', '.js']
	},
 	entry: './app/app.jsx',
 	output: {
 		path: './public/js/',
 		filename: 'index.js'
 	},
 	module: {
 		loaders: [
	 		{
	 			test: /(\.js|\.jsx)$/,
	 			loader: 'babel',
				query: { presets: ['es2015', 'stage-0', 'react'] }
	 		}
 		]
 	}
};
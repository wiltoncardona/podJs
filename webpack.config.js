var path = require('path');
//var webpack = require('webpack');

const ExtractTextPlugin = require("extract-text-webpack-plugin");
const BrowserSyncPlugin = require('browser-sync-webpack-plugin');

 module.exports = {
     entry: './src/app.js',
     output: {
         path: path.resolve(__dirname, 'build'),
         filename: 'main.bundle.js'
     },
     module: {
         loaders: [
             {
                test: /\.css$/,
                loader:  ExtractTextPlugin.extract({ fallback: 'style-loader', use: 'css-loader' })
                
            },
            {
                 test: /\.js$/,
                 loader: 'babel-loader',
                 query: {
                     presets: ['es2015']
                 }
             }
         ]
     },
     plugins: [
		new ExtractTextPlugin("src/theme/style.css"),
	    new BrowserSyncPlugin({
	        host: 'localhost',
      		port: 3000,
	        server: {baseDir: ['./']},
	        files: ['./*']
		}),
	],
	watch: true
 };
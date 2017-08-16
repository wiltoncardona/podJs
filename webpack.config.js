var path = require('path');
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const BrowserSyncPlugin = require('browser-sync-webpack-plugin');

 module.exports = {
     entry: './app/main.js',
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
		new ExtractTextPlugin("app/theme/style.css"),
	    new BrowserSyncPlugin({
	        host: 'localhost',
      		port: 3000,
	        server: {baseDir: ['./']},
	        files: ['./*']
		}),
	],
	watch: true
 };
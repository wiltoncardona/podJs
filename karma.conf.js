const path = require('path');

module.exports = function(config) {
    config.set({
        browsers: ['Chrome'],
        files: [
            { pattern: 'test-context.js', watched: false }
        ],
        frameworks: ['jasmine'],        
       
    
        preprocessors: {
            'test-context.js': ['webpack']
        },
        webpack: {
            module: {
                loaders: [
                    { 
                        test: /\.js/, 
                        exclude: /node_modules/, 
                        loader: 'babel-loader' }
                ]
            },
            watch: true
        },
        webpackServer: {
            noInfo: true
        },
        // anything named karma-* is normally auto included so you probably dont need this
        plugins: ['karma-coverage-istanbul-reporter'],

        reporters: ['coverage-istanbul'],
       
    });
};

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
                        loader: 'babel-loader' 
                    }
                ]
            },
            watch: true
        },
        webpackServer: {
            noInfo: true
        },
        
        reporters: [ 'dots', 'coverage' ], //report results in this format
        coverageReporter: {
            reporters: [
                {
                    type: 'text-summary'
                },
                {
                    type: 'html',
                    dir: 'build/reports/coverage'
                }
            ]
        },
       
    });
};

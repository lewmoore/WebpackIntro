module.exports = {
    entry: [
        '.app/index.js'
    ],
    module: {
        loaders: [{
            test: /\.js$/, 
            include:  __dirname + '/app',
            loader: 'babel?presets[]=es2015'
        }]
    }
}
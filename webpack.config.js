let HtmlWebpackPlugin = require('html-webpack-plugin')

let HTMLWebpackPluginConfig = new HtmlWebpackPlugin({
    template: __dirname + '/app/index.html',
    filename: 'index.html'
  });

module.exports = {
    entry: [
        './app/index.js'
    ],
    module: {
        rules: [{
            test: /\.js$/, 
            exclude: /(node_modules|bower_components)/,
            use: {
              loader: 'babel-loader',
              options: {
                presets: ['@babel/preset-env']
              }
            }
        }]
    },
    output: {
        filename: 'index_bundle.js',
        path: __dirname + '/dist'
    },
    plugins: [HTMLWebpackPluginConfig]
}
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: './index.js',
    devtool: 'source-map',
    devServer: {
        open: true,
        port: '7099',
        historyApiFallback: true,
    },
    mode: 'development',
    module: {
        rules: [
          {
            test: /\.(le|c)ss$/,
            use: ['style-loader', 'css-loader', 'less-loader'],
          },
        ],
    },
    plugins: [
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: './index.html',
        }),
    ],
};
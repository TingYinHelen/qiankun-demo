const { name } = require('./package.json');

const port = 7101;

module.exports = {
    outputDir: 'dist',
    assetsDir: 'static',
    devServer: {
        port,
        hot: true,
        // disableHostCheck: true,
        historyApiFallback: true,
        headers: {
            'Access-Control-Allow-Origin': '*',
        },
    },
    configureWebpack: {
        output: {
            // 把子应用打包成 umd 库格式
            library: `${name}-[name]`,
            libraryTarget: 'umd',
            jsonpFunction: `webpackJsonp_${name}`,
        },
    },
};
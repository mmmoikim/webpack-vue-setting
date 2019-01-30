const webpack = require('webpack');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

const path = require('path');
const APP_DIR = path.resolve(__dirname, 'src');
const BUILD_DIR = path.resolve(__dirname, 'dist');

module.exports = {
    mode: 'development',
    devtool: 'inline-source-map',
    devServer: {
        hot: true,
        contentBase: BUILD_DIR,
        allowedHosts: ['host.com'],
        historyApiFallback: true,
        overlay: true
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin()
        // new BundleAnalyzerPlugin()
    ]
}
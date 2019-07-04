const CleanWebpackPlugin = require('clean-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');

const path = require('path');
const APP_DIR = path.resolve(__dirname, 'src');
const BUILD_DIR = path.resolve(__dirname, 'dist');

module.exports = {
    mode: 'production',
    optimization: {
        minimizer: [new TerserPlugin({
            parallel: true,
            extractComments: true,
            terserOptions: {
                warnings: false,
                compress: {
                    drop_console: true,
                }
            }
        })]
    },
    plugins: [
        //remove/clean your build folder(s) before building
        new CleanWebpackPlugin(['dist'])
    ]
}
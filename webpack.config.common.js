const VueLoaderPlugin = require('vue-loader/lib/plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const path = require('path');
const APP_DIR = path.resolve(__dirname, 'src');
const BUILD_DIR = path.resolve(__dirname, 'dist');

module.exports = {
    entry: {
        app: ['./src/main.js']
    },
    output: {
        filename: '[name].bundle.js',
        path: BUILD_DIR
    },
    module: {
        rules: [{
                test: /\.js/,
                exclude: /(node_modules)/,
                use: [{
                    loader: 'babel-loader'
                }]
            },
            {
                test: /\.vue$/,
                loader: 'vue-loader'
            },
            {
                test: /\.css$/,
                use: [
                    'vue-style-loader',
                    'css-loader'
                ]
            }
        ]
    },
    resolve: {
        alias: {
            'vue$': 'vue/dist/vue.esm.js'
        },
        extensions: ['*', '.js', '.vue', '.json']
    },
    plugins: [
        new VueLoaderPlugin(),
        new HtmlWebpackPlugin({
            template: 'index.html'
        })
    ]
}
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
                    //for css tag in .vue
                    'vue-style-loader',
                    'css-loader'
                ]
            }
        ]
    },
    resolve: {
        alias: {
            'Styles': APP_DIR + '/assets/styles',
            'View': APP_DIR + '/view',
            'Src': APP_DIR,
            'vue$': 'vue/dist/vue.esm.js'
        },
        extensions: ['*', '.js', '.vue', '.json']
    },
    plugins: [
        new VueLoaderPlugin(),
        //creation of HTML files to serve your webpack bundles
        new HtmlWebpackPlugin({
            template: 'index.html'
        })
    ]
}
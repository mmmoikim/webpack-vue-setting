const path = require('path');
const webpack = require('webpack');
const VueLoaderPlugin = require('vue-loader/lib/plugin')
const CleanWebpackPlugin = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

module.exports = (env, options) => {
    const config = {
        entry: {
            app: ['./src/main.js']
        },
        output: {
            filename: '[name].bundle.js',
            path: path.resolve(__dirname, 'dist')
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
                },
                {
                    test: /\.html$/,
                    loader: 'html-loader'
                }
            ]
        },
        optimization: {
            splitChunks: {
                cacheGroups: {
                    commons: {
                        test: /[\\/]node_modules[\\/]/,
                        name: 'vendors',
                        chunks: 'all'
                    }
                }
            }
        },
        resolve: {
            alias: {
                'vue$': 'vue/dist/vue.esm.js'
            },
            extensions: ['*', '.js', '.vue', '.json']
        },
    }

    if (options.mode === 'development') {
        config.devtool = 'inline-source-map';
        config.devServer = {
            hot: true,
            contentBase: path.resolve(__dirname, 'dist'),
            allowedHosts: ['host.com'],
            historyApiFallback: true,
            overlay: true
        };
        config.plugins = [
            new webpack.HotModuleReplacementPlugin(),
            new HtmlWebpackPlugin({
                showErrors: true,
                template: 'src/index.html'
            }),
            new VueLoaderPlugin()
            // new BundleAnalyzerPlugin()
        ];
    } else {
        config.plugins = [
            new CleanWebpackPlugin(['dist']),
            new HtmlWebpackPlugin({
                template: 'src/index.html'
            }),
            new VueLoaderPlugin()
        ];
    }
    return config;
}
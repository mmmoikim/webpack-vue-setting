const path = require('path');
const webpack = require('webpack');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

module.exports = (env, options) => {
  const config = {
    entry: {
      app: ['./src/index.js']
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
      }]
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
    }
  }

  if (options.mode === 'development') {
    config.plugins = [
      new webpack.HotModuleReplacementPlugin(),
      new HtmlWebpackPlugin({
        title: 'Development',
        showErrors: true
      }),
      // new BundleAnalyzerPlugin()
    ];

    config.devtool = 'inline-source-map';

    config.devServer = {
      hot: true,
      host: 'localhost',
      contentBase: path.resolve(__dirname, 'dist'),
      stats: {
        color: true
      }
    };
  } else {
    config.plugins = [
      new CleanWebpackPlugin(['dist']),
      new HtmlWebpackPlugin()
    ];
  }
  return config;
}
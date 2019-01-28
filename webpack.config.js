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
    //개발모드
    config.plugins = [
      new webpack.HotModuleReplacementPlugin(),
      //개발모드에서 인덱스 임시로 생성
      new HtmlWebpackPlugin({
        title: 'Development',
        showErrors: true
      }),
      new BundleAnalyzerPlugin()
    ];

    config.devtool = 'inline-source-map';

    config.devServer = {
      hot: true, //HRM
      host: 'localhost',
      contentBase: path.resolve(__dirname, 'dist'),
      stats: {
        color: true
      }
    };
  } else {
    //프로덕트모드
    config.plugins = [
      new CleanWebpackPlugin(['dist']),
      new HtmlWebpackPlugin()
    ];
  }

  return config;
}
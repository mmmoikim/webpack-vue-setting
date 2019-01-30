const merge = require('webpack-merge');
const common = require('./webpack.config.common.js');
const dev = require('./webpack.config.dev.js');
const prod = require('./webpack.config.prod.js');

module.exports = (env, options) => {
    if (options.mode === 'development') {
        return merge(common, dev);
    }
    if (options.mode === 'production') {
        return merge(common, prod);
    }
}
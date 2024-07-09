const path = require('path');

module.exports = {
  chainWebpack: (config) => {
    config.module
      .rule('vue')
      .use('thread-loader')
      .loader('thread-loader')
      .end();

    config.module
      .rule('scss')
      .oneOf('vue-modules')
      .use('thread-loader')
      .loader('thread-loader')
      .end()
      .use('sass-resources-loader')
      .loader('sass-resources-loader')
      .options({
        resources: path.resolve(__dirname, './src/assets/styles/index.scss')
      })
      .end()
      .end()
      .oneOf('vue')
      .use('thread-loader')
      .loader('thread-loader')
      .end()
      .use('sass-resources-loader')
      .loader('sass-resources-loader')
      .options({
        resources: path.resolve(__dirname, './src/assets/styles/index.scss')
      })
      .end()
      .end()
      .oneOf('normal-modules')
      .use('thread-loader')
      .loader('thread-loader')
      .end()
      .use('sass-resources-loader')
      .loader('sass-resources-loader')
      .options({
        resources: path.resolve(__dirname, './src/assets/styles/index.scss')
      })
      .end()
      .end()
      .oneOf('normal')
      .use('thread-loader')
      .loader('thread-loader')
      .end()
      .use('sass-resources-loader')
      .loader('sass-resources-loader')
      .options({
        resources: path.resolve(__dirname, './src/assets/styles/index.scss')
      })
      .end();

  }
};

const path = require('path');

module.exports = {
  chainWebpack: (config) => {
    config.module
      .rule('vue')
      // Удалено использование thread-loader для vue
      .end();

    config.module
      .rule('scss')
      .oneOf('vue-modules')
      .use('sass-resources-loader')
      .loader('sass-resources-loader')
      .options({
        resources: path.resolve(__dirname, './src/assets/styles/index.scss')
      })
      .end()
      .end()
      .oneOf('vue')
      .use('sass-resources-loader')
      .loader('sass-resources-loader')
      .options({
        resources: path.resolve(__dirname, './src/assets/styles/index.scss')
      })
      .end()
      .end()
      .oneOf('normal-modules')
      .use('sass-resources-loader')
      .loader('sass-resources-loader')
      .options({
        resources: path.resolve(__dirname, './src/assets/styles/index.scss')
      })
      .end()
      .end()
      .oneOf('normal')
      .use('sass-resources-loader')
      .loader('sass-resources-loader')
      .options({
        resources: path.resolve(__dirname, './src/assets/styles/index.scss')
      })
      .end();
  }
};

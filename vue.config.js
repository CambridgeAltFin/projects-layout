const path = require('path');

module.exports = {
  chainWebpack: (config) => {
    // Обработка файлов Vue
    config.module.rule('vue').use('vue-loader').loader('vue-loader');

    // Обработка SCSS
    config.module
      .rule('scss')
      .oneOf('vue-modules')
      .use('sass-loader')
      .loader('sass-loader')
      .options({
        sourceMap: true
      })
      .end()
      .use('sass-resources-loader')
      .loader('sass-resources-loader')
      .options({
        resources: [
          path.resolve(__dirname, './src/assets/styles/index.scss') // Другие стили
        ]
      })
      .end();
  }
};

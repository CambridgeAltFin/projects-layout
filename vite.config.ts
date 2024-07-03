import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue2';
import { resolve } from 'path';
import config from './package.json';
import postcssImport from 'postcss-import';
import postcss from 'postcss';

export default defineConfig({
  plugins: [vue()],
  build: {
    lib: {
      entry: resolve(__dirname, 'src/index.js'),
      name: config.name,
      formats: ['es', 'cjs', 'umd'],
      fileName: (format) => `${config.name}.${format}.js`,
    },
    rollupOptions: {
      external: ['vue', 'vuetify'],
      output: {
        globals: {
          vue: 'Vue',
          vuetify: 'Vuetify',
        },
      },
    },
  },
  css: {
    postcss: {
      plugins: [postcss(), postcssImport()],
    },
    preprocessorOptions: {
      scss: {
        additionalData: `@import "@/assets/styles/index.scss";`,
      },
    },
  },
  resolve: {
    alias: {
      '@': resolve(__dirname, 'src'),
    },
  },
});
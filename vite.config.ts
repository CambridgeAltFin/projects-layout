import {defineConfig} from 'vite';
import vue from '@vitejs/plugin-vue2';
import {resolve} from 'path';
import config from './package.json';

export default defineConfig({
  plugins: [vue()],
  build: {
    lib: {
      entry: resolve(__dirname, 'src/index.js'),
      name: config.name,
      formats: ['es', 'cjs', 'umd'],
      fileName: (format) => `${config.name}.${format}.js`
    },
    rollupOptions: {
      external: ['vue'],
      output: {
        globals: {
          vue: 'Vue'
        }
      }
    }
  },
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `
        @import "@/assets/styles/index.scss"; 
        @import "vuetify/dist/vuetify.min.css";
        @import '@mdi/font/css/materialdesignicons.min.css';
        `
      }
    }
  },
  resolve: {
    alias: {
      '@': resolve(__dirname, 'src')
    }
  }
});

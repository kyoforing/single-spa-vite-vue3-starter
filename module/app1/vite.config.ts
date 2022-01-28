import { loadEnv, defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import eslintPlugin from 'vite-plugin-eslint';

export default ({ mode }) => {
  return defineConfig({
    base: loadEnv(mode, process.cwd()).VITE_APP_NAME,
    plugins: [vue(), eslintPlugin()],
    server: {
      https: false,
      port: 3001
    },
    preview: {
      host: 'localhost',
      port: 5012
    },
    build: {
      terserOptions: {
        compress: {
          drop_console: true,
          drop_debugger: true
        }
      },
      cssCodeSplit: true,
      assetsDir: '',
      lib: {
        entry: 'src/main.ts',
        formats: ['iife'],
        name: 'app1',
        fileName: 'app1'
      }
    }
  });
};

import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import monkey, { cdn } from 'vite-plugin-monkey';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    monkey({
      entry: 'src/main.ts',
      userscript: {
        name: "原神语音听书导入",
        icon: 'https://v2.genshinvoice.top/favicon.ico',
        namespace: 'https://yfi.moe',
        author: "Yunfi <i@yfi.moe>",
        match: ['https://v2.genshinvoice.top/*'],
      },
      build: {
        externalGlobals: {
          vue: cdn.staticfile('Vue', 'dist/vue.global.prod.js'),
        },
      },
    }),
  ],
});

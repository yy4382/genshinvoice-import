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
        description: "从 https://bv2.firefly.matce.cn 导入原神语音用于听书",
        icon: 'https://bv2.firefly.matce.cn/favicon.ico',
        namespace: 'https://yfi.moe',
        author: "Yunfi <i@yfi.moe>",
        match: ['https://bv2.firefly.matce.cn/*'],
        license: 'MIT',
      },
      build: {
        externalGlobals: {
          vue: cdn.staticfile('Vue', 'vue.global.prod.min.js'),
        },
      },
    }),
  ],
});

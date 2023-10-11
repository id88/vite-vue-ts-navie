// vite.config.ts
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { NaiveUiResolver } from 'unplugin-vue-components/resolvers'
import { resolve } from "path";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    AutoImport({
      imports: [
        'vue',
        {
          'naive-ui': [
            'useDialog',
            'useMessage',
            'useNotification',
            'useLoadingBar'
          ]
        }
      ]
    }),
    Components({
      resolvers: [NaiveUiResolver()]
    })
  ],
  base: './',
  resolve: {
    alias: {
        "@": resolve(__dirname, "./src"), //把 src 的别名设置为 @
     },
     // 类型： string[] 导入时想要省略的扩展名列表。
     // extensions: ['.js', '.ts', '.jsx', '.tsx', '.json', '.vue', '.mjs']
}
})
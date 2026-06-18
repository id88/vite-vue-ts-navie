# Vue 3 + TypeScript + Vite + Pinia + Naive UI

This template should help get you started developing with Vue 3 and TypeScript in Vite. The template uses Vue 3 `<script setup>` SFCs, check out the [script setup docs](https://vuejs.org/api/sfc-script-setup.html) to learn more.

## Recommended IDE Setup

- [VS Code](https://code.visualstudio.com/) + [Vue - Official](https://marketplace.visualstudio.com/items?itemName=Vue.volar) (and disable Vetur).

## Type Support For `.vue` Imports in TS

TypeScript cannot handle type information for `.vue` imports by default, so we replace the `tsc` CLI with `vue-tsc` for type checking. In editors, we need [Vue - Official](https://marketplace.visualstudio.com/items?itemName=Vue.volar) extension to make the TypeScript language service aware of `.vue` types.

## 自动更新所有依赖版本

使用 npm-check-updates 工具，可以快速更新 package.json 中的依赖版本到最新版本：

1. 安装 npm-check-updates

   如果尚未安装，可以全局安装：
   ```bash
   npm install -g npm-check-updates
   ```

2. 检查可用更新

   运行以下命令，查看有哪些依赖需要更新：
   ```bash
   ncu
   ```

3. 更新依赖版本

   运行以下命令，将 package.json 中的所有依赖更新到最新版本：
   ```bash
   ncu -u
   ```

4. 重新安装依赖

   更新后，运行以下命令重新安装依赖：
   ```bash
   npm install
   ```

5. 测试开发环境运行

   在更新依赖后，启动项目：
   ```bash
   npm run dev
   ```

6. 测试生产构建

   在确保开发环境运行正常后，测试生产构建：
   ```bash
   npm run build
   npm run preview
   ```

## 手动更新依赖

在项目目录下运行以下命令，查看可更新的依赖：
```bash
npm outdated
```
这个命令会列出当前依赖、期望版本和最新版本的对比表格。

运行以下命令更新所有依赖到最新版本：
```bash
npm install naive-ui@latest pinia@latest vue@latest vite@latest @vitejs/plugin-vue@latest @types/node@latest typescript@latest vue-tsc@latest unplugin-auto-import@latest unplugin-vue-components@latest @vicons/ionicons5@latest
```
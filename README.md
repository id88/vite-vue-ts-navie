# Vue 3 + TypeScript + Vite + Pinia + Navie-UI

This template should help get you started developing with Vue 3 and TypeScript in Vite. The template uses Vue 3 `<script setup>` SFCs, check out the [script setup docs](https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup) to learn more.

## Recommended IDE Setup

- [VS Code](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) (and disable Vetur) + [TypeScript Vue Plugin (Volar)](https://marketplace.visualstudio.com/items?itemName=Vue.vscode-typescript-vue-plugin).

## Type Support For `.vue` Imports in TS

TypeScript cannot handle type information for `.vue` imports by default, so we replace the `tsc` CLI with `vue-tsc` for type checking. In editors, we need [TypeScript Vue Plugin (Volar)](https://marketplace.visualstudio.com/items?itemName=Vue.vscode-typescript-vue-plugin) to make the TypeScript language service aware of `.vue` types.

If the standalone TypeScript plugin doesn't feel fast enough to you, Volar has also implemented a [Take Over Mode](https://github.com/johnsoncodehk/volar/discussions/471#discussioncomment-1361669) that is more performant. You can enable it by the following steps:

1. Disable the built-in TypeScript Extension
   1. Run `Extensions: Show Built-in Extensions` from VSCode's command palette
   2. Find `TypeScript and JavaScript Language Features`, right click and select `Disable (Workspace)`
2. Reload the VSCode window by running `Developer: Reload Window` from the command palette.


## 自动更新所有依赖版本
使用 npm-check-updates 工具，可以快速更新 package.json 中的依赖版本到最新版本：

1. 安装 npm-check-updates
如果尚未安装，可以全局安装：
```
npm install -g npm-check-updates
```

2. 检查可用更新
运行以下命令，查看有哪些依赖需要更新：
```
ncu
```

3. 更新依赖版本
运行以下命令，将 package.json 中的所有依赖更新到最新版本：
```
ncu -u
```

4. 重新安装依赖
更新后，运行以下命令重新安装依赖：
```
npm install
```

5. 测试开发环境运
在更新依赖后，启动项目
```
npm run dev
```

6. 测试生产构建
在确保开发环境运行正常后，测试生产构建：
```
npm run build
npm run preview
```
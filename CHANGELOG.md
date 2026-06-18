
## 2026年6月19日
 - 更新依赖：vite ^6.2.4→^8.0.16, @vitejs/plugin-vue ^5.2.3→^6.0.7, typescript ^5.8.2→^6.0.3, vue-tsc ^2.2.8→^3.3.5, vue ^3.5.13→^3.5.38, pinia ^3.0.1→^3.0.4, naive-ui ^2.41.0→^2.44.1, @types/node ^22.13.17→^25.9.3, unplugin-auto-import ^19.1.2→^21.0.0, unplugin-vue-components ^28.4.1→^32.1.0
 - 优化代码：HelloWorld.vue 合并双 script 块为单一 script setup
 - 修复 index.html title（Element-plus → Naive UI），清理注释，统一缩进格式
 - 统一 vite.config.ts 代码风格
 - 适配 TypeScript 6：移除已弃用的 baseUrl，tsconfig.json 补充 auto-imports.d.ts 和 components.d.ts
 - 优化 tsconfig.node.json：移除冗余的 allowSyntheticDefaultImports（bundler 模式下不需要）
 - 更新 GitHub Actions：checkout v3→v4, setup-node v3→v5, github-script v6→v7, Node.js 18→22
 - dependabot.yml 新增 github-actions 生态系统自动更新
 - 更新 README.md：修复标题拼写（Navie→Naive），更新 IDE 推荐为 Vue - Official 扩展，移除过时的 Take Over Mode 说明，更新文档链接，修复缺字，规范 markdown 格式

## 2024年12月8日
 - 更新依赖

## 2023年10月10日
 - 添加 github action
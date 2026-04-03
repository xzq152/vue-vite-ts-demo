# Vue 3 + TypeScript + Vite + Element Plus

这是一个基于 **Vue 3**、**TypeScript** 和 **Vite** 构建的现代化前端项目模板。项目集成了 **Element Plus** UI 组件库、**Pinia** 状态管理、**Vue Router** 路由管理、**Vue I18n** 国际化等常用功能，并配置了完善的代码规范和构建工具。

## 技术栈

- **框架**: Vue 3.5+ (使用 `<script setup>` 语法)
- **语言**: TypeScript 5.5+
- **构建工具**: Vite 6.3+
- **UI 组件库**: Element Plus 2.9+
- **状态管理**: Pinia 3.0+ (含持久化插件)
- **路由**: Vue Router 4.5+
- **HTTP 请求**: Axios 1.9+
- **国际化**: Vue I18n 11.1+
- **开发工具**:
  - ESLint + Prettier (代码规范)
  - unplugin-auto-import (自动导入)
  - unplugin-vue-components (组件自动注册)
  - vite-plugin-svg-icons (SVG 图标)
  - code-inspector-plugin (源码定位)

## 项目结构

```
├── src/
│   ├── api/              # API 接口
│   ├── assets/           # 静态资源
│   ├── components/       # 公共组件
│   ├── enums/            # 枚举定义
│   ├── languages/        # 国际化文件
│   ├── router/           # 路由配置
│   ├── stores/           # Pinia 状态管理
│   ├── typings/          # TypeScript 类型定义
│   ├── utils/            # 工具函数
│   ├── views/            # 页面组件
│   ├── App.vue           # 根组件
│   └── main.ts           # 入口文件
├── build/                # 构建配置
├── public/               # 公共资源
├── .env                  # 环境变量
├── .env.development      # 开发环境变量
├── .env.production       # 生产环境变量
├── vite.config.ts        # Vite 配置
├── tsconfig.json         # TypeScript 配置
└── package.json          # 项目依赖
```

## 快速开始

### 环境要求

- Node.js >= 16.18.0
- pnpm (推荐使用)

### 安装依赖

```bash
pnpm install
```

### 启动开发服务器

```bash
pnpm dev
```

### 构建

```bash
# 开发环境构建
pnpm build:dev

# 生产环境构建
pnpm build:pro
```

### 预览构建结果

```bash
pnpm preview
```

## 特性说明

### 自动导入
项目配置了 `unplugin-auto-import` 和 `unplugin-vue-components`，支持：
- Vue API 自动导入（ref, reactive, computed 等）
- Element Plus 组件自动注册
- 自定义组件自动注册

### 代码规范
- ESLint + Prettier 统一代码风格
- 提交前自动格式化（需配置 husky）
- `.editorconfig` 保持编辑器一致性

### 开发体验优化
- **Code Inspector**: 点击页面元素可直接打开编辑器对应代码位置
- **Vue DevTools**: 内置 Vue 开发者工具支持
- **类型提示**: 完整的 TypeScript 类型支持

### 构建优化
- Gzip 压缩
- 打包分析 (rollup-plugin-visualizer)
- HTML 模板处理
- SVG 雪碧图

## 开发指南

### 添加新页面
在 `src/views/` 目录下创建新的 Vue 组件，并在 `src/router/` 中配置路由。

### 添加全局组件
将组件放入 `src/components/` 目录，会自动注册到全局。

### 配置代理
在 `vite.config.ts` 中配置 `server.proxy` 选项。

### 国际化
在 `src/languages/` 目录下添加新的语言包文件。

## 许可证

MIT

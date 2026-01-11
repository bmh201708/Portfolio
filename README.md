# Jin Yike 个人作品集网站

一个基于 React + Vite + TailwindCSS 构建的现代化个人作品集网站，采用极简主义设计风格，注重视觉层次和交互体验。

![首页展示](./docs/homepage.png)

## 功能特性

- **响应式设计** - 完美适配桌面端和移动端
- **流畅动画** - 页面切换和元素过渡动画
- **作品展示** - 支持多项目展示，含轮播画廊
- **自定义光标** - 独特的交互体验
- **SEO 友好** - 规范的 HTML 结构

## 技术栈

| 技术 | 用途 |
|-----|-----|
| React 18 | 前端框架 |
| Vite 4 | 构建工具 |
| TailwindCSS 3 | 样式框架 |
| React Router 7 | 路由管理 |
| Lucide React | 图标库 |

## 项目结构

```
Portfolio/
├── public/              # 静态资源
│   └── portfolio/       # 作品图片目录
├── src/
│   └── data/
│       └── projects.js  # 作品数据配置
├── App.jsx              # 应用入口
├── main.jsx             # 主页面组件
├── Layout.jsx           # 布局组件
├── ProjectDetail.jsx    # 作品详情组件
├── ProjectPage.jsx      # 作品页面路由
├── index.css            # 全局样式
└── tailwind.config.js   # Tailwind配置
```

## 快速开始

### 环境要求

- Node.js 18+
- npm 或 yarn

### 安装依赖

```bash
npm install
```

### 本地开发

```bash
npm run dev
```

访问 http://localhost:5173 查看网站

### 构建生产版本

```bash
npm run build
```

构建产物将输出到 `dist` 目录

## 页面展示

### 作品列表页

![作品列表](./docs/works.png)

### 作品详情页

![作品详情](./docs/project-detail.png)

## 许可证

MIT License

---

Made with ❤️ by Jin Yike

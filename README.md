# 高校图书管理系统

## 项目简介

本项目是一个基于 Vue2 和 Node.js 的高校图书管理系统，旨在为学校提供高效、便捷的图书管理与借阅功能。系统包括图书管理、用户管理、借阅管理、公告系统、论坛系统和日志系统等功能模块，并采用前后端分离架构进行开发。

该项目包含了以下模块：

- **图书管理**：提供图书的增、删、改、查功能。
- **用户管理**：支持用户信息管理、权限控制。
- **借阅管理**：实现图书借阅、归还和借阅记录查看。
- **公告系统**：管理员发布公告，用户查看公告。
- **论坛系统**：用户可在论坛中发布留言、评论和点赞。
- **日志管理**：记录系统操作日志，超级管理员可以查看。

## 项目设置

### 安装依赖

首先，确保你已安装 [Node.js](https://nodejs.org/) 和 [Yarn](https://yarnpkg.com/)。

- Node版本推荐：16.20.2
- Yarn版本推荐：1.22.22

然后在项目根目录下运行以下命令来安装依赖：

```bash
yarn install
```

### 启动开发服务器

运行以下命令启动开发服务器（包含Vue CLI 与 Node）：

```bash
yarn serve
```

### 启动后端服务器

本项目的后端部分使用 Node.js 实现，在[package.json](./package.json)已集成后端启动脚本，也可以通过以下命令单独启动后端服务器：

```bash
yarn start-server
```

### 生产构建

运行以下命令进行生产环境构建：

```bash
yarn build
```

运行以下命令使用Vue CLI进行生产环境构建（包含Node）：

```bash
yarn serve-prod
```

## 功能模块

- **图书管理**：提供图书的增、删、改、查功能。
- **用户管理**：支持用户信息管理、权限控制。
- **权限控制**：对账户进行角色划分，实现不同角色的权限控制。
- **图书搜索**：独立全站搜索功能，实现快速查找图书信息。
- **借阅管理**：用户可借阅、归还图书，管理员可查看借阅记录，手动维护借阅记录。
- **公告系统**：管理员发布公告，用户查看公告，可在发布新书时进行自动推送等。
- **论坛系统**：用户可在论坛中发布、评论和点赞。
- **日志管理**：超级管理员可查看系统操作日志，包含系统事件，用户操作等。

## 运行环境和技术栈

- **前端**：
  - Vue.js + Vuex + Vue Router + Remix Icon
- **后端**：
  - Node.js + Express
- **数据库**：
  - MySQL
- **开发工具**：
  - Webpack + Babel
  - ESLint + Prettier

## 环境变量

项目中使用 `.env` 文件管理不同环境的配置。请根据需求按配置下列环境：

- `.env.development`：开发环境配置。
- `.env.production`：生产环境配置。

这些文件包含了数据库连接信息等配置，确保在不同环境下正确运行。

### 示例 `.env.development` 配置

```plaintext
# .env.development

VUE_APP_API_BASE_URL=your_api_base_url

# Database configuration
DB_HOST=your_database_host
DB_USER=your_username
DB_PASSWORD=your_password
DB_NAME=your_database_name
```

## 常见问题

### 1. **如何配置开发环境？**

- 安装 [Node.js](https://nodejs.org/) 和 [Yarn](https://yarnpkg.com/)
- 在项目根目录运行 `yarn install` 安装依赖
- 启动开发服务器 `yarn serve`
- 数据库初始化SQL文件可使用[db_init.sql](./src/db/db_init.sql)

### 2. **如何进行生产构建？**

- 运行 `yarn build` 打包项目，部署至生产服务器。

## 开发日志

本项目开发日志，记录了项目的迭代过程和新增功能，帮助开发者了解项目的进展和历史。
详见 [开发日志](./note.md)

## License

本项目采用 [MIT License](./LICENSE)。

### 说明

- **项目简介**：简要介绍了项目的功能与背景，便于用户快速了解项目的目标和意义。
- **安装与开发流程**：提供了如何安装依赖、运行开发服务器以及生产构建的步骤，方便开发者快速开始开发。
- **功能模块**：详细列出了项目的各个功能模块，帮助开发者和用户了解项目组成。
- **开发日志**：记录了项目的迭代过程和新增功能，便于开发者了解项目的进展和历史。
- **常见问题**：提供了开发和生产环境中的常见问题解答，帮助新开发者快速上手。

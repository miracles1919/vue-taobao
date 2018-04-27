# Vue-taobao

> 采用vue-cli脚手架，仿照淘宝的项目（目前只实现了一小部分..）

> [后端地址](https://github.com/miracles1919/node-taobao)


## 说明

-   技术栈: vue2 + webpack + es6/7
-   开发环境 macOS 10.12.6 node 8.9.0 vue 2.9.2

## 开发构建

### 目录结构

```bash

├── build
├── config
├── dist
├── index.html
├── package-lock.json
├── package.json
├── src
│ ├── App.vue
│ ├── assets
│ │ └── logo.png
│ ├── components
│ │ ├── Carousel
│ │ ├── ...
│ ├── container
│ │ ├── cart
│ │ ├── ...
│ ├── main.js
│ ├── router
│ │ └── index.js
│ ├── service
│ ├── style
│ │ ├── common.less
│ │ └── iconfont.css
│ └── utils
│     └── request.js
├── static
```

### 快速开始

进入目录安装依赖并运行:

```bash
git clone https://github.com/miracles1919/vue-taobao.git

cd vue-taobao

npm i

# 开启本地服务器localhost:8088
npm run dev
```

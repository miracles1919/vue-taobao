# Vue-taobao

> 采用vue-cli脚手架，仿照淘宝的项目（目前只实现了一小部分..）

> [已部署到阿里云](http://47.98.152.90:3001/#/home)

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

### 跨域方案
1、CORS（推荐）全称 Cross-origin resource sharing

最简单的配置就是服务端设置响应头 Access-Control-Allow-Origin: `*`，浏览器发起请求的时候，会有一个options的预检，来判断服务器是否接受后续真正的请求

```javascript
// node express 为例
app.all('*', (req, res, next) => {
  // 用于预检请求
  res.header('Access-Control-Allow-Origin', '*')
  res.header('Access-Control-Allow-Methods', 'POST,GET,OPTIONS')
  res.header('Access-Control-Allow-Headers', 'Content-Type')
  if(req.method === 'OPTIONS') {
    console.log('options')
    res.sendStatus(200)
  } else {
    next()
  }
})
```

2、JSONP

原理就是创建一个script标签，将它的src设置成请求的url，然后设置回调函数并将回调函数名作为参数传至服务器

```javascript
let head = document.getElementsByTagName('head')[0]
let script = document.createElement('script')
let callbackName = `jsonp${Math.round(Math.random() * 1000000)}`

url += url.indexOf('?') > 0 ? '' : '?'
for (let key in data) {
  url += `${key}=${data[key]}&`
}
url += `callback=${callbackName}`
script.src = url

head.appendChild(script)

window[callbackName] = function (data) {
  resolve(data)
  delete window[callbackName]
}

```
服务端返回数据的时候，记得要用jsonp格式而不是json，否则会报错`Uncaught SyntaxError: Unexpected token :`


### Cookie
cookie由服务端设置，具体尽情期待...
```
// 设置两周的缓存
res.setHeader('Set-Cookie', `uid=${uid};Max-age=${86400 * 7 * 2};Path=/`)
```

### 部署
[👇戳这里，从零部署指南](https://github.com/miracles1919/personal-notes/blob/master/%E9%98%BF%E9%87%8C%E4%BA%91%E9%83%A8%E7%BD%B2.md)

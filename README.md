# nodejs-http-proxy-template
使用 **express** + **http-proxy-middleware** 搭建 nodejs跨域代理

## 如何使用

### install

```
 npm install
```
### 替换
- 替换 dist 目录下的 index.html

- 替换 main.config.js 中的 BASE_URL 地址

### 运行

```
npm run serve
```

### 原理
主要是利用**服务端无跨域**来实现

通过`express框架`创建一个本地服务器，使用`http-proxy-middleware中间件` 监听到客户端的 `api` 请求后 通过本地代理服务器进行转发请求


`客户端 -> 本地服务器 -> 后台服务器`

## 许可
[MIT License](LICENSE)

nodejs-http-proxy-template Copyright © 2021 angxuejian
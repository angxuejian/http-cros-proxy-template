# http-cros-proxy-template
Corss-domain proxy template

## 目录
名称 | 简介| 地址 
--- | --- |---
express | nodejs中间件跨域 | [ >>> ](/proxy-template/express/README.md)
webpack | nodejs中间件跨域 | [ >>> ](/proxy-template/webpack/README.md)
nginx   | nginx反向代理    | [ >>> ](/proxy-template/nginx/README.md)

## localhost
均运行在 http://localhost:1548



## 原理
1、express

通过`express框架`创建一个本地服务器，使用`http-proxy-middleware中间件` 监听到客户端的 `api` 请求后 通过本地代理服务器进行转发请求

`客户端 -> 本地服务器 -> 后台服务器`


2、webpack

将 `1、express`封装成 webpack-dev-server 食用即可

3、ngnix 

ngnix服务启动后会 `监听指定端口号`的请求，`将其请求转发到`对应的服务器上

## 问答
1、中间件与反向代理的区别？

二者有些相似、模棱两可、拿不准; [去点醒他](https://github.com/angxuejian/http-cros-proxy-template/issues)

## 许可
[MIT License](LICENSE)

http-cros-proxy-template Copyright © 2021 angxuejian
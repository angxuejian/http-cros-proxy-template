const express = require('express')
const { createProxyMiddleware } = require('http-proxy-middleware')
const config = require('./main.config')
const net = require('net')

// 中间件-跨域代理
const proxy = {
  target: config.BASE_URL, // 请求的url
  changeOrigin: true, // 是否需要 虚拟站点
  pathRewrite: {
    '^/api': ''  // 遇见 api/ 重写为 空
  } // 重写url
}

const app = express()
let port = config.PORT // 端口

// 检测当前端口是否被使用
function init() {
  const server = net.createServer().listen(port)

  server.on('listening', () => {
    server.close()
    startServer()
  })

  server.on('error', ({ code }) => {
    // 端口被占用
    if (code === 'EADDRINUSE') { 
      console.log(`- EADDRINUSE: \x1B[31m%s\x1B[0m`, `Port ${port} is already in use and a new port is being reassigned\n`)
      port = port + 1
      init()
    }
  })
}

// 启动服务
function startServer() {
  app.use(express.static('./public'))
  app.use('/api', createProxyMiddleware(proxy))
  app.listen(port, () => {
    console.log('\nApp running at:\n\n- Local: \x1B[34m%s\x1B[0m\n', 'http://localhost:' + port)
  })
}


init()

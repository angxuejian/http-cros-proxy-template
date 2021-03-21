const express = require('express')
const { createProxyMiddleware } = require('http-proxy-middleware')
const config = require('./main.config')

// 中间件-跨域代理
const proxy = {
  target: config.BASE_URL, // 请求的url
  changeOrigin: true, // 是否需要 虚拟站点
  pathRewrite: {
    '^/api': ''  // 遇见 api/ 重写为 空
  } // 重写url
}

const app = express()
const port = config.PORT // 端口
app.use(express.static('./public'))

app.use('/api', createProxyMiddleware(proxy))

app.listen(port, () => {
  console.log('\nApp running at:\n\n- Local: \x1B[34m%s\x1B[0m\n', 'http://localhost:' + port)
})
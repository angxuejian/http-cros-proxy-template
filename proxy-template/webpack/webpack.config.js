const path = require('path')
const HttpWebpackPlugin = require('html-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const TerserPlugin = require('terser-webpack-plugin')
const config = require('./main.config')
const resolve = file => {
  return path.resolve(__dirname, file)
}

module.exports = {
  entry: resolve('src/main.js'),

  devServer: {
    contentBase: resolve('public'),
    port: config.PORT,
    proxy: {
      "/api": {
        target: config.BASE_URL,
        changeOrigin: true,
        pathRewrite: {
          '^/api': ''
        }
      }
    }
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HttpWebpackPlugin({
      title: 'Webpack-Proxy', // 标题
      template: resolve('public/index.html'), // 模板文件
      inject: 'body', // 将 script 标签放至 body 最下面
      scriptLoading:'blocking', // script属性 async or defer
    })
  ],
  optimization: {
    minimize: true, // 开启 压缩js
    minimizer: [
      new TerserPlugin({
        extractComments: false, // 关闭 .license.txt 文件
      }),
    ],
  },
  output: {
    filename: 'js/index.js',
    path: resolve('dist')
  }
}
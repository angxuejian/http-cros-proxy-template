# ngnix-proxy
使用 **ngnix 反向代理**跨域；版本：ngnix-1.18.0

## 如何使用

### 替换
- 替换 `html目录`下的 index.html
- 修改 `conf目录`下的 nginx.conf(#49) 中的proxy_pass 配置

### 运行
```
// 进入当前文件夹中的cmd

start nginx 
```
本地地址：http://localhost:1548


### 常用命令
- `start nginx` 开启服务
- `nginx -s quit` 关闭服务
- `nginx -s reload` 修改配置后 刷新配置
<br>
<br>

- `tasklist /fi "imagename eq nginx.exe"` 查看 nginx 进程
- `taskkill /f /im nginx.exe` 关闭 所有 nginx 进程
- `taskkill /f /pid xxx` 关闭指定 pid 进程
<br>
<br>

- `netstat -ano` 查看端口使用情况
- `netstat -ano | findstr 端口号` 查看指定端口号使用情况
### 注意事项

1、 `start nginx`后屏幕一闪而过, 并没有启动服务？

- 查看`端口`是否被占用，切换端口
- 查看`logs目录`下的`error.log`，以防`语法错误`

2、 修改nginx配置后 没起作用？

- 可能是运行多个nginx服务问题。先关闭所有nginx服务，重新打开
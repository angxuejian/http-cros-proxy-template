import _ from 'lodash'
const ajax = new XMLHttpRequest()
let num = 0


const app = document.getElementById('app')

app.innerHTML = `
  <button id='get'>get请求</button>
  <button id='post'>post请求</button>
`

const get = document.getElementById('get')
get.onclick = function() {
  const data = {
    url: 'yfzc/getuserinfo',
    method: 'GET'
  }
  request(data).then(res => {
    console.log("response 信息：\n")
    console.log(res)
    console.log('\n\n\n')
  })
}

const post = document.getElementById('post')
post.onclick = function() {
  const data = {
    url: 'yfzc/getfilelist',
    method: 'POST'
  }
  request(data).then(res => {
    console.log("response 信息：\n")
    console.log(res)
    console.log('\n\n\n')
  })
}



// 封装请求
const request = function(prams) {
  const { url, method = 'GET', data = '' } = prams
  ajax.open(method, `/api/${url}`)

  ajax.setRequestHeader("Content-Type", "application/x-www-form-urlencoded;");//缺少这句，后台无法获取参数
  ajax.setRequestHeader("X-Token", "1122334")

  ajax.send(data)
  
  return new Promise((resolve, reject) => {
    ajax.onload = function(res) {
      num++
      alert(`状态码是${res.target.status}\n\n请从控制台查看 request 信息`)
      console.log(`第 ${num} 次 请求`)
      console.log('-------------------')
      console.log('request 信息：')
      console.log(res.target)
      resolve(JSON.parse(res.target.response))
    }
  })
}
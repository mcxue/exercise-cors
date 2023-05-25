const express = require('express')
const app = express()

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/1', (req, res) => {
  res.send('你能收到消息吗')
})

app.get('/2', (req, res) => {
  res.header('Access-Control-Allow-Origin', req.headers.origin)
  res.send(`我设置了 Access-Control-Allow-Origin: ${req.headers.origin}，应该可以收到消息`)
})

app.get('/3', (req, res) => {
  res.header('Access-Control-Allow-Origin', '*')
  res.send('我设置了 Access-Control-Allow-Origin: *，应该可以收到消息')

})


app.post('/4', (req, res) => {
  res.header('Access-Control-Allow-Origin', req.headers.origin)
  res.send(`我设置了 Access-Control-Allow-Origin: ${req.headers.origin}，应该可以收到消息`)
})

app.post('/5', (req, res) => {
  res.header('Access-Control-Allow-Origin', '*')
  res.send(`我设置了 Access-Control-Allow-Origin: *，应该可以收到消息`)
})

app.post('/6', (req, res) => {
  res.header('Access-Control-Allow-Origin', '*')
  res.send(`我设置了 Access-Control-Allow-Origin: *，复杂请求应该收不到`)
})

app.options('/7', (req, res) => {
  res.header('Access-Control-Allow-Origin', '*')
  res.header('Access-Control-Allow-Headers', 'Content-Type')
  res.header('Access-Control-Allow-Methods', 'POST')
  res.send(`这是预检请求`)
})

app.post('/7', (req, res) => {
  res.header('Access-Control-Allow-Origin', req.headers.origin)
  res.send(`我设置了 Access-Control-Allow-Origin、Access-Control-Allow-Headers、Access-Control-Allow-Methods，能收到消息`)
})

app.listen(3001, () => {
  console.log('示例应用正在监听 3001 端口 !')
})

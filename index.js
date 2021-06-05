const http = require('http')

const router = require('./router')

const server = http.createServer((req, res) => {
  const { statusCode, responseData } = router(req.url)
  res.statusCode = statusCode
  res.end(responseData)
})

server.listen(3000)

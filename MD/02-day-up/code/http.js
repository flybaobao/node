let http = require('http')

let fs = require('fs')

var data

fs.readFile('./text.text', (error, response) => {
    if (error) {
        console.log(response)
    } else {
        console.log(response.toString())
        console.log('1111')
        data = response.toString()
    }
})

let server = http.createServer()

server.on('request', (request, response) => {
    console.log(request.url)
    response.writeHead(200, {
        'Content-Type': 'text/plain;charset=utf-8'
    })
    switch (request.url) {
        case '/':
            response.end('Hello welcome to china')
            break
        case '/login':
            response.end(data)
            break
        default :
            response.end('404 NOT FOUND')
    }
})

server.listen(3000, () => {
    console.log('启动成功。。。')
})
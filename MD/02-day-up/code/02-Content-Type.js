let http = require('http')

let fs = require('fs')

var data



let server = http.createServer()

server.on('request', (request, response) => {
    console.log(request.url)
    response.writeHead(200, {
        'Content-Type': 'text/plain;charset=utf-8'
        // 'Content-Type': 'text/html;charset=utf-8'
        // 'Content-Type': 'image/jpeg'
    })
    switch (request.url) {
        case '/':
            response.end('Hello welcome to china')
            break
        case '/login':
        	fs.readFile('./text.text', (error, response) => {
			    if (error) {
			        console.log(response)
			    } else {
			        console.log(response.toString())
			        console.log('1111')
			        data = response.toString()
			    }
			})
            response.end(data)
            break
        default :
            response.end('404 NOT FOUND')
            break
    }
})

server.listen(3000, () => {
    console.log('启动成功。。。')
})
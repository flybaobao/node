let http = require('http')

let server = http.createServer()

server.on('request', function (requset, response) {
	let urls = requset.url
	if (urls === '/login') {
		response.write('login page')
	} else if (urls === '/') {
		response.write('index page')
	} else {
		response.write('404')
	}
	response.end()
console.log('ok')
})

server.listen(3000, function () {
	console.log('fuwuqi 可以访问了')
})

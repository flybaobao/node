let http = require('http')
let server = http.createServer()
server.on('request', function (request, response) {
	let url = request.url
	
	if (url === '/furit') {
		let furit = [
		{"name":"苹果","color":"red"},
		{"name":"香蕉","color":"yellow"}
		]
		let furits = JSON.stringify(furit)
		// response 输出的 都是字符串！！！
		response.end(furits)
	} else {
		response.end('404 Not Found')
	}
})

server.listen(3000, function () {
	console.log('okokok服务器 请求成功')
})

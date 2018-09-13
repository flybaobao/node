
let http = require('http')

let server = http.createServer()


// request 请求事件处理函数 ，需要接受看两个 餐宿

// REQUEST 请求对象 
//			请求对象可以用来获取 客户端 的一些 请求信息 例如请求路径
// response 响应对象
//			响应对象可以用来给客户端发送 响应信息
server.on('request', function (request, response) {
	console.log('收到 客户请求路径' + request.url)
	
	// response  对象有个方法  write 可以用来发给客户端 发送相应数据
	// write 可以使用多次最后 一定   要用 end  结束    否则  浏览器 会一直等待
	response.write('hello')
	response.write('nodejs')
	response.end() //告诉  浏览器  我已经说完了  你可以  返回数据了
	
})

// 4. 绑定端口号 启动服务器
server.listen(3000, function () {
	console.log('服务器 已经启动，可以访问http://127.0.0.1:3000')
})

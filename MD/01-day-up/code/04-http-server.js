// 使用node构建一个web' 服务器'
// node中 会有个 核心模块   http
// http 职责  创建服务器

// 1。加载http 核心模块 
let http = require('http')

// 2. http.createServer()方法 创建一个web服务器
// 返回一个server 实例
let server = http.createServer()

// 3. 服务器 干啥
// 提供服务  对数据服务
// 发 请求
// 接收 请求
// 处理请求
// 给个 回应 反馈 （发送相应
//）
// 注册 request 请求事件

//  当客户请求过来 ，就会自动触发 服务器的request 请求事件 ，
//   然后执行第二个参数： 回调处理
server.on('request', function () {
	console.log('收到 客户请求了')
})

// 4. 绑定端口号 启动服务器
server.listen(3000, function () {
	console.log('服务器 已经启动，可以访问http://127.0.0.1:3000')
})

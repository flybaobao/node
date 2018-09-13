var fs = require('fs')
// 第一个 参数 文件路净
// 第二个 参数 内容 
// 第三个 参数 回调函数

// error

// 成功 ————》 文件写入成功 error  是 null、、、
// 失败—————》文件写入失败 error 是一个错误对象
fs.writeFile('../data/02-写文件.md','大江户 我是nodejs', function(error){
	console.log(error === null ? '写入成功' : '写入失败')
})

// 浏览器中的javascript 是没有文件操作的能力
// 但是node中的JavaScript 是具有文件操作的能力

// fs 是file-system 的简写，就是文件系统的意思
// 如果 在node 中想要进行文件操作，就  必须  引入 fs 核心模块
// 在fs 这个核心模块中就  提供了 所有文件的操作相关  API
// 例如 ：    fs.readFile  就是用来读取文件


// 1.使用 require 方法 加载 fs核心模块 
var fs = require('fs')
// 2. 读取文件

/*
 * 第一个 参数 是读取的文件路径
 * 第二个 参数是一个 回调 函数
 * 		
 * 			读取失败  error 就是错误对象    
 * 				   data undefined
 * 			读取成功  error 就是 null
 * 				   data 就是是数据
 * 		
 * */
fs.readFile('../data/00-helloWorld.txt',function (error, data) {
	if (error) {
		console.log('读取文件失败')
	} else {
		console.log(data)
	// 输出结果是 <Buffer e4 b8 80 e4 ba 9b e6 ad 8c e8 a2 ab e6 88 91 e5 90 ac e5 be 97 e6 ad 8c e8 af 8d e5 8f 91 e7 83 82 ef bc 8c e6 97 8b e5 be 8b e7 83 82 e7 86 9f e4 ba ... >
	// 原因是文件存储的 其实 是二进制 数据 01
	// 这里出现的 没有 01 是因为  转为16 进制了】
	// 无论是二进制 16 进制 人类无法识别、
	//所以 要用到   tostring 方法  进行解析
	console.log(data.toString())
	}
})

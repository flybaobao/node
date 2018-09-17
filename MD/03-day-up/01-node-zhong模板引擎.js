// art-template
// art-template 不仅可以在浏览器中使用，也可以在node中 使用

// 安装 ：
// 		npm install art-template
//		该命令 在哪 执行就会把 包下载到 哪里，默认  会下载达到 node_module目录中
//		node_modules  不要改，也不支持该

// 在 node 中 使用 art-template,模板引擎 
//  模板引擎  最在  就是 诞生 与  服务器 领域的，后来 也发展到了 前端

// 1.安装  npm install art-template 
// 2.在需要使用的  文件   模板  中 加载   art-template  
// 3.查文档     使用  模板引擎    的  API


var template = require('art-template')

var tplstr = `
<!DOCTYPE html>
<html>
	<head>
		<meta charset="UTF-8">
		<title></title>
	</head>
	<body>
		<p>大家好，我叫：{{name}}</p>
		<p>我今年{{age}}</p>
		<p>我是来自{{province}}</p>
		<p>我喜欢：{{each hobbies}}{{$value}}{{/each}}</p>
	</body>
</html>
`

var ret = template.render(tplstr, {
	name: 'jack',
	age: '18',
	province: '北京市',
	hobbies: ['写代码','打游戏','唱歌']
})
/*
 * var ret = template.render('模板字符串hello{{name}}',{
	name: 'jack'
} )
 * 
 */
console.log(ret)
let fs = require('fs')

let template = require('art-template')

fs.readFile('./模板.html', (error, res) => {
	if (error) {
		console.log('文件 读取失败！')
		return 
	}
	var ret = template.render(res.toString(), {
				name: 'jack',
				age: '18',
				province: '北京市',
				hobbies: ['写代码','打游戏','唱歌']
			})

console.log(ret)
})


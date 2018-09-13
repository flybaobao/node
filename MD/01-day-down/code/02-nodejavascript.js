let os = require('os')
// 获取操作系统 路径的
let path = require('path')
//获取当前机器的cpu

console.log(os.cpus())

//获取当前 内存
console.log(os.totalmem())

//extname 扩展名
console.log(path.extname('C:\Users\Administrator\Desktop\MD\01-day-down\01-node.md'))

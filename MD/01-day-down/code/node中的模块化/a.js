console.log('a.js start')

let b = require('./b.js')

console.log('a.js end')

// 在node 中没有全局 作用域   只有  模块 作用 域
// a加载了b  但是  b中的 变量 不会影响 到外部   外部也不会影响到  内部

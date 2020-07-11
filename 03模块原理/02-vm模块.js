let vm = require("vm");


// let name = "lm";
global.name = "lm";
let str = "console.log(name);";
// runInThisContext提供了一个可以执行字符串代码的环境，不可以访问本地变量，但可以访问全局变量
// vm.runInThisContext(str);

// runInNewContext提供了一个可以执行字符串代码的环境，不可以访问本地变量，也不可以访问全局变量
vm.runInNewContext(str);
let path = require("path");
let fs = require("fs");
let vm = require("vm");

class lmModule {
    constructor(id) {
        this.id = id; // 用于保存当前模块的绝对路径
        this.exports = {};
    }
}

lmModule._cache = {};
// 根据不同后缀查找不同方法并执行对应的方法，加载模块
lmModule._extensions = {
    ".js": function (module) {
        // 1.读取js代码
        let script = fs.readFileSync(module.id);
        // 2.将js代码包裹到函数中
        /* 
        (function (exports, require, module, __filename, __dirname) { 
            let name = "lm";
            exports.name = name;
        });
        */
        let strScript = lmModule.wrapper[0] + script + lmModule.wrapper[1];
        // 3.将将字符串转换为js代码
        let jsScript = vm.runInThisContext(strScript);
        // 4.执行转换完成后的JS代码
        /* 
        让我们包裹的函数内部的this指向module.exports这个我们创建好的对象（相当于其执行的代码所使用的参数都为module.exports里面的参数），让其的exports为module.exports，
        所以其内部使用exports暴露的代码相当于给我们之后返回出去的module.exports添加属性与方法
         */
        jsScript.call(module.exports, module.exports);
    },
    ".json": function (module) {
        let json = fs.readFileSync(module.id);
        let obj = JSON.parse(json);
        module.exports = obj;
    }
}
lmModule.wrapper = [
    '(function (exports, require, module, __filename, __dirname) { ',
    '\n});'
];
function lmRequire(filePath) {
    // 1.将传入的相对路径转化为绝对路径
    let absPath = path.join(__dirname, filePath);
    // 2.尝试从缓存中获取当前模块
    let cachedModule = lmModule._cache[absPath];
    if (cachedModule) {
        return cachedModule.exports;
    }
    // 3.如果没有缓存就自己创建一个lmModule对象，并缓存起来
    let module = new lmModule(absPath);
    lmModule._cache[absPath] = module;
    // 4.利用tryModuleLoad方法加载该模块
    tryModuleLoad(module);
    // 5.返回模块的exports
    return module.exports;
}

function tryModuleLoad(module) {
    // 1.取出模块后缀
    let extName = path.extname(module.id);
    // 2.根据不同后缀查找不同方法并执行对应的方法，加载模块
    lmModule._extensions[extName](module);
}
// 导入该模块
// let aModule = lmRequire("./03.json");
let aModule = lmRequire("./03.js");
console.log(aModule);
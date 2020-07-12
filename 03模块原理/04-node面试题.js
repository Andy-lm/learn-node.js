//1. node.js中的this为什么是一个空对象？

/* (function (exports, require, module, __filename, __dirname) {
    let name = "lm";
    exports.name = name;
});
jsScript.call(module.exports, args);
在node.js中所编写的代码会被包装在这样的一个函数中执行，而在执行该函数时其函数内部的this会指向一个空对象module.exports
在我们使用require模块后返回的对象便会拥有我们代码中所暴露的变量 */

// 2.node.js中为什么可以直接使用exports,require,module,__filename,__dirname？

/*在node.js中所编写的代码会被包装在一个函数中执行，并通过jsScript.call(module.exports, args); 改变其内部this的指向，同时给其传递参数，var args = [module.exports, require, module, filename, dirname],所以我们可以直接使用这些变量
 */

 // 3.为什么不能直接给exports赋值？

/* 因为我们的exports指向的是module.exports,通过exports.name = name;方式赋值，相当于给module.exports添加属性，之后require时我们会得到module.exports这个对象，而直接赋值的话相当于改变了exports的指向，最后返回给我们的module.exports没有得到任何改变 */

// 4.通过require导入包的时，是使用var还是let还是const？

/* 因为我们仅仅是使用包，并不是修改包所以推荐使用const好一点
const的特点是：
1.声明变量时必须赋值，且一旦赋值变量地址便不可以再次被修改
2.存在块级作用域{}，外部变量不可以访问内部变量
3.存在死区，外部声明的变量不会影响内部的变量
4.不存在变量提升
 */
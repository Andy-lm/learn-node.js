// 1.有6个任务队列
/* ┌───────────────────────┐
┌> │timers           │执行setTimeout() 和 setInterval()中到期的callback
│  └──────────┬────────────┘
│  ┌──────────┴────────────┐
│  │pending callbacks│执行系统操作的回调, 如: tcp, udp通信的错误callback
│  └──────────┬────────────┘
│  ┌──────────┴────────────┐
│  │idle, prepare    │只在内部使用
│  └──────────┬────────────┘
│  ┌──────────┴────────────┐
│  │poll             │执行与I / O相关的回调
│  │               (除了close回调、定时器回调和setImmediate()之外，几乎所有回调都执行);
│  └──────────┬────────────┘
│  ┌──────────┴────────────┐
│  │check            │执行setImmediate的callback
│  └──────────┬────────────┘
│ ┌───────────┴──────────┐
└─┤close callbacks   │执行close事件的callback，例如socket.on("close", func)
  └──────────────────────┘
 */
/*

// 两者的执行结果是随机的
setTimeout(function () {
    console.log("setTimeout");
})
setImmediate(function () {
    console.log("setImmediate");
}) */
// 2.process.nextTick()优先级高于promise.resolve()
// 3.每次在切换对列的时候会执行相应的微代码，如果相应的队列都执行完毕则会阻塞在poll队列

// 案例1：
/* Promise.resolve().then(function () {
    console.log("Promise");
});
process.nextTick(function () {
    console.log("process.nextTick1");
});
process.nextTick(function () {
    console.log("process.nextTick2");
});
process.nextTick(function () {
    console.log("process.nextTick3");
}); */

// 输出结果：
/* 
process.nextTick1
process.nextTick2
process.nextTick3
Promise 
*/

// 案例2：
/* setTimeout(function () {
    console.log("setTimeout");
});
Promise.resolve().then(function () {
    console.log("Promise");
});
console.log("同步代码 Start");
process.nextTick(function () {
    console.log("process.nextTick");
});
setImmediate(function () {
    console.log("setImmediate");
});
console.log("同步代码 End"); */

// 输出结果：
/*
同步代码 Start
同步代码 End
process.nextTick
Promise
setTimeout
setImmediate
*/

// 案例3：
/* 
setTimeout(function () {
    console.log("setTimeout1");
    // p1
    Promise.resolve().then(function () {
        console.log("Promise1");
    });
    // n1
    process.nextTick(function () {
        console.log("process.nextTick1");
    });
});
console.log("同步代码 Start");
setTimeout(function () {
    console.log("setTimeout2");
    // p2
    Promise.resolve().then(function () {
        console.log("Promise2");
    });
    // n2
    process.nextTick(function () {
        console.log("process.nextTick2");
    });
});
console.log("同步代码 End"); */
// 输出结果：
/* 
同步代码 Start 
同步代码 End
setTimeout1
process.nextTick1
Promise1
setTimeout2
process.nextTick2
Promise2
*/

// 案例4：
/* const path = require("path");
const fs = require("fs");
setImmediate(function () {
    console.log("setImmediate1");
});
fs.readFile(path.join(__dirname, "./06.txt"), "utf8", function (err, data) {
    setTimeout(function () {
        console.log("setTimeout2");
    }, 0);
    console.log("同步任务");
    setImmediate(function () {
        console.log("setImmediate2");
    });
    if (err) {
        console.log("读取失败");
    }
    console.log(data);
});
setTimeout(function () {
    console.log("setTimeout1");
}, 0);
 */
// 输出结果：

/*
setTimeout1
setImmediate1 (此时文件可能还没有读取完毕所以先切换到了check队列)
同步任务
eventLoop 你好哇
setImmediate2
setTimeout2
 */










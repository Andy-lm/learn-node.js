let fs = require("fs");

// 异步获取文件信息
console.log(__filename);
fs.stat(__dirname, function (err, stats) {
    console.log(err);
    // birthtime: 创建时间
    // mtime: 修改时间
    console.log(stats);
    if (stats.isFile()) {
        console.log("当前路径对应的是一个文件");
    } else {
        console.log("当前路径对应的一个文件夹");
    }
})
console.log(__dirname);


/* // 同步获取文件信息
let obj = fs.statSync(__dirname);
console.log(obj.birthtime);
console.log(obj.isFile());
console.log(obj); */


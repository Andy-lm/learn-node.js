let path = require("path");
let fs = require("fs");
const { error } = require("console");

let str = path.join(__dirname, "dir1");
// 创建一个目录
fs.mkdir(str, function (err) {
    if (err) {
        throw new error("创建目录失败");
    } else {
        console.log("创建目录成功");
    }
})
// 删除一个目录
fs.rmdir(str, function (err) {
    if (err) {
        throw new error("创建目录失败");
    } else {
        console.log("创建目录成功");
    }
})
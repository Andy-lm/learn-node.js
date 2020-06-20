let fs = require("fs");
let path = require("path");

let pathName = path.join(__dirname, "09-data.txt");
console.log(pathName);

/* fs.writeFile(pathName, "学习node.js--李茂", "utf8", function (err) {
    if (err) {
        throw new Error("写入失败");
    } else {
        console.log("写入成功");
    }
}); */

// 也可以传递一个buf对象
let buf = Buffer.from("lmm.com");
console.log(buf);
fs.writeFile(pathName, buf, "utf8", function (err) {
    if (err) {
        throw new Error("写入失败");
    } else {
        console.log("写入成功");
    }
})

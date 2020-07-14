const fs = require("fs");
const path = require("path");
// 读取文件的信息
/* fs.stat(__dirname, function (err, stats) {
    if (err) {
        console.log("读取失败");
    }
    console.log(stats.isDirectory());
    console.log(stats.birthtime);
}) */
/* let readPath = path.join(__dirname, "06.txt");
let writePath = path.join(__dirname, "08.txt");
let ReadStream = fs.createReadStream(readPath, {
    encoding: "utf8"
})

let WriteStream = fs.createWriteStream(writePath, {
    encoding: "utf8"
})

ReadStream.on("open", function () {
    console.log("读取连接成功");
})
ReadStream.on("error", function () {
    console.log("读取连接失败");
})
ReadStream.on("data", function (data) {
    console.log("已写入内容");
    WriteStream.write(data);
    WriteStream.end();
})
ReadStream.on("close", function () {
    console.log("读取连接断开");
})

WriteStream.on("open", function () {
    console.log("写入连接成功");
})
WriteStream.on("error", function () {
    console.log("写入连接失败");
})
WriteStream.on("close", function () {
    console.log("写入连接断开");
})

 */

/* fs.readdir(__dirname, function (err, flies) {
    if (err) {
        console.log("读取失败");
    }
    flies.forEach(function (fileName) {
        console.log(path.extname(fileName));
    })
})
 */











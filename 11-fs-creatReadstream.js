let path = require("path");
let fs = require("fs");

let pathName = path.join(__dirname, "09-data.txt");
console.log(pathName);
// 创建一个读取流
let readstream = fs.createReadStream(pathName, {
    encoding: "utf-8",
    highWaterMark: 1 // 每次获取一个字节的数据，默认是获取64k
});
// 创建事件监听 open error data close
readstream.on("open", function () {
    console.log("数据流和文件建立关系成功");
})
readstream.on("error", function () {
    console.log("数据流和文件建立关系失败");
})

readstream.on("data", function (data) {
    console.log("通过数据流读取到了数据", data);
})

readstream.on("close", function () {
    console.log("数据流和文件断开了关系，数据读取完毕");
})
let path = require("path");
let fs = require("fs");

// 确定读取路径
let readPath = path.join(__dirname, "music.mp3");
// 确定写入路径
let writePath = path.join(__dirname, "copy.mp3");

// 建立读取流
let readStream = fs.createReadStream(readPath);
// 建立写入流
let writeStream = fs.createWriteStream(writePath);

// 监听读取

readStream.on("open", function () {
    console.log("读取数据流和文件建立关系成功");
})
readStream.on("error", function () {
    console.log("读取数据流和文件建立关系失败");
})

readStream.on("data", function (data) {
    // console.log("通过数据流读取到了数据", data);
    writeStream.write(data);
})

readStream.on("close", function () {
    console.log("读取数据流和文件断开了关系，数据读取完毕");
    writeStream.end();
})

// 监听写入
writeStream.on("open", function () {
    console.log("写入数据流和文件建立成功");
})
writeStream.on("error", function () {
    console.log("写入数据流和文件建立失败");
})
writeStream.on("close", function () {
    console.log("写入数据流和文件断开连接");
})

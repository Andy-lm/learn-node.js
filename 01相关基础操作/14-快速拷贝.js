let path = require("path");
let fs = require("fs");

// 确定读取路径
let readPath = path.join(__dirname, "music.mp3")
// 确定写入路径
let writePath = path.join(__dirname, "copy.mp3");

// 建立读取流
let readStream = fs.createReadStream(readPath);
// 建立写入流
let writeStream = fs.createWriteStream(writePath);
// 利用读取流的管道方法来快速实现文件拷贝
readStream.pipe(writeStream);
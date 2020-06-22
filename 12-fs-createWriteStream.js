let path = require("path");
let fs = require("fs");
let pathName = path.join(__dirname, "12-data.txt");

let writeStream = fs.createWriteStream(pathName, {
    encoding: "utf-8"
});

writeStream.on("open", function () {
    console.log("数据流和文件建立成功");
})
writeStream.on("error", function () {
    console.log("数据流和文件建立失败");
})
writeStream.on("close", function () {
    console.log("数据流和文件断开连接");
})
let str = "lm learn node.js";
let index = 0;
let timer = setInterval(function () {
    let ch = str[index];
    writeStream.write(ch);
    console.log("本次写入了", ch);
    index++;
    if (index === str.length) {
        clearInterval(timer);
        writeStream.end();
    }
}, 1000)
let fs = require("fs");
let path = require("path");

let str = path.join(__dirname, "08-data.txt");
console.log(str);
fs.readFile(str, "utf8", function (err, data) {
    if (err) {
        throw new Error("读取文件失败");
    }
    console.log(data);
})
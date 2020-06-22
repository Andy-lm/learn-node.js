let fs = require("fs");
let path = require("path");

let pathName = path.join(__dirname, "/09-data.txt");
console.log(pathName);
fs.appendFile(pathName, "6.20", "utf8", function (err) {
    if (err) {
        throw new Error("追加失败");
    } else {
        console.log("追加成功");
    }
})
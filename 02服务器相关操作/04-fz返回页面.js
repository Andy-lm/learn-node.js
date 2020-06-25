let http = require("http");
let path = require("path");
let fs = require("fs");

// 创建服务器请求对象
http.createServer(function (req, res) {
    readFile(req, res);
}).listen(3000);

function readFile(req, res) {
    let pathName = path.join(__dirname, "www", req.url);
    // 根据请求地址在服务器中读取对应的文件
    fs.readFile(pathName, "utf8", function (err, content) {
        if (err) {
            res.end("Server Error");
        } else {
            // 返回文件
            res.end(content);
        }
    })
}
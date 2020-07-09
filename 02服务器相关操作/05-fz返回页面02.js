let http = require("http");
let path = require("path");
let fs = require("fs");
let mime = require("./mime.json");



// 创建服务器请求对象
http.createServer(function (req, res) {
    readFile(req, res);
}).listen(3000);

function readFile(req, res) {
    // 获取读取的地址
    let pathName = path.join(__dirname, "www", req.url);
    // 获取读取地址的扩展名
    let extName = path.extname(pathName);
    let type = mime[extName];
    // 当为文本格式时要添加charset=utf-8;
    if (type.startsWith("text")) {
        type += ";charset=utf-8;";
    }
    // 根据不同的扩展名使用不同的请求头
    res.writeHead(200, {
        "Content-Type": type
    })


    // 根据请求地址在服务器中读取对应的文件
    /* 
    注意点：
    1.在获取其他资源时不能加utf8
    2.如果服务器在响应数据的时候没有写响应头，那么在页面中可能无法显示响应的数据
    3.响应头用来响应服务器传递的数据用什么类型来显示
     */
    fs.readFile(pathName, function (err, content) {
        if (err) {
            res.end("Server Error");
        } else {
            // 返回文件
            res.end(content);
        }
    })
}
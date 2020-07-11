let http = require("http");

http.createServer(function (req, res) {
    res.writeHead(200, {
        "Content-Type": "text/plain;charset=utf-8"
    })
    if (req.method.toLocaleLowerCase() === "get") {
        res.end("利用get请求处理参数");
    } else if (req.method.toLocaleLowerCase() === "post") {
        res.end("利用post请求处理参数");
    }
}).listen(3000)
// 导入http模块
let http = require("http");

// 创建服务器实例对象
let server = http.createServer();
// 注册请求监听
server.on("request", function (req, res) {
    res.writeHead(200, {
        "Content-Type": "text/plain;charset=utf-8"
    })
    res.end("www.lmm.com");
});

server.listen(3000);
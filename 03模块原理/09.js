const http = require("http");
const url = require("url");
const myModule = require("./07/node_modules/andy-lm713");


// 接收get请求的参数
/* http.createServer(function (req, res) {
    let obj = url.parse(req.url, true);
    console.log(obj.query.lm);
    res.writeHead(200, {
        "Content-Type": "text/plain;charset=utf-8"
    })
    res.write("这是数据");
    res.end(obj.query.lm);
}).listen(3000); */

// 接收post请求的参数




let http = require("http");

// 创建服务器实例对象
http.createServer(function (req, res) {
    // 返回的数据类型，与用什么样的字符集来编码
    res.writeHead(200, {
        "Content-Type": "text/plain;charset=utf-8"
    });
    // req用来接收浏览器返回过来的数据
    console.log(req.url);
    if (req.url.startsWith("/index")) {
        /* end方法：
        1.结束请求
        2.返回数据
        3.只能返回一次数据 */
        res.write("首页1");
        // write方法可以返回多次数据，其不具备结束请求的功能，在后面还需要手动结束请求
        res.write("首页2");
        res.end();
        // res.end("首页");
    } else if (req.url.startsWith("/login")) {
        res.end("登录");
    } else {
        res.end("没有数据");
    }

}).listen(3000);
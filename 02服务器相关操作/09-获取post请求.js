let http = require("http");
let querystring = require('querystring');


http.createServer(function (req, res) {
    let str = "";
    console.log(req.url);

    // post请求的数据不能一次性拿到，必须分批获取
    req.on("data", function (chunk) {
        str += chunk;
    });
    req.on("end", function () {
        // querystring.parse方法将userName=zsy&passWord=3645格式的字符串转换为对象
        let obj = querystring.parse(str);
        res.end(obj.userName + "====" + obj.passWord);
    })
}).listen(3000);
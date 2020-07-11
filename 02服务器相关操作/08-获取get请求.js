let url = require("url");
let http = require("http");

// 将地址转换为对象
/* let obj = url.parse("http://root:123456@www.limao.com:80/index.html?age=18&name=lm#banner", true);
// console.log(obj);
// 获取地址传递的参数
console.log(obj.query.name);
console.log(obj.query.age); */


http.createServer(function (req, res) {
    let obj = url.parse(req.url, true);
    res.end(obj.query.name + "------" + obj.query.age);
}).listen(3000);




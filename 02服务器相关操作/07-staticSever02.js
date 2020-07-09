let http = require("http");
let sever = require("./06-staticSever");

// 使用导入的模块返回数据
http.createServer(function (req, res) {
    let rootPath = "c:\\Users\\dell\\Desktop\\abc";
    sever.staticSever(req, res, rootPath);
}).listen(3000);


// c:\Users\dell\Desktop\abc
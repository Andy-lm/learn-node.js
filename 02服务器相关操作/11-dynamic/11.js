let http = require("http");
let url = require("url");
let path = require("path");
let fs = require("fs");
let querystring = require("querystring");
let template = require("art-template");
// 建立数据
let person = {
    "zs": {
        name: "张三",
        age: 18,
        gender: "男"
    },
    "ls": {
        name: "李四",
        age: 26,
        gender: "女"
    },
}
http.createServer(function (req, res) {
    // 判断是否是访问主页面
    if (req.url.startsWith("/index") && req.method.toLocaleLowerCase() === "get") {
        let obj = url.parse(req.url);
        let pathName = path.join(__dirname, obj.pathname);
        fs.readFile(pathName, "utf8", function (err, content) {
            if (err) {
                res.writeHead(404, {
                    "Content-Type": "text/plain;charset=utf-8"
                })
                res.end("page Not Found");
            }
            res.writeHead(200, {
                "Content-Type": "text/html;charset=utf-8"
            })
            res.end(content);
        })

        // 接收post请求的数据
    } else if (req.url.startsWith("/info") && req.method.toLocaleLowerCase() === "post") {
        // 读取post请求的数据
        let str = "";
        req.on("data", function (content) {
            str += content;
        })
        // 返回post请求的数据
        req.on("end", function () {
            // 匹配参数
            let userObj = querystring.parse(str);
            var data = person[userObj.userName];
            // 判断该数据是否可以查找到，如果不行直接返回
            if (data === undefined) {
                res.writeHead(404, {
                    "Content-Type": "text/plain;charset=utf-8"
                })
                res.end("查找不到该数据！");
                return;
            }
            // 确定路径
            let fileName = path.join(__dirname, req.url);
            // 使用模板引擎
            var html = template(fileName, data);
            res.writeHead(200, {
                "Content-Type": "text/html;charset=utf-8"
            })
            res.end(html);
            /*  fs.readFile(fileName, "utf8", function (err, content) {
                if (err) {
                    res.writeHead(404, {
                        "Content-Type": "text/plain;charset=utf-8"
                    })
                    res.end("page Not Found");
                }
                // 替换内部的数据
                content = content.replace("+++name+++", data.name);
                content = content.replace("+++male+++", data.gender);
                content = content.replace("+++age+++", data.age);
                res.end(content);
            })  
            */

        })
    }
}).listen(3000);
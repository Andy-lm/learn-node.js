let path = require("path");
let fs = require("fs");

fs.readdir(__dirname, function (err, files) {
    if (err) {
        throw new Error("读取目录失败")
    } else {
        // 传递过来一个数组
        // console.log(files);
        files.forEach(function (obj) {
            let objPath = path.join(__dirname, obj);
            let stats = fs.statSync(objPath);
            if (stats.isFile()) {
                console.log(obj, "是文件");
            } else if (stats.isDirectory()) {
                console.log(obj, "是目录");
            }

        })
    }
})
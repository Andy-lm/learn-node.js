let path = require("path");
let fs = require("fs");

class CreatProject {
    constructor(rootPath, projectName) {
        this.rootPath = rootPath;
        this.projectName = projectName;
        this.subFiles = ["images", "js", "css", "index.html"];
    }
    initProject() {
        // 1.创建站点文件夹
        let pathName = path.join(this.rootPath, this.projectName);
        fs.mkdirSync(pathName);
        // 2.创建子文件夹与子文件
        this.subFiles.forEach(function (fileName) {
            if (path.extname(fileName) === "") {
                // 无扩展名创建为目录
                let dirPath = path.join(pathName, fileName);
                fs.mkdirSync(dirPath);
            } else {
                // 有扩展名创建为文件
                let dirPath = path.join(pathName, fileName);
                fs.writeFileSync(dirPath, "");
            }
        })
    }
}


let obj = new CreatProject(__dirname, "taobao");
obj.initProject();
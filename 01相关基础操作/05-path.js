let path = require("path");
let uname = path.basename("/Users/dell/Desktop/web-design/node.js/path.js", ".js");
console.log(uname);
let dir = path.dirname("/Users/dell/Desktop/web-design/node.js/path.js");
console.log(dir);
// 路径的分隔符
console.log(path.sep);
// 环境变量的分隔符
console.log(path.delimiter);
let pathObj = path.parse("/Users/dell/Desktop/web-design/node.js/path.js");
console.log(pathObj);
let obj = {
    root: '/',
    dir: '/Users/dell/Desktop/web-design/node.js',
    base: 'path.js',
    ext: '.js',
    name: 'path'
};
console.log(path.format(obj));

let path = require("path");
// 路径的拼接
let str = path.join("/a/b", "/c/d", "../");
console.log(str);
// 路径的标准化
let res = path.normalize("/a/b////c");
console.log(res);
// 用于计算相对路径
let str2 = path.relative("/a/b/c/d", "/a/b/e/f");
console.log(str2);



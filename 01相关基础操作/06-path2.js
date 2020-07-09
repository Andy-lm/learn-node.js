let path = require("path");
// 路径的拼接
let str = path.join("/a/b", "/c/d", "../");
console.log(str);
// 路径的标准化
let res = path.normalize("/a/b////c");
console.log(res);
// 用于将绝对路径转化为相对路径
let str2 = path.relative("/a/b/c/d", "/a/b/e/f");
console.log(str2);
// 用于解析路径
let str3 = path.resolve("/a/b/c/v", "../../");
console.log(str3);
let str4 = path.relative('C:\\orandea\\test\\aaa', 'C:\\orandea\\impl\\bbb');
console.log(str4);



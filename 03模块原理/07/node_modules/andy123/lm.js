function hey() {
    console.log("你好哇！");
}
hey();
// 用于查看运行时我们给其传递的参数
console.log(process.argv);
exports.hey = hey;
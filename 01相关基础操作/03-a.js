let name = "lmm";
let age = 18;
function sum(a, b) {
    return a + b;
}
// modeule.exports可以直接赋值，而exports不可以直接赋值
// exports = name;
// module.exports = age;
exports.str = name;
exports.fn = sum;
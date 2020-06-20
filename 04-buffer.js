// 将数据转换为16进制
let buf = Buffer.alloc(5, "a");
console.log(buf); // <Buffer 00 00 00 00 00>
let buf2 = Buffer.from("abc");
console.log(buf2);
// 以对应的ASCII码的形式输出
// console.log(buf2[1]);
buf2[1] = 6;
console.log(buf2);
console.log(buf2[1].toString());

console.log(buf2.toString());
// 其本质是一个数组
let buf3 = Buffer.from([1, 10, 5]);
console.log(buf3);
let buf4 = Buffer.alloc(5);
console.log(buf4);
// 代表偏移为为2，并且只存储两个字节的数据
buf4.write("abcdef", 2, 2);
console.log(buf4);
let str = buf4.toString();
console.log(str);
let buf5 = Buffer.from("abcdefg");
console.log(buf5);

// 类似于字符串的截取，从2开始到4结束不包含4
let buf6 = buf5.slice(2, 4);
console.log(buf6);
console.log(buf6.toString());
let buf7 = Buffer.concat([buf5, buf6]);
console.log(buf7);
console.log(buf7.toString());




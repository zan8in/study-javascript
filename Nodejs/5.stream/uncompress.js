var fs = require("fs");
var zlib = require("zlib");

// 解压 input.tar.gz 文件为 inputx.txt
fs.createReadStream("input.tar.gz").pipe(zlib.createUnzip()).pipe(fs.createWriteStream("inputx.txt"));

console.log("解压缩完成");
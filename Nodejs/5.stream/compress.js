var fs = require("fs");
var zlib = require("zlib");

// 压缩 input.txt 文件为 input.tar.gz
fs.createReadStream("input.txt").pipe(zlib.createGzip()).pipe(fs.createWriteStream("input.tar.gz"));

console.log("文件压缩完成");
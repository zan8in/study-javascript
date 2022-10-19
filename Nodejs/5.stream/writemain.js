var fs = require("fs");
var data = '菜鸟教程官网地址：www.runoob.com';

var writerStream = fs.createWriteStream('input.txt');

writerStream.write(data, "utf-8");
writerStream.end();

// 处理流事件 --> finish、error
writerStream.on('finish', function() {
    console.log("写入完成。");
});

writerStream.on('error', function(err){
   console.log(err.stack);
});

console.log("程序执行完毕");
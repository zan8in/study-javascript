console.log(__filename);

console.log(__dirname);

function printHello(){
    console.log( "Hello, World!");
 }
 // 两秒后执行以上函数
 var t = setTimeout(printHello, 1000);
 // 清除定时器
clearTimeout(t);

function printHello(){
    console.log( "Hello, World!");
 }
 // 两秒后执行以上函数
//  setInterval(printHello, 2000);

process.on('exit', function(code) {

    // 以下代码永远不会执行
    setTimeout(function() {
      console.log("该代码不会执行");
    }, 0);
    
    console.log('退出码为:', code);
});
console.log("程序执行结束");

// 输出到终端
process.stdout.write("Hello World!" + "\n");

// 通过参数读取
process.argv.forEach(function(val, index, array) {
   console.log(index + ': ' + val);
});

// 获取执行路径
console.log(process.execPath);


// 平台信息
console.log(process.platform);
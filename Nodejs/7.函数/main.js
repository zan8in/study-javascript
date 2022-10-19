function say(word) {
    console.log("say " + word);
}

function execute(somefunction, value) {
    somefunction(value);
}

execute(say, "alex");

// 匿名函数
execute(function(word) {
    console.log("匿名函数 say " + word);
}, "Hello");

// 函数传递是如何让HTTP服务器工作的
var http = require("http");

function onRequest(request, response) {
  response.writeHead(200, {"Content-Type": "text/plain"});
  response.write("Hello World");
  response.end();
}

http.createServer(onRequest).listen(8888);

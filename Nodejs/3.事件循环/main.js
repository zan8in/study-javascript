var events = require("events");
// 创建 eventEmitter 对象
var eventEmiiter = new events.EventEmitter();

// 创建事件处理程序
var connectHandler = function connected(a) {
    console.log("连接成功。", a);

    // 触发 data_received 事件
    eventEmiiter.emit("data_received");
}

// 绑定 connection 事件
eventEmiiter.on("connection", connectHandler);

// 绑定 data_received 事件
eventEmiiter.on("data_received", function(){
    console.log("数据接收成功。");
})

// 触发 connection 事件
eventEmiiter.emit("connection", "xxxxx");

console.log("程序结束");
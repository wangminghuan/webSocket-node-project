// ws：是nodejs的一个WebSocket库，可以用来创建服务
var express= require("express");
var app= express();
var http=require("http").Server(app);
var WebSocketServer = require('ws').Server;
var wss = new WebSocketServer({ port: 3001 });
app.get("/",(req, res)=>{
  res.sendFile( __dirname + "/" + "server.html" );
})
app.use(express.static('public'));

wss.on('connection', function(socket){
  console.log('检测到用户连接socket');
  socket.send('欢迎进入socket的世界');
  socket.on('disconnect', function(){
    console.warn('用户断开连接');
  });
  socket.on('message', function(msg){
    var _msg=msg.match("吃饭")?"好啊，好啊":"scoket回答：收到了你的请求，你说了："+msg;
    socket.send(_msg);
  });
});
http.listen(3002,()=>{
  console.log("listening on port 3002")
})

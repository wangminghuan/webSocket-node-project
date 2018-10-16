var express= require("express");
var app= express();
var http=require("http").Server(app);
var io=require("socket.io")(http);
app.get("/",(req, res)=>{
  res.sendFile( __dirname + "/" + "index.html" );
})
app.use(express.static('public'));
io.on('connection', function(socket){
  console.log('检测到用户连接socket');
  socket.emit('message', { msg: '欢迎进入socket的世界' });
  socket.on('disconnect', function(){
    console.warn('用户断开连接');
  });
  socket.on('message', function(msg){
    var _msg=msg.match("吃饭")?"好啊，好啊":"scoket回答：收到了你的请求，你说了："+msg;
    socket.emit('message', { msg: _msg, type:1});
  });
});

http.listen(3000,()=>{
  console.log("listening on port 3000")
})

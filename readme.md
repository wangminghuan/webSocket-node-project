## socket.io 使用demo

### 安装依赖
	npm install

### 启动 socketIO服务
    npm run start

### 启动 webSocket服务
    npm run server

### 预览
![](https://i.imgur.com/scav9uK.png)

### 说明
#### socketIO服务
1. 基于socket.io进行开发，后端为基于nodejs的搭建的express+socket.io
2. 前端引入是socket.io的客户端库，前端通过调用 `var socket = io()` 即可实现socket对象的创建
3. 通过简单的api,如 `socket.emit('message',()=>{})`,`socket.on('message',(msg)=>{})`即可实现消息是收发，非常方便
4. **重点，兼容到ie8**!!

#### webSocket服务
1. 基于webSocket服务，后端为nodejs搭建的express+ws(ws:nodejs上webSocket的实现库)
2. 前端直接使用原生的webSocket对象，`new webSocket(ws://localhost:3001)`，即可。
3. api接口为：`onopen`，`onmessage`，`onmessage`，也可实现消息收发，非常方便
4. `只支持现代浏览器，ie10以下就没戏了`

### 关于webscoket 和  SocketIO
1. WebScoket是一种让客户端和服务器之间能进行双向实时通信的技术。它是HTML最新标准HTML5的一个协议规范，本质上是个基于TCP的协议，它通过HTTP/HTTPS协议发送一条特殊的请求进行握手后创建了一个TCP连接，此后浏览器/客户端和服务器之间便可以通过此连接来进行双向实时通信。
2. WebSocket是HTML5最新提出的规范，虽然主流浏览器都已经支持，但仍然可能有不兼容的情况，为了兼容所有浏览器，给程序员提供一致的编程体验，SocketIO将WebSocket、AJAX和其它的通信方式全部封装成了统一的通信接口，也就是说，我们在使用SocketIO时，不用担心兼容问题，底层会自动选用最佳的通信方式。因此说，**WebSocket是SocketIO的一个子集**。

### 参考文章
1. [socket.io官网](https://socket.io/get-started/chat/)
2. [使用 socket.io.js 实现 websocket 实时通讯](https://blog.csdn.net/weixin_38788347/article/details/79726992)
3. [WebSocket和SocketIO总结](https://www.cnblogs.com/foupwang/p/7865694.html)
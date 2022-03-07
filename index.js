const express = require("express");
const http = require('http');
const { Server } = require("socket.io");
const app = express();
const expressServer = http.createServer(app);
const io = new Server(expressServer);

app.get('/', (req, res) => {
    res.sendFile(__dirname + "/index.html");
})

expressServer.listen(3001, () => {
    console.log(`Alhamdu lillah, server is listining on port 3001...`);
})


io.on('connection', socket => {
    console.log("Alhamdu lillah, soccet connected");
    io.sockets.emit('myBroadcast', "ASSALMU ALAIKUM");
});
// io.on('connection', (socket) => {
//     console.log("New user Connected");
//     socket.on('name', (msg) => { console.log(msg); })
//     // setInterval(() => {
//     //     const times = new Date().getSeconds();
//     //     socket.emit('test', times);
//     // }, 1000);
//     socket.on('disconnect', (socket) => {
//         console.log("User disconnected");
//     });
// });

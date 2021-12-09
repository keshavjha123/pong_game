
const http=require('http');
const {apiServer}=require('./api');
const httpServer = http.createServer(apiServer);
const io =require('socket.io')
const socketServer = io(httpServer);

const PORT = 3000;

const sockets=require('./sockets');

httpServer.listen(PORT);
console.log(`Listening on port ${PORT}...`);

sockets.listen(socketServer);


let readyPlayerCount=0;

function listen(io){
    const pongNamespace=io.of('/pong');
    let room;
    pongNamespace.on('connection', (socket) => {
    console.log('a user connected ',socket.id);
    socket.on('ready',()=>{
      room='room'+Math.floor(readyPlayerCount/2);
      socket.join(room);
    console.log('Player ready',socket.id,room);
    readyPlayerCount++;
    console.log('Player Count',readyPlayerCount);
    if(readyPlayerCount%2==0){
      console.log('starting game');
      pongNamespace.in(room).emit('startGame',socket.id);
    }
    socket.on('paddleMove',(paddleData)=>{
      // console.log('Keshav');
      socket.to(room).emit('paddleMove',paddleData);
    })

    socket.on('ballMove',(ballData)=>{
      socket.to(room).emit('ballMove',ballData);
    })

    socket.on('disconnect',(reason)=>{

      console.log(`The client with ${socket.id} got disconnected because of ${reason}`);
      socket.leave(room);
    })
  })

});
}

module.exports={listen,}

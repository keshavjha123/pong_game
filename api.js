//const exp = require('constants');
const express=require('express');
const path=require('path');

console.log('APISever on');

const apiServer=express();
apiServer.use(express.static(path.join(__dirname,'public')));
apiServer.use('/',express.static('index.html'));

// apiServer.listen(3000,()=>{
//     console.log('listening on port 3000');
// });


module.exports={
    apiServer,
}
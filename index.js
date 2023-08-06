const express = require('express');
var http = require('http');
const app = express();
const cors = require('cors');
const { Socket } = require('engine.io');
const port = process.env.PORT || 3800;
var server = http.createServer(app);
var io = require('socket.io')(server,{
    cors:{
        origin: "*"
    }
});

app.use(express.json());
app.use(cors());

io.on('Connection',(socket)=>{
    console.log("connected");
});

server.listen(port, ()=>{
    console.log("server started");
});
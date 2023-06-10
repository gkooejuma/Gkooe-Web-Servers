const http = require("http");
const express = require("express");
const socketio = require("socket.io");
const path = require("path");
const app = express();
const httpserver = http.Server(app);
let io = socketio(httpserver);
const gamedirectory = path.join(__dirname, "node-html");
app.use(express.static(gamedirectory));

app.get('/', function (req, res) {
  var url = req.url;
  res.end(); 
}); 



httpserver.listen(8000,'127.0.0.1');
const fs = require('fs');
//----------------------------------

// This is the server adding likes 
io.on('connection', function(socket){


  fs.readFile('.like', 'utf8', function(err, data){
    like_object_reciver = JSON.parse("{"+JSON.stringify('likes')+":"+data+"}"); 
    io.emit("liked", like_object_reciver.likes)}); 

//fsgsfgsfd

socket.on("like", function(number){
    num = number += 1;
    let like_object = JSON.stringify(num); 

    //this is the like count
fs.writeFile('.like', like_object, { flag: 'w+' }, err => {})
   

    io.emit("liked", num)
  });
}); 








///0 dist compiler
fs.readFile('dist/.request-node', 'utf8', function(err, data){
  //console.log(err); 
  fs.writeFile('dist/index.html', data, { flag: 'w+' }, err => {})
});



setInterval(() => {
  fs.readFile('dist/.request-node', 'utf8', function(err, data){
    //console.log(err); 
    fs.writeFile('dist/index.html', data, { flag: 'w+' }, err => {})
  });
  
}, 5000);



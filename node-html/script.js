var socket;
var delay = true;
var likenum = 0;



function onload(){


  // this is connecting to the servers io
    socket = io();



 
socket.on("liked", function(number){
  document.querySelector
  ("span").innerText = number; 
  

  likenum = number;
});
}







function delayReset(){
  delay = true;
}



/// this is sending the line number to the server
function like(){
    socket.emit("like", likenum); 
  }




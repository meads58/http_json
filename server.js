var express = require('express');
var app = express();
var server = require('http').createServer(app);
var path = require('path')

app.get('/', function(request, response){
  response.sendFile(path.join(__dirname +'/index.html'));
});

server.listen(3000, function(){
  console.log("Server listening on port 3000");
});

module.exports = server;
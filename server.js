var express = require('express');
var app = express();
var fs = require('fs');
var server = require('http').createServer(app);
var path = require('path')

var session = require('express-session')

var bodyParser = require('body-parser')
var jsonParser = bodyParser.json()

app.use(session({
  secret: 'keyboard cat',
  resave: false,
  saveUnitialized: true
}))

app.use(function(request, response, next) {
  var sess = request.session;
  next();
});

app.get('/', function(request, response){
  response.sendFile(path.join(__dirname +'/views/index.html'));
});

app.post('/submitJson', jsonParser, function(request, response){
  var filePath = (path.join(__dirname + '/data/json_messages.txt'))
  var message = request.body
  message["sessionID"] = request.sessionID
  fs.appendFile(filePath, JSON.stringify(message), function(err) {
    if(err) throw err;
    console.log(message)
  })
  response.end();
})

server.listen(3000, function(){
  console.log("Server listening on port 3000");
});

module.exports = server;
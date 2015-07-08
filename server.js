var express = require('express');
var app = express();
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
  response.sendFile(path.join(__dirname +'/index.html'));
});

app.post('/submitJson', jsonParser, function(request, response){
  console.log(request.body)
  console.log(request.sessionID)
  response.end();
})

server.listen(3000, function(){
  console.log("Server listening on port 3000");
});

module.exports = server;
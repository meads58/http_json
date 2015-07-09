var express = require('express');
var app = express();
var fs = require('fs');
var server = require('http').createServer(app);
var path = require('path')
var NodeCache = require( "node-cache" );
var myCache = new NodeCache();

var session = require('express-session');

var bodyParser = require('body-parser');
var jsonParser = bodyParser.json();
var currentSessionID  = '';
var buildArray = [];

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

app.post('/submitJson/:eventName', jsonParser, function(request, response){
  var message = request.body
  var eventName = request.params.eventName
  currentSessionID = request.sessionID
  eventAction(eventName, message)
  response.end();
});

var eventAction = function(eventName, message) {
  switch(eventName) {
    case 'copyAndPaste':
      arrOfCopyAndPaste(eventName, message);
      break;
    case 'formCompletionTime':
      addToCache(eventName, message[eventName]);
      writeToFile()
      break;
    default:
      addToCache(eventName, message[eventName]);
  }
};

var writeToFile = function(eventName, message) {
  var filePath = (path.join(__dirname + '/data/json_messages.txt'))
  var message = getAllMessages();
  message["sessionID"] = currentSessionID
  fs.appendFile(filePath, JSON.stringify(message), function(err) {
    if(err) throw err;
    console.log(message)
  })
};

var getAllMessages = function(){
  var messages = myCache.mget(myCache.keys());
  return messages;
};

var arrOfCopyAndPaste = function(cacheKey, message) {
  var copyMessage = myCache.get(cacheKey);
  buildArray.push(message);
  addToCache(cacheKey, buildArray)
};

var addToCache = function(cacheKey, message) {
  myCache.set(cacheKey,message, function(err, success){
    if( !err && success ){
      console.log( 'added to cache: ' + success );
    }
  });
};

server.listen(3000, function(){
  console.log("Server listening on port 3000");
});

module.exports = server;
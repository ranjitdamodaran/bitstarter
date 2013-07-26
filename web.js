var express = require("express");

var app = express.createServer();
//var app = express();
//Removed this since it is givind some error
//var app = express.createServer(express.logger());
app.use(express.static(__dirname + '/img'));


var fs = require ('fs');
var text = fs.readFileSync('index.html','utf8');

app.get('/', function(request, response) {
  response.send(text);
});

var port = process.env.PORT || 8080;
app.listen(port, function() {
  console.log("Listening on " + port);
});

var express  = require('express');
var fs  = require('fs');
var app = express();

var content = fs.readFileSync('api.json','utf8');
var context = JSON.parse(content);
require('./api')(app,context);

app.listen(3000,function() {
  console.log("Express server on port 3000");
});

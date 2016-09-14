var express  = require('express');
var mongoose = require('mongoose');
var fs  = require('fs');
var bodyParser = require('body-parser')
var app = express();
app.use(bodyParser.urlencoded({ extended: false }))

mongoose.connection.on('open', function (ref) {
  console.log('Connected to mongo server.');
});
mongoose.connection.on('error', function (err) {
  console.log('Could not connect to mongo server!');
  console.log(err);
});
mongoose.connect('mongodb://localhost/test');
var models = {
  "blog": require('./models/blog.js'),
  "feedback": require('./models/feedback.js')
};


var content = fs.readFileSync('api.json','utf8');
var context = JSON.parse(content);
require('./api')(app,context,models);

app.listen(3000,function() {
  console.log("Express server on port 3000");
});

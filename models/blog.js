var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var blogSchema = new Schema({
  title: String,
  markdown: String
});

modules.exports = mongoose.models('Blog',blogSchema);

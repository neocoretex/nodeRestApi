var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var blogSchema = new Schema({
  title: String,
  markdown: String
});

module.exports = mongoose.model('Blog',blogSchema);

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var feedbackSchema = new Schema({
  email: String,
  content: String
});

module.exports = mongoose.model('Feedback',feedbackSchema);

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var feedbackSchema = new Schema({
  email: String,
  content: String
});

modules.exports = mongoose.models('Feedback',feedbackSchema);

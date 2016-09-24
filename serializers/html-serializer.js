var mustache = require('mustache');
var fs = require('fs');

function serialize(req,res) {
  var template = fs.readFileSync('./templates/'+req.context.db+'.tpl');
  var data = {};
  data[req.context.db] = req.data;
  if(req.err) {
    res.status(422).json({errors:{detail:req.err}});
  }else{
    var output = mustache.render(template.toString(),data);
    res.status(200).send(output);
  }
}

module.exports = serialize;


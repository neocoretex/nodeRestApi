var mustache = require('mustache');
var fs = require('fs');

function serialize(req,res) {
  var template = fs.readFileSync('./templates/basic.tpl');
  console.log(template);
  if(req.err) {
    res.status(422).json({errors:{detail:req.err}});
  }else{
    req.data.forEach(function(atom,i) {
      req.data[i] = {
        _id: atom.id,
        type: 'data',
        attributes:{
        }
      };
      for(field in req.context.fields){
        var fieldName = req.context.fields[field];
        req.data[i].attributes[fieldName] = atom[fieldName];
      }
      
    });
    var output = mustache.render(template,{});
    res.status(200).send(output);
  }
}

module.exports = serialize;


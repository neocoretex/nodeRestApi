var fs = require('fs');

function jsonObject(fileName) {
  var content = fs.readFileSync(fileName,'utf8');
  return JSON.parse(content);
}

var cfg = jsonObject('../api.json');

function serialize(req,res) {
  if(req.err) {
    res.status(422).json({errors:[{detail:res.err}]});
  }else{
    req.data.forEach(function(data,i) {
      var temp = data[i];
      req.data[i] = {
        _id: temp.id,
        type: 'data'
      };
      for(field in cfg.rules['/'+req.model].fields){
        data[i].attributes[field] = temp[field];
      }
      
    });
    res.status(200).json({data:JSON.stringify(req.data)});
  }
}

module.exports = serialize;


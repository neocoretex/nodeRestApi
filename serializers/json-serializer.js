function serialize(req,res) {
  if(req.err) {
    res.status(422).json({errors:[{detail:req.err}]});
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
    res.status(200).json({data:req.data});
  }
}

module.exports = serialize;


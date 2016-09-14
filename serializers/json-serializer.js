function serialize(req,res) {
  if(req.err) {
    res.status(422).json({errors:{detail:req.err}});
  }else{
<<<<<<< HEAD
    req.data.forEach(function(data,i) {
      var temp = data;
      data = {
        _id: temp._id,
=======
    req.data.forEach(function(atom,i) {
      req.data[i] = {
        _id: atom.id,
>>>>>>> dev
        type: 'data',
        attributes:{
        }
      };
      for(field in req.context.fields){
<<<<<<< HEAD
        data.attributes[field] = temp.field;
=======
        var fieldName = req.context.fields[field];
        req.data[i].attributes[fieldName] = atom[fieldName];
>>>>>>> dev
      }
      
    });
    res.status(200).json({data:req.data});
  }
}

module.exports = serialize;


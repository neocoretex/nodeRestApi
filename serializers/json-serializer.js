function serialize(req,res) {
  if(req.err) {
    res.status(422).json({errors:[{detail:req.err}]});
  }else{
    req.data.forEach(function(data,i) {
      var temp = data[i];
      req.data[i] = {
//        _id: temp.id,
        type: 'data',
        attributes:{
        }
      };
      for(field in req.context.fields){
        data[i].attributes[field] = temp[field];
      }
      
    });
    res.status(200).json({data:JSON.stringify(req.data)});
  }
}

module.exports = serialize;


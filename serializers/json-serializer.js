function serialize(req,res) {
  if(req.err) {
    res.status(422).json({errors:{detail:req.err}});
  }else{
    req.data.forEach(function(data,i) {
      var temp = data;
      data = {
        _id: temp._id,
        type: 'data',
        attributes:{
        }
      };
      for(field in req.context.fields){
        data.attributes[field] = temp.field;
      }
      
    });
    res.status(200).json({data:JSON.stringify(req.data)});
  }
}

module.exports = serialize;


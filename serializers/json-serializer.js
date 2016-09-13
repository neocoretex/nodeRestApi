function serialize(req,res) {
  if(req.err) {
    res.status(422).json(res.err);
  }else{
    req.data.forEach(function(data,i) {
      var temp = data[i];
      req.data[i] = {
        _id: temp.id,
        type: 'data',
        attributes:{
        }
      };
    });
    res.status(200).json({data:req.data});
  }
}

module.exports = serialize;

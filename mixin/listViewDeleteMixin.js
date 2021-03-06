var router = {};

router.get = function(req,res,next) {
  var query = {};
  query = {
    '_id':req.params.id
  };
  req.model.find(query,function(err,data){
    req.err = err;
    req.data = data;
    next(req,res);
  });
};

router.post = function(req,res,next) {
  var dataInstance = new req.model(req.body);
  dataInstance.save(function(err,data) {
    req.err = err;
    req.data = [data];
    next(req,res);
  });
};

router.put = function(req,res,next) {
  var query = {};
  query = {
    '_id':req.params.id
  };
  req.model.findOneAndUpdate(query,req.body,{new:true},function(err,data){
    req.err = err;
    req.data = [data];
    next(req,res);
  });
};

router.delete = function(req,res,next) {
  var query = {};
  query = {
    '_id':req.params.id
  };
  req.model.remove(query,function(err){
    req.err = err;
    req.data = [];
    next(req,res);
  })
};

module.exports = router;

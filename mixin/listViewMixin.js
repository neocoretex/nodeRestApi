var router = {};

router.get = function(req,res,next) {
  req.model.find({},function(err,data){
    req.err = err;
    req.data = data;
    next(req,res);
  });
}

router.post = function(req,res,next) {
  var dataInstance = new req.model(req.body);
  dataInstance.save(function(err,data) {
    req.err = err;
    req.data = [data];
    next(req,res);
  });
}

router.put = function(req,res,next) {
  var dataInstance = new req.model(req.body);
  dataInstance.save(function(err,data) {
    req.err = err;
    req.data = [data];
    next(req,res);
  });
}

router.delete = function(req,res,next) {
  var dataInstance = new req.model(req.body);
  dataInstance.save(function(err,data) {
    req.err = err;
    req.data = [data];
    next(req,res);
  });
}

module.exports = router;

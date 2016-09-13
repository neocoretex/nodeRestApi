var router = {};

router.get = function(req,res,next) {
  req.model.find({},function(err,data){
    req.err = err;
    req.data = data;
    next(req,res);
  });
}

router.put = function(req) {
  req.err = "Not supported";
}

router.post = function(req) {
  req.err = "Not supported";
}

router.delete = function(req) {
  req.err = "Not supported";
}

module.exports = router;

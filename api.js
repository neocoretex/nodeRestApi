function generateRoute(app,context,models) {
  for(var endpoints in context.rules){
    var routeConfig = context.rules[endpoints];
    app
      .get(endpoints,function(req,res,next) {
        var cfg = context.rules[req.url];
        var model = models[cfg.db];
        require(cfg.mixin).get(req,res);
      })
      .put(endpoints,function(req,res,next) {
        var cfg = context.rules[req.url];
        var model = models[cfg.db];
        require(cfg.mixin).put(req,res);
      })
      .post(endpoints,function(req,res,next) {
        var cfg = context.rules[req.url];
        var model = models[cfg.db];
        require(cfg.mixin).post(req,res);
      })
      .delete(endpoints,function(req,res,next) {
        var cfg = context.rules[req.url];
        var model = models[cfg.db];
        require(cfg.mixin).delete(req,res);
      });
  }
}

module.exports = generateRoute;

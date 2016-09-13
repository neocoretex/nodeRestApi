function generateRoute(app,context,models) {
  for(var endpoints in context.rules){
    var routeConfig = context.rules[endpoints];
    app
      .get(endpoints,function(req,res,next) {
        var cfg = context.rules[req.url];
        req.model = models[cfg.db];
        require(cfg.mixin).get(req,res,require(context.serializer));
        //require(context.context.serializer)(req,res);
      })
      .put(endpoints,function(req,res,next) {
        var cfg = context.rules[req.url];
        req.model = models[cfg.db];
        require(cfg.mixin).put(req);
        require(context.context.serializer)(req,res);
      })
      .post(endpoints,function(req,res,next) {
        var cfg = context.rules[req.url];
        req.model = models[cfg.db];
        require(cfg.mixin).post(req);
        require(context.context.serializer)(req,res);
      })
      .delete(endpoints,function(req,res,next) {
        var cfg = context.rules[req.url];
        req.model = models[cfg.db];
        require(cfg.mixin).delete(req);
        require(context.context.serializer)(req,res);
      });
  }
}

module.exports = generateRoute;

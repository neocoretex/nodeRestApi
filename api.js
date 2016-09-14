function generateRoute(app,context,models) {
  for(var endpoints in context.rules){
    var routeConfig = context.rules[endpoints];
    app
      .get(endpoints,function(req,res,next) {
        var cfg = context.rules[req.url];
        req.model = models[cfg.db];
        req.modelName = cfg.modelName;
        req.context = cfg;
        require(cfg.mixin).get(req,res,require(context.serializer));
      })
      .put(endpoints,function(req,res,next) {
        var cfg = context.rules[req.url];
        req.model = models[cfg.db];
        req.modelName = cfg.modelName;
        req.context = cfg;
        require(cfg.mixin).put(req,res,require(context.serializer));
       })
      .post(endpoints,function(req,res,next) {
        var cfg = context.rules[req.url];
        req.model = models[cfg.db];
        req.modelName = cfg.modelName;
        req.context = cfg;
        require(cfg.mixin).post(req,res,require(context.serializer));
      })
      .delete(endpoints,function(req,res,next) {
        var cfg = context.rules[req.url];
        req.model = models[cfg.db];
        req.modelName = cfg.modelName;
        req.context = cfg;
        require(cfg.mixin).delete(req,res,require(context.serializer));
       });
  }
}

module.exports = generateRoute;

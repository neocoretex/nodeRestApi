function generateRoute(app,context) {
  for(var endpoints in context.rules){
    console.log(endpoints);
    app.get("/"+endpoints,function(req,res) {
      res.send("This is api endpoint");
    });
  }
}

module.exports = generateRoute;

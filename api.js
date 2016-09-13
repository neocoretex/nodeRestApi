function generateRoute(app,context,models) {
  console.log("Number of models "+models.length);
  for(var endpoints in context.rules){
    app.get("/"+endpoints,function(req,res) {
      res.send("This is api endpoint");
    });
  }
}

module.exports = generateRoute;

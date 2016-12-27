module.exports = {
  registerHelpers: function(hbs){
    hbs.registerHelper("function", function(err,res){
      return new hbs.SafeString("<p>Safety Check</p>");
    });
  }
}

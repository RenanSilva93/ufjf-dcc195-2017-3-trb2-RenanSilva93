module.exports = function(app){
  var rota = require("../controllers/campeonato.controllers")
  app.use("/campeonato.html",rota.campeonato)
}

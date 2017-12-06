module.exports = function(app){
  var rota = require("../controllers/jogoVelha.controllers")
  app.use("/jogo_velha.html", rota.jogo_velha)
}

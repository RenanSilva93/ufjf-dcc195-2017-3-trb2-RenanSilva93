module.exports = function(app){
  var rota = require("../controllers/amigo.controllers")
  app.use("/amigo_oculto.html",rota.amigo_oculto)
}

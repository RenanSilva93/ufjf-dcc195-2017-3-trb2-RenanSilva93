module.exports.principal = function(req,res,next){
  res.render('principal',{principal : [
    {rota:"HOME/",link :"/"},
    {rota:"index.html",link :"/index.html"},
    {rota:"Sobre",link :"/sobre.html"},
    {rota:"Amigo Oculto",link :"/amigo_oculto.html"},
	{rota:"Jogo da Velha",link :"/jogo_velha.html"},
	{rota:"Campeonato",link :"/campeonato.html"},
  ]})
}
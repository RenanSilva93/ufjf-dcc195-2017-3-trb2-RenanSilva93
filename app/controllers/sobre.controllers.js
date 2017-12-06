module.exports.sobre = function (req, res, next){
  res.render('sobre/sobre',
  {nome: "Renan Costa da Silva",
	curso: "Sistemas de Informação", 
	matricula: "201276048",
	email: "renan.costas@hotmail.com"})
}

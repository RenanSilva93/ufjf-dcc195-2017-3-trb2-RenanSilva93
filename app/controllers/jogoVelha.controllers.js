module.exports.jogo_velha = function(req,res,next){
	if(req.method=='GET'){
		var contador = 0;
		var posicao = 0;
		var casas = Array(9);
		for(var i=0; i<9; i++) {
			casas[i] = 0;
		}
		
		res.render("jogo_velha/jogo", {contador: contador, casas: casas});
    
	} else if(req.method=='POST') {
		var contador = req.body.contador;
		var posicao = req.body.posicao;
		var casas = req.body.casas;
		var arrayCasa = [];
		for(var j=0; j<9; j++){
			arrayCasa[j] = casas[j];
		}
		
		if(contador % 2 != 0) {
			arrayCasa[posicao] = "X"
		} else {
			arrayCasa[posicao] = "O"
		}
		console.log(arrayCasa);
		res.render("jogo_velha/jogo", {contador: contador, casas: arrayCasa});
	}
  
}
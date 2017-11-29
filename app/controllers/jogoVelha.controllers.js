module.exports.jogo_velha = function(req,res,next){
	if(req.method=='GET'){
      res.render("jogo_velha/jogo");
    
	} else if(req.method=='POST') {
		var marcadores = req.body.marcacao;
		var posicao = [];
		var j=0;
		
    for(var i=0; i<9 ; i++) {
      posicao[j]={ 'letra': marcadores[i]}
      j++;
    }
	
    res.render("jogo_velha/resultado",{resultado: posicao})
	}
  
}
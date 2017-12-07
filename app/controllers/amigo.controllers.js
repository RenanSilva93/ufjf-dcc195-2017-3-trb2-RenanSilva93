module.exports.amigo_oculto = function(req,res,next){
  if(req.method=='GET'){
	  res.render('amigo_oculto/inicial')
    
  }else if(req.method=='POST'){
	  var quantidadeNomes = req.body.quantidadeNomes;
	  if(quantidadeNomes != 0) {
		  res.render('amigo_oculto/nomes',{quantidade:  quantidadeNomes})
	  } else {
		var nomes = req.body.nomes;
		var pares = []
		var j=0
		var total = nomes.length
		for(var i=0;i<total-1;i++){
		  pares[j]={ 'nome1': nomes[i],'nome2': nomes[i+1]}
		  j++;
		}
		pares[j]={nome1:nomes[total-1],nome2: nomes[0]}
		
		res.render('amigo_oculto/resultado',{sorteio: pares})
	  }
    
  }
}
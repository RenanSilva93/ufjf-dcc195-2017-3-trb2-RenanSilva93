module.exports.campeonato = function(req,res,next){
  if(req.method=='GET'){
      res.render("campeonato/inicio");
    
  }else if(req.method=='POST'){
	  var time = req.body.time;
	  console.log(time);
	  var total = req.body.quantidade;
	  console.log(total);
	if(total == 16) {
		var times = []
		var timeGanhador = []
		var j=0
		for(var i=0;i<total;i=i+2) {
		  times[j]={ 'timeMandante': time[i],'timeVisitante': time[i+1]}
		  j++;
		}
		
		res.render("campeonato/formato", {equipes: times});
	} else if(total == 7) {
		var times = []
		var timeGanhador = []
		var j=0
		for(var i=0;i<16;i=i+2){
			var rand = Math.floor(Math.random() * (2 - 1 + 1)) + 1;
			if(rand == 1) {
				timeGanhador[j] = time[i];
			} else {
				timeGanhador[j] = time[i+1];
			}
		  j++;
		}
		var k=0
		for(var i=0;i<j;i=i+2){
		  times[k]={ 'timeMandante': timeGanhador[i],'timeVisitante': timeGanhador[i+1]}
		  k++;
		}
		res.render("campeonato/formato", {equipes: times});
	} else if(total == 3) {
		var times = []
		var timeGanhador = []
		var j=0
		for(var i=0;i<8;i=i+2){
			var rand = Math.floor(Math.random() * (2 - 1 + 1)) + 1;
			console.log(rand);
			if(rand == 1) {
				timeGanhador[j] = time[i];
			} else {
				timeGanhador[j] = time[i+1];
			}
		  j++;
		}
		
		var k=0
		for(var i=0;i<j;i=i+2){
		  times[k]={ 'timeMandante': timeGanhador[i],'timeVisitante': timeGanhador[i+1]}
		  k++;
		}
		
		res.render("campeonato/formato", {equipes: times});
	} else if(total == 1) {
		var times = []
		var timeGanhador = []
		var j=0
		for(var i=0;i<4;i=i+2){
			var rand = Math.floor(Math.random() * (2 - 1 + 1)) + 1;
			console.log(rand);
			if(rand == 1) {
				timeGanhador[j] = time[i];
			} else {
				timeGanhador[j] = time[i+1];
			}
		  j++;
		}
		
		var k=0
		for(var i=0;i<j;i=i+2){
		  times[k]={ 'timeMandante': timeGanhador[i],'timeVisitante': timeGanhador[i+1]}
		  k++;
		}
		
		res.render("campeonato/formato", {equipes: times});
	} else {
		var rand = Math.floor(Math.random() * (2 - 1 + 1)) + 1;
			var timeGanhador = []
			var i = 0;
			if(rand == 1) {
				timeGanhador[0] = time[i];
			} else {
				timeGanhador[0] = time[i+1];
			}
		
		var times = [];
		times[0]={ 'campeao': timeGanhador[0]}
		res.render("campeonato/campeao", {equipes: times});
	} 
  }
}
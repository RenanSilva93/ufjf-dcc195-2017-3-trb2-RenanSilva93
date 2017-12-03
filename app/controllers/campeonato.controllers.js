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
		
		res.render("campeonato/formato", {equipes: times, fase: 8});
	} else if(total == 7) {
		var timesOitavas = req.body.timeAntigo;
		var timesOitavasAntigo = []
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
		var n=0
		for(var i=0;i<16;i=i+2){
		  timesOitavasAntigo[n]={ 'timeMandante': timesOitavas[i],'timeVisitante': timesOitavas[i+1]}
		  n++;
		}
		res.render("campeonato/formato", {equipes: times, fase: 4, equipesOitavas: timesOitavasAntigo});
	} else if(total == 3) {
		var timesOitavas = req.body.timesOitavasAntigo;
		var timesOitavasAntigo = []
		var timesQuartas = req.body.timeAntigo;
		var timesQuartasAntigo = []
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
		
		var c=0
		for(var c=0;i<16;i=i+2){
		  timesOitavasAntigo[c]={ 'timeMandante': timesOitavas[i],'timeVisitante': timesOitavas[i+1]}
		  c++;
		}
		
		var n=0
		for(var i=0;i<8;i=i+2){
		  timesQuartasAntigo[n]={ 'timeMandante': timesQuartas[i],'timeVisitante': timesQuartas[i+1]}
		  n++;
		}
		
		res.render("campeonato/formato", {equipes: times, fase: 2, equipesOitavas: timesOitavasAntigo, equipesQuartas: timesQuartasAntigo});
	} else if(total == 1) {
		var timesOitavas = req.body.timesOitavasAntigo;
		var timesOitavasAntigo = []
		var timesQuartas = req.body.timesQuartasAntigo;
		var timesQuartasAntigo = []
		var timesSemi = req.body.timeAntigo;
		var timesSemiAntigo = []
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
		
		var c=0
		for(var c=0;i<16;i=i+2){
		  timesOitavasAntigo[c]={ 'timeMandante': timesOitavas[i],'timeVisitante': timesOitavas[i+1]}
		  c++;
		}
		
		var n=0
		for(var i=0;i<8;i=i+2){
		  timesQuartasAntigo[n]={ 'timeMandante': timesQuartas[i],'timeVisitante': timesQuartas[i+1]}
		  n++;
		}
		
		var l=0
		for(var i=0;i<4;i=i+2){
		  timesSemiAntigo[l]={ 'timeMandante': timesSemi[i],'timeVisitante': timesSemi[i+1]}
		  l++;
		}
		
		res.render("campeonato/formato", {equipes: times, fase: 1, equipesOitavas: timesOitavasAntigo, equipesQuartas: timesQuartasAntigo, equipesSemi: timesSemiAntigo});
	} else {
		var timesOitavas = req.body.timesOitavasAntigo;
		var timesOitavasAntigo = []
		var timesQuartas = req.body.timesQuartasAntigo;
		var timesQuartasAntigo = []
		var timesSemi = req.body.timesSemiAntigo;
		var timesSemiAntigo = []
		var timesFinal = req.body.timesAntigo;
		var timesFinalAntigo = []
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
		
		var c=0
		for(var c=0;i<16;i=i+2){
		  timesOitavasAntigo[c]={ 'timeMandante': timesOitavas[i],'timeVisitante': timesOitavas[i+1]}
		  c++;
		}
		
		var n=0
		for(var i=0;i<8;i=i+2){
		  timesQuartasAntigo[n]={ 'timeMandante': timesQuartas[i],'timeVisitante': timesQuartas[i+1]}
		  n++;
		}
		
		var l=0
		for(var i=0;i<4;i=i+2){
		  timesSemiAntigo[l]={ 'timeMandante': timesSemi[i],'timeVisitante': timesSemi[i+1]}
		  l++;
		}
		
		timesFinalAntigo[0]={ 'timeMandante': time[0],'timeVisitante': time[1]}

		res.render("campeonato/formato", {equipesCampeao: times, fase: 0, equipesOitavas: timesOitavasAntigo, equipesQuartas: timesQuartasAntigo, equipesSemi: timesSemiAntigo, equipesFinal: timesFinalAntigo});
	} 
  }
}
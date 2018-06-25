function a(a){return document.getElementById(a)}

var replicanti = new Decimal(1);
var chance = new Decimal(10);
var tickspeed = new Decimal(1000);
var updateRate = new Decimal(50);

var matter = new Decimal(0);
var matterOnPrestige = new Decimal(0);
var cprice = new Decimal(1000);

function updateHTML(){
	console.log("UPDATE")
	a("ramount").innerHTML = "you have " + formatValue("Mixed scientific", replicanti, 2, 0) + " replicanti";
	a("chance").innerHTML = "replicate chance: " + chance + "%";
	a("tickspeed").innerHTML = "tickspeed: " + tickspeed + "ms";
	a("amount").innerHTML = "you have " + formatValue("Mixed scientific", matter, 2, 0) + " matter (+" + formatValue("Mixed scientific", matterOnPrestige, 2, 0) +")";
	a("cprice").innerHTML = cprice + " matter to upgrade chance";

	if(matter==0){a("reduction").innerHTML = "0% reduction to tickspeed"} else {a("reduction").innerHTML = tickspeed.div(matter) + "% reduction to tickspeed"}
}

var slider = a("updateRange")

slider.oninput = function() {
  a("updaterate").innerHTML = "update rate: " + updateRate + "ms"
  updateRate = slider.value;
  clearInterval(updateLoop)
  updateLoop = window.setInterval(updateHTML, updateRate)
}

function updateReplicanti(){
	console.log("updating")
	if(replicanti.lt(100)){
	  for(i=0;replicanti.gt(i);i++){
		 if(chance > Math.random()*100){
		  replicanti = replicanti.plus(1);
	 	  updateHTML()
		 }
	  }
	} else {
		let x = 0;
		for(i=0;i<100;i++){
	if(chance > Math.random()*100){
		x++
	} 
	}
		replicanti = replicanti.mul(1+x/100).floor();
		updateHTML()
	}
}

updateLoop = window.setInterval(updateHTML, updateRate)
replicantiLoop = window.setInterval(updateReplicanti, 1000)

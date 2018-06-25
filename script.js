function a(a){return document.getElementById(a)}

var replicanti = 1;
var chance = 10;
var tickspeed = 1000;
var updateRate = 50;

var matter = 0;
var matterOnPrestige = 0;
var cprice = 1000;

function updateHTML(){
	console.log("UPDATE")
	a("ramount").innerHTML = "you have " + formatValuereplicanti("Mixed scientific", replicanti, 2, 0) + " replicanti";
	a("chance").innerHTML = "replicate chance: " + chance + "%";
	a("tickspeed").innerHTML = "tickspeed: " + tickspeed + "ms";
	a("amount").innerHTML = "you have " + formatValue("Mixed scientific", matter, 2, 0) + " matter (+" + formatValue("Mixed scientific", matterOnPrestige, 2, 0) +")";
	a("cprice").innerHTML = cprice + " matter to upgrade chance";
	a("updaterate").innerHTML = "update rate: " + updateRate + "ms"

	if(!matter){a("reduction").innerHTML = "0% reduction to tickspeed"} else {a("reduction").innerHTML = tickspeed/matter + "% reduction to tickspeed"}
}

var slider = a("updateRange")

slider.oninput = function() {
  updateRate = slider.value;
  clearInterval(updateLoop)
  updateLoop = window.setInterval(updateHTML(), updateRate)
}

function updateReplicanti(){
	console.log("updating")
	if(replicanti < 100){
	  for(i=0;i<replicanti;i++){
		 if(chance > Math.random()*100){
		  replicanti++;
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
	replicanti = Math.floor(replicanti*(1+x/100));
updateHTML()
}
}

updateLoop = window.setInterval(updateHTML(), updateRate)
replicantiLoop = window.setInterval(updateReplicanti(), 1000)

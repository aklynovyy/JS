function RandomTemp() {
	var random = Math.random();
	if (random < 0.01) {
		return -1;
	} else if (random < 0.05) {
		return 0;
	} else if (random < 0.1) {
		return (random * 100);
	} else if (random < 0.5) {
		return (random * 100 / 2);
	} else {
		return 27;
	}
}

function RandomWindForce() {
	var random = Math.random();
	if (random < 0.01) {
		return 27;
	} else if (random < 0.05) {
		return 18;
	} else if (random < 0.1) {
		return 12;
	} else if (random < 0.5) {
		return 8;
	} else {
		return 4;
	}
}

function RandomHum(){
	var random = Math.random();
	if (random < 0.01) {
		return 35;
	} else if (random < 0.06) {
		return 45;
	} else if (random < 0.1) {
		return 62;
	} else if (random < 0.6)  {
		return 75;
	} else {
		return 100;
	} 
}

function RandomWind(){
	var random = Math.random();
	if (random < 0.01) {
		return "SW";
	} else if (random < 0.06) {
		return "N";
	} else if (random < 0.1) {
		return "NW";
	} else if (random < 0.6)  {
		return "W";
	} else {
		return "S";
	} 
}

var dataArray = [];
var citiesArray = ["Rivne", "Kvasilov", "Dubno", "Lytsk"];

for (var j = 0; j < citiesArray.length; j++) {
	for (var i = 1; i <= 30; i++) {
		
		dataArray.push({
			city: citiesArray[j],
			day: i,
			humidity:RandomHum(),
			temperature: RandomTemp().toFixed(2),
			directionOfTheWind: RandomWind(),
			RandomWindForce: RandomWindForce()
		});					
	}
}
// console.log(dataArray);
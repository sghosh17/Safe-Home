//const citymap = {
//	london1: {
//		center: { lat: 51.5072, lng: 0.1276 },
//		population: 271,
//	},

//	london2: {
//		center: { lat: 55.5072, lng: 0.1276 },
//		population: 250,
//	},
//};

function initMap() {

	const map = new google.maps.Map(document.getElementById("map"), {
		zoom: 4,
		center: { lat: 50.736129, lng: -3.988229 },
		mapTypeId: "terrain",
	});


	for (const city in parsedLocalData.longEl, parsedLocalData.longitude) {

		const cityCircle = new google.maps.Circle({
			strokeColor: "#FF0000",
			strokeOpacity: 0.8,
			strokeWeight: 2,
			fillColor: "#FF0000",
			fillOpacity: 0.35,
			map,
			center: citymap[city].center,
			radius: Math.sqrt(citymap[city].population) * 100,
		});
	}
}

var localData = localStorage.getItem(localStorageKey);
var parsedLocalData;

var displayEl = document.querySelector(".display");

var localStorageKey = "details";
var localData = localStorage.getItem(localStorageKey);
var parsedLocalData;

if (localData) {
	parsedLocalData = JSON.parse(localData);
	console.log(parsedLocalData);
} else {
	console.error("could not find location");
}


var longEl = document.createElement("p");
longEl.innerText = parsedLocalData.longitude;
displayEl.appendChild(longEl);
displayEl.appendChild(document.createElement("br"));

var lattitudeEL = document.createElement("p");
lattitudeEL.innerText = parsedLocalData.lattitude;
displayEl.appendChild(lattitudeEL);
displayEl.appendChild(document.createElement("br"));

var localData = localStorage.getItem(localStorageKey);
var parsedLocalData;

const citymap = {

	london1: {
		center: { lat: 51.5072, lng: 0.1276 },
		population: 271,
	},

	london2: {
		center: { lat: 51.516767, lng: -0.098572 },
		population: 250,
	},
};

function initMap() {

	const map = new google.maps.Map(document.getElementById("map"), {
		zoom: 6,
		center: { lat: 50.736129, lng: -3.988229 },
		mapTypeId: "terrain",
	});


	for (const city in citymap) {

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
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

  for (const city in (parsedLocalData.longEl, parsedLocalData.longitude)) {
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
  console.error("could not find cities in localStorage");
}
var imageEl = document.createElement("img");
imageEl.src = parsedLocalData.image_url;
displayEl.appendChild(imageEl);
displayEl.appendChild(document.createElement("br"));
var titleEl = document.createElement("p");
titleEl.innerText = parsedLocalData.title;
displayEl.appendChild(titleEl);
displayEl.appendChild(document.createElement("br"));
var detailurlEl = document.createElement("a");
detailurlEl.href = parsedLocalData.details_url;
detailurlEl.innerHTML = "Zoopla Link";
displayEl.appendChild(detailurlEl);
var addressEl = document.querySelector("#pAddress");
addressEl.innerText = parsedLocalData.displayable_address;
var descripttionEl = document.querySelector("#pInfo");
descripttionEl.innerText = parsedLocalData.short_description;
var longEl = document.createElement("p");
longEl.innerText = parsedLocalData.longitude;
displayEl.appendChild(longEl);
displayEl.appendChild(document.createElement("br"));
var lattitudeEL = document.createElement("p");
lattitudeEL.innerText = parsedLocalData.latitude;
displayEl.appendChild(lattitudeEL);
displayEl.appendChild(document.createElement("br"));

//initMap();

function initMap() {
  console.log("Hello");
  const map = new google.maps.Map(document.getElementById("map"), {
    zoom: 4,
    center: { lat: 50.736129, lng: -3.988229 },
    mapTypeId: "terrain",
  });
  for (const city in (parsedLocalData.latitude, parsedLocalData.longitude)) {
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

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

var detailurlEl = document.createElement("a");
detailurlEl.setAttribute(
  "class",
  "absolute left-2 bottom-2 text-sm w-28 text-center bg-blue-500 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75"
);
detailurlEl.href = parsedLocalData.details_url;
detailurlEl.innerHTML = "Zoopla Link";
displayEl.appendChild(detailurlEl);



var titleEl = document.querySelector("#pTitle");
titleEl.innerText = parsedLocalData.title;

var addressEl = document.querySelector("#pAddress");
addressEl.innerText = parsedLocalData.displayable_address;

var descripttionEl = document.querySelector("#pInfo");
descripttionEl.innerText = parsedLocalData.short_description;

const citymap = {
  london1: {
    center: { lat: 51.5072, lng: 0.1276 },
    population: 271,
  },

  london2: {
    center: { lat: 52.5072, lng: 0.1276 },
    population: 250,
  },

  Manchester1: {
    center: { lat: 53.478661, lng: -2.219767 },
    population: 250,
  },

  Manchester2: {
    center: { lat: 53.4284, lng: -2.1766 },
    population: 250,
  },

  Salford: {
    center: { lat: 53.497568, lng: -2.310823 },
    population: 250,
  },

  Burnley: {
    center: { lat: 53.7893, lng: -2.2405 },
    population: 250,
  },

  Hastings: {
    center: { lat: 50.8543, lng: 0.5735 },
    population: 250,
  },

  Ipswich: {
    center: { lat: 52.062569, lng: 1.233907 },
    population: 250,
  },

  Kent1: {
    center: { lat: 51.360165, lng: 1.432038 },
    population: 250,
  },

  Liverpool1: {
    center: { lat: 53.558270, lng: -3.068743 },
    population: 250,
  },

  Slough1: {
    center: { lat: 51.510536, lng: -0.595041 },
    population: 250,
  },

  Stoke1: {
    center: { lat: 52.986115, lng: -1.986144 },
    population: 250,
  },

  Dot1: {
    center: { lat: 53.986115, lng: -0.986144 },
    population: 250,
  },

  Dot2: {
    center: { lat: 51.186115, lng: -0.886144 },
    population: 250,
  },


  Dot3: {
    center: { lat: 52.786115, lng: -2.886144 },
    population: 250,
  },


  Dot4: {
    center: { lat: 53.186115, lng: -1.686144 },
    population: 250,
  },


  Dot5: {
    center: { lat: 52.761511, lng: -1.267144 },
    population: 250,
  },


  Dot6: {
    center: { lat: 51.186225, lng: -2.876134 },
    population: 250,
  },


  Dot7: {
    center: { lat: 52.186, lng: -0.886 },
    population: 250,
  },


  Dot8: {
    center: { lat: 51.186115, lng: -3.886144 },
    population: 250,
  },

  Dot9: {
    center: { lat: 51.19653, lng: 0.85672 },
    population: 250,
  },

  Dot10: {
    center: { lat: 52.186, lng: -1.886 },
    population: 250,
  },

  DowningStreet: {
    center: { lat: 51.5034, lng: 0.1276 },
    population: 250,
  },

  Dot12: {
    center: { lat: 52.456650, lng: 0.307016 },
    population: 250,
  },

  Dot13: {
    center: { lat: 52.853638, lng: -2.726712 },
    population: 250,
  },

  Dot14: {
    center: { lat: 53.330009, lng: -1.656355 },
    population: 250,
  },

  Dot15: {
    center: { lat: 54.403465, lng: -1.732618 },
    population: 250,
  },

  Dot16: {
    center: { lat: 54.691746, lng: -1.212926 },
    population: 250,
  },
  Dot17: {
    center: { lat: 54.204918, lng: -2.601710 },
    population: 250,
  },

  Dot18: {
    center: { lat: 57.203514, lng: -2.190188 },
    population: 250,
  },

  Dot19: {
    center: { lat: 51.718494, lng: -1.968243 },
    population: 250,
  },

  Dot20: {
    center: { lat: 52.978939, lng: -0.026577 },
    population: 250,
  },

  Dot21: {
    center: { lat: 50.239738, lng: -5.237045 },
    population: 250,
  },

  Dot22: {
    center: { lat: 52.456890, lng: -2.148731 },
    population: 250,
  },

  Dot23: {
    center: { lat: 52.931450, lng: 1.301866 },
    population: 250,
  },

  Dot24: {
    center: { lat: 53.522820, lng: -1.128462 },
    population: 250,
  },

  Dot25: {
    center: { lat: 51.371628, lng: -0.457904 },
    population: 250,
  },

  Dot26: {
    center: { lat: 54.492973, lng: -1.140518 },
    population: 250,
  },

  Dot27: {
    center: { lat: 53.992119, lng: -1.541812 },
    population: 250,
  },


};

function initMap() {
  const map = new google.maps.Map(document.getElementById("map"), {
    zoom: 4,
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

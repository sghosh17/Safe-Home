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

var longEl = document.createElement("p");
longEl.innerText = parsedLocalData.longitude;
displayEl.appendChild(longEl);
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

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

var addressEl = document.createElement("p");
addressEl.innerText = parsedLocalData.displayable_address;
displayEl.appendChild(addressEl);
displayEl.appendChild(document.createElement("br"));

var descripttionEl = document.createElement("p");
descripttionEl.innerText = parsedLocalData.short_description;
displayEl.appendChild(descripttionEl);
displayEl.appendChild(document.createElement("br"));

var detailurlEl = document.createElement("a");
detailurlEl.href = parsedLocalData.details_url;
detailurlEl.innerHTML = "Zoopla Link";
displayEl.appendChild(detailurlEl);

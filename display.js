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
detailurlEl.href = parsedLocalData.details_url;
detailurlEl.innerHTML = "Zoopla Link";
displayEl.appendChild(detailurlEl);

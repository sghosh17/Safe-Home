var areaListEl = document.querySelector(".area-list");
var displayEl = document.querySelector(".display");

var localStorageKey = "areas";
var localData = localStorage.getItem(localStorageKey);
var parsedLocalData;

if (localData) {
  parsedLocalData = JSON.parse(localData);
  console.log(parsedLocalData);
} else {
  console.error("could not find cities in localStorage");
}

var ajaxUrl =
  "https://zoopla.p.rapidapi.com/auto-complete?search_term=" +
  parsedLocalData +
  "&search_type=listings";

const settings = {
  async: true,
  crossDomain: true,
  url: ajaxUrl,
  method: "GET",
  headers: {
    "x-rapidapi-host": "zoopla.p.rapidapi.com",
    "x-rapidapi-key": "wIC46v1Nt2pHzmlVUR69A0nElhQvBL0u",
  },
};

$.ajax(settings).done(function (response) {
  console.log(response);
  var suggestions = response.suggestions;
  areaListEl.innerHTML = "";
  selectEl = document.createElement("ol");
  selectEl.setAttribute("id", "list");
  areaListEl.appendChild(selectEl);
  suggestions.forEach(renderarea);
  selectEl.addEventListener("click", handlechange);
});

function renderarea(item) {
  console.log(item.value);
  var optionEl = document.createElement("li");
  optionEl.setAttribute("class", "subarea");
  optionEl.innerHTML = item.value;
  selectEl.appendChild(optionEl);
}

function handlechange(e) {
  //event.preventDefault();
  if (e.target && e.target.matches("li.subarea")) {
    console.log(e.target.innerHTML);

    displayEl.innerHTML = "";

    var val = e.target.innerHTML;
    console.log(val);

    var ajaxUrl =
      "https://zoopla.p.rapidapi.com/properties/list?area=" +
      val +
      "&category=residential&order_by=age&ordering=descending&page_number=1&page_size=40";
    const settings = {
      async: true,
      crossDomain: true,
      url: ajaxUrl,
      method: "GET",
      headers: {
        "x-rapidapi-host": "zoopla.p.rapidapi.com",
        "x-rapidapi-key": "wIC46v1Nt2pHzmlVUR69A0nElhQvBL0u",
      },
    };

    $.ajax(settings).done(function (response) {
      console.log(response);
      var listing = response.listing;
      //console.log(response.listing[0].listing_id);
      listing.forEach(show);
    });

    function show(item) {
      var imageurl = item.image_url;
      var caption = item.image_caption;
      var address = item.displayable_address;
      var description = item.description;
      var detailurl = item.details_url;

      var divEl = document.createElement("div");
      divEl.setAttribute("class", "image");
      divEl.setAttribute("data-item", JSON.stringify(item));

      var imageEl = document.createElement("img");
      imageEl.src = imageurl;
      imageEl.style.width = "400px";

      var captionEl = document.createElement("p");
      captionEl.innerText = caption;

      var addressEl = document.createElement("p");
      addressEl.innerText = address;

      //var descriptionEl = document.createElement("p");
      //descriptionEl.innerText = description;

      /*var detailurlEl = document.createElement("a");
      detailurlEl.href = detailurl;
      detailurlEl.innerHTML = "Link to property";*/

      var seeMoreEl = document.createElement("p");
      seeMoreEl.innerText = "See More....";
      seeMoreEl.setAttribute("class", "seeMore");
      seeMoreEl.addEventListener("click", imageclick);

      divEl.appendChild(imageEl);
      divEl.appendChild(captionEl);

      divEl.appendChild(addressEl);
      //divEl.appendChild(description);
      divEl.appendChild(seeMoreEl);

      displayEl.appendChild(divEl);

      /*displayEl.innerHTML = item.value;
      selectEl.appendChild(optionEl);
      selectEl.addEventListener("change", handlechange);*/
    }
  }
}

function imageclick(e) {
  //event.preventDefault();
  console.log(e);
  console.log(e.target.parentElement);
  var parentElement = e.target.parentElement;
  var listingDetail = parentElement.getAttribute("data-item");
  console.log(listingDetail);

  var localStorageKey = "details";
  localStorage.setItem(localStorageKey, listingDetail);
  window.location.href = "./crime.html";
  /*if (e.target && e.target.matches("div.image")) {
    console.log(e);
  }*/
}

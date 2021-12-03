var formEl = document.querySelector(".form");
var areaListEl = document.querySelector(".area-list");
var displayEl = document.querySelector(".display");
var selectEl;

formEl.addEventListener("submit", handleSubmit);

function handleSubmit(event) {
  event.preventDefault();

  var area = document.querySelector("#area-name").value;
  var ajaxUrl =
    "https://zoopla.p.rapidapi.com/auto-complete?search_term=" +
    area +
    "&search_type=listings";

  const settings = {
    async: true,
    crossDomain: true,
    url: ajaxUrl,
    method: "GET",
    headers: {
      "x-rapidapi-host": "zoopla.p.rapidapi.com",
      "x-rapidapi-key": "36e9ca705dmsh4bc5c207898513cp1709dbjsnfa9c6b49aa5b",
    },
  };

  $.ajax(settings).done(function (response) {
    console.log(response);
    var suggestions = response.suggestions;
    areaListEl.innerHTML = "";
    selectEl = document.createElement("select");
    selectEl.setAttribute("id", "list");
    areaListEl.appendChild(selectEl);
    suggestions.forEach(renderarea);
  });

  function renderarea(item) {
    console.log(item.value);
    var optionEl = document.createElement("option");
    optionEl.value = item.value;
    optionEl.innerHTML = item.value;
    selectEl.appendChild(optionEl);
    selectEl.addEventListener("change", handlechange);
  }
}

function handlechange() {
  //event.preventDefault();
  displayEl.innerHTML = "";
  console.log("Inside");
  var listEL = document.getElementById("list");
  var val = listEL.options[listEL.selectedIndex].value;
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
      "x-rapidapi-key": "36e9ca705dmsh4bc5c207898513cp1709dbjsnfa9c6b49aa5b",
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

    var imageEl = document.createElement("img");
    imageEl.src = imageurl;
    imageEl.style.width = "400px";

    var captionEl = document.createElement("p");
    captionEl.innerText = caption;

    var addressEl = document.createElement("p");
    addressEl.innerText = address;

    //var descriptionEl = document.createElement("p");
    //descriptionEl.innerText = description;

    var detailurlEl = document.createElement("a");
    detailurlEl.href = detailurl;
    detailurlEl.innerHTML = "Link to property";

    divEl.appendChild(imageEl);
    divEl.appendChild(captionEl);

    divEl.appendChild(addressEl);
    //divEl.appendChild(description);
    divEl.appendChild(detailurlEl);

    displayEl.appendChild(divEl);

    /*displayEl.innerHTML = item.value;
    selectEl.appendChild(optionEl);
    selectEl.addEventListener("change", handlechange);*/
  }
}

// So far, we have been storing one piece of data in variables
/*var name = "Andre";
var pets = 3;
var isStudent = true;


$.ajax({
    type: "GET",
    url: "https://api.charitycommission.gov.uk/register/api/searchCharityName/UNICEF",

    // Request headers
    beforeSend: function(xhrObj) {
        xhrObj.setRequestHeader("Cache-Control", "no-cache");
        xhrObj.setRequestHeader("Ocp-Apim-Subscription-Key", "a40347f62a444906bbf75fd5e75d2882");
        },
    })
.done(function (data) {
    alert("success");
})
.fail(function () {
    alert("error");
});*/

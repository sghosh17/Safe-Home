var areaListEl = document.querySelector(".area-list");
var displayEl = document.querySelector(".display");

var localStorageKey = "areas";
var localData = localStorage.getItem(localStorageKey);
var parsedLocalData;

// Fetch area name from local storage and calling Zoopla API to get suggested locations
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
    "x-rapidapi-key": "29a6d39627mshe225ebfa3444c45p12807djsn0046fe5cd7a7",
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

// Function to render the suugested locations
function renderarea(item) {
  console.log(item.value);
  var optionEl = document.createElement("li");
  optionEl.setAttribute(
    "class",
    "subarea cursor-pointer  mx-4 my-4 py-2 px-4 bg-blue-500 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75 "
  );
  optionEl.innerHTML = item.value;
  selectEl.appendChild(optionEl);
}

// Function to call the Zoopla API on selection of a location
function handlechange(e) {
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
        "x-rapidapi-key": "29a6d39627mshe225ebfa3444c45p12807djsn0046fe5cd7a7",
      },
    };

    $.ajax(settings).done(function (response) {
      console.log(response);
      var listing = response.listing;
      if (listing.length > 0) {
        listing.forEach(show);
      } else {
        console.log("No properties found !");
        return;
      }
    });

    // Function to display the property listings returning from the Zoopla API call response
    function show(item) {
      var imageurl = item.image_url;
      var address = item.displayable_address;
      var description = item.description;
      var detailurl = item.details_url;

      var divEl = document.createElement("div");
      divEl.setAttribute("class", "image");
      divEl.setAttribute(
        "class",
        "display h-72 w-72 bg-white my-2 ml-2 justify-center shadow-md p-2 rounded-lg border border-yellow-400 overflow-hidden "
      );
      divEl.setAttribute("data-item", JSON.stringify(item));

      var imageEl = document.createElement("img");
      imageEl.setAttribute("class", "object-fill h-48 w-full");
      imageEl.src = imageurl;

      var addressEl = document.createElement("p");
      addressEl.innerText = address;

      var seeMoreEl = document.createElement("p");
      seeMoreEl.innerText = "See More....";
      seeMoreEl.setAttribute("class", "seeMore");
      seeMoreEl.addEventListener("click", imageclick);

      divEl.appendChild(imageEl);

      divEl.appendChild(addressEl);

      divEl.appendChild(seeMoreEl);

      displayEl.appendChild(divEl);
    }
  }
}

// Stores the selected property into local storage and calls the crime page
function imageclick(e) {
  console.log(e);
  console.log(e.target.parentElement);
  var parentElement = e.target.parentElement;
  var listingDetail = parentElement.getAttribute("data-item");
  console.log(listingDetail);

  var localStorageKey = "details";
  localStorage.setItem(localStorageKey, listingDetail);
  window.location.href = "../house_info/crime.html";
}

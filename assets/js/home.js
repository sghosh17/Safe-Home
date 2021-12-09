var formEl = document.querySelector(".form");

formEl.addEventListener("submit", handleSubmit);

function handleSubmit(event) {
  event.preventDefault();

  var area = document.querySelector("#area-name").value;
  /*var ajaxUrl =
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
  });*/

  if (area != "") {
    var localStorageKey = "areas";

    // parse into JSON string
    var areaJSONStr = JSON.stringify(area);
    // set localStorage
    localStorage.setItem(localStorageKey, areaJSONStr);

    window.location.href = "../results/result.html";
  }
}

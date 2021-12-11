var formEl = document.querySelector(".form");

formEl.addEventListener("submit", handleSubmit);

function handleSubmit(event) {
  event.preventDefault();

  var area = document.querySelector("#area-name").value;

  if (area != "") {
    var localStorageKey = "areas";

    // parse into JSON string
    var areaJSONStr = JSON.stringify(area);
    // set localStorage
    localStorage.setItem(localStorageKey, areaJSONStr);

    window.location.href = "../results/result.html";
  }
}

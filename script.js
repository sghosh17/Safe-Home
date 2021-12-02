Bon;

// So far, we have been storing one piece of data in variables
var name = "Andre";
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
});
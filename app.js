function performSearch(event) { 
  var request; 
  event.preventDefault(); 

  request = $.ajax({ 
      url:"https://api.covid19api.com/summary", 
      type: "GET", 
  }); 

pat=$("#textfield").val();

  request.done(function (response) { 

    formatSearchResults(response); 
	document.getElementById("textfield").value = "";
  });
} 

var pat, flag = 0; 
function formatSearchResults(jsonResults) { 

    var jsonObject = jsonResults; 

    jsonObject.Countries.forEach(function (item) { 

        if (item.Country.toLowerCase() == pat.toLowerCase()) {


var kraj = document.getElementById("country");
kraj.innerHTML += "Kraj: " + item.Country + "</br>";

var lacznie = document.getElementById("result");
lacznie.innerHTML += "Zachorowań łącznie: " + item.TotalConfirmed + "</br>";

var totalsmier = document.getElementById("result");
totalsmier.innerHTML += "Śmierci łącznie: " + item.TotalDeaths + "</br>";

var totalprzyw = document.getElementById("result");
totalprzyw.innerHTML += "Wyzdrowień łącznie: " + item.TotalRecovered + "</br>";

var nowepotw = document.getElementById("result");
nowepotw.innerHTML += "Nowe zachorowania: " + item.NewConfirmed + "</br>";

var nowesmier = document.getElementById("result");
nowesmier.innerHTML += "Nowe śmierci: " + item.NewDeaths + "</br>";

var noweprzywr = document.getElementById("result");
noweprzywr.innerHTML += "Nowe wyzdrowienia: " +item.NewRecovered + "</br>"; 

            flag = 1; 
            return; 
        } 
    }); 
 
} 

function resetResults() { 
$("#result").text(""); 
$("#country").text(""); 
flag=0; 
} 

function sanitizeInputs() { 
var str = $("#textfield").val(); 
str = str.replace(/[^a-zA-Z 0-9, ]/gim, ""); 
str = str.trim(); 
$("#textfield").val(str); 
}
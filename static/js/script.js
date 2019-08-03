// -------- Clock js --------

function startTime() {
  var today = new Date();
  var h = today.getHours();
  var m = today.getMinutes();
  m = checkTime(m);
  document.getElementById('txt').innerHTML =
  h + ":" + m;
  var t = setTimeout(startTime, 2000 );
}
function checkTime(i) {
  if (i < 10) {i = "0" + i};  // add zero in front of numbers < 10
  return i;
}

// -------- json base64 to website --------


function loadJSON(callback) {

   var xobj = new XMLHttpRequest();
       xobj.overrideMimeType("application/json");
   xobj.open('GET', 'http://10.42.0.87:8888/json', true); // Replace 'my_data' with the path to your file
   xobj.onreadystatechange = function () {
         if (xobj.readyState == 4 && xobj.status == "200") {
           appendData(atob(xobj.responseText));
         }
   };
   xobj.send(null);
}

function appendData(xobj) {
    var mainContainer = document.getElementById("myData");
    for (var i = 0; i < 1; i++) {
        var div = document.createElement("div");
        div.innerHTML = xobj
        mainContainer.appendChild(div);
    }
}



function init() {
loadJSON(function(response) {
 // Parse JSON string into object
   var actual_JSON = JSON.parse(response);
});
}

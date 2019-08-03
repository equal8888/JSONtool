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
  if (i < 10) {i = "0" + i};
  return i;
}
function initButtonGroup(parentId) {
    var buttonGroup = document.getElementById(parentId),
        i = 0,
        len = buttonGroup.childNodes.length,
        button;
        handleButtonGroupClick = initClickHandler(parentId);
    for (; i < len; i += 1) {
        button = buttonGroup.childNodes[i];
        if (button.nodeName === 'BUTTON') {
            button.addEventListener('click', handleButtonGroupClick);
        }
    }
}
function initClickHandler(parentId) {
    return function(e) {
        var buttonGroup = document.getElementById(parentId),
            i = 0,
            len = buttonGroup.childNodes.length,
            button;
        e.preventDefault();
        for (; i < len; i += 1) {
            button = buttonGroup.childNodes[i];
            if (button.nodeName === 'BUTTON') {
                button.disabled = false;
            }
        }
        e.target.disabled = true;
    };
}
initButtonGroup('buttonGroup');
function clearJSON(elementID)
{
    document.getElementById("jsondata").innerHTML = "";
}
function loadJSON(callback) {
   var xobj = new XMLHttpRequest();
       xobj.overrideMimeType("application/json");
   xobj.open('GET', 'http://10.42.0.87:8888/json', true);
   xobj.onreadystatechange = function () {
         if (xobj.readyState == 4 && xobj.status == "200") {
           appendData(atob(xobj.responseText));
         }
   };
   xobj.send(null);
}
function appendData(xobj) {
    var mainContainer = document.getElementById("jsondata");
    for (var i = 0; i < 1; i++) {
        var div = document.createElement("div");
        div.innerHTML = xobj
        mainContainer.appendChild(div);
    }
}
function init() {
loadJSON(function(response) {
   var actual_JSON = JSON.parse(response);
});
}

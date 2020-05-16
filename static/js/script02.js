// set up stuff on page loadb
window.onload = reloadP()
function reloadP() {
  document.getElementById('DisableB01').disabled = true;
  document.getElementById('DisableB02').disabled = true;
  checkboxStatus = 'CheckOn'

// HOST
  document.getElementById('ShowMyHost').innerHTML = `Status: <span style='color:gray; font-weight: bold;'>n/a</span> <br> Host: <span style='color:gray; font-weight: bold;'>n/a</span>`;
  document.getElementById('urlEntry').value = `http://${location.hostname}:8888/json01`;
  // HeaderEntry
  document.getElementById('HeaderEntry').value = 'Authorization';
  // Auth
  document.getElementById('authEntry').value = 'Basic [YWRtaW46YWRtaW4=]';
  // Method
  document.getElementById('methodEntry').value = 'GET';
  // DATA
  document.getElementById("valueEntry").value = 'a';
  // VALUE
  document.getElementById('valueId').value = '<iframe width="100%" height="400" src="https://www.youtube.com/embed/eMDQfSrpLlQ" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>';
};

// memo
//   crossOrigin: true,
//  dataType: "jsonp",

function loadJSON(data22,method,pageurl,newheadr,newauth) {

  const xhr = new XMLHttpRequest();

  var params = `${data22}`;
  var host  = (`${pageurl}`);
  var newheadr = `${newheadr}`;
  var newauth = (`${newauth}`);

  xhr.open(`${method}`, `${host}`);
  xhr.setRequestHeader('Content-type', 'application/json;charset=UTF-8');
  xhr.setRequestHeader(`${newheadr}`, `${newauth}`);
  xhr.onreadystatechange = function() {
  xhr.timeout = 2000;

  if(xhr.readyState == 4 && xhr.status == 200) {
    appendData((xhr.responseText),'jsondata');
    var pageurl = `Status: <span style='color:green; font-weight: bold;'>ok</span> <br> Host: ${host}`;
    document.getElementById('ShowMyHost').innerHTML = pageurl;
  }
  else if (xhr.readyState == 4 && xhr.status != 200) {
    var pageurl = `Status: <span style='color:red; font-weight: bold;'>${xhr.status}</span> <br> Host: ${host}`;
    document.getElementById('ShowMyHost').innerHTML = pageurl;
  }
};
xhr.ontimeout = function (e) {
  var pageurl = `Status: <span style='color:red; font-weight: bold;'>timeout</span> <br> Host: ${host}`;
  document.getElementById('ShowMyHost').innerHTML = pageurl;
};
xhr.send(params);
};
function appendData(xhr,eID,nameElement02) {
  var mainContainer = document.getElementById(`${eID}`);
  var nameElement02 = document.getElementById("valueEntry");

  for (var i = 0; i < 1; i++) {

    obj = JSON.parse(xhr);
    newname1 = nameElement02.value;

    var div = document.createElement('div');

    div.innerHTML = obj[`${newname1}`];

    mainContainer.appendChild(div);
  }
};
// Buttons
function jSettings04() {
  var nameElement04 = document.getElementById("methodEntry");
  var newmethod = nameElement04.value;
};

// Apply

function BPreview01() {
  document.getElementById('DisableB01').disabled = true;
  document.getElementById('DisableB02').disabled = false;
// HOST
  var name02 = document.getElementById("urlEntry");
  var jhost = name02.value;
  var pageurl = `Status: <span style='color:gray; font-weight: bold;'>n/a</span> <br> Host: ${jhost}`;
  document.getElementById('ShowMyHost').innerHTML = pageurl;
// DATA
  var name02 = document.getElementById("valueEntry");
  var newname = name02.value;
  var valuename = document.getElementById("valueId").name = newname;
// URL
  var name00 = document.getElementById("urlEntry");
  var jhost = name00.value;
// METHOD
  var nameElement04 = document.getElementById("methodEntry");
  var method = nameElement04.value;
// HEADERS
  var name05 = document.getElementById("HeaderEntry");
  var newheadr = name05.value;

// AUTH
  var name03 = document.getElementById("authEntry");
  var newauth = name03.value;

    loadJSON(`${data22}`,`${method}`,`${jhost}`,`${newheadr}`,`${newauth}`);
};


function BClear01(elementID) {
  document.getElementById('DisableB01').disabled = false;
  document.getElementById('DisableB02').disabled = true;
  document.getElementById('jsondata').innerHTML = '';
};
function ReloadPage() {
  location.reload(true);
};


function reset() {
  document.getElementById('DisableB01').disabled = true;
  document.getElementById('DisableB02').disabled = true;
  checkboxStatus = 'CheckOn'

// HOST
  document.getElementById('ShowMyHost').innerHTML = `Status: <span style='color:gray; font-weight: bold;'>n/a</span> <br> Host: <span style='color:gray; font-weight: bold;'>n/a</span>`;
  document.getElementById('urlEntry').value = `http://${location.hostname}:8888/json01`;
  // HeaderEntry
  document.getElementById('HeaderEntry').value = 'Authorization';
  // Auth
  document.getElementById('authEntry').value = 'Basic [YWRtaW46YWRtaW4=]';
  // Method
  document.getElementById('methodEntry').value = 'GET';
  // DATA
  document.getElementById("valueEntry").value = 'a';
  // VALUE
  document.getElementById('valueId').value = '<iframe width="100%" height="400" src="https://www.youtube.com/embed/eMDQfSrpLlQ" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>';

};


function reload(){
    var container = document.getElementById("content__heading");
    var content = container.innerHTML;
    container.innerHTML= content;

   //this line is to watch the result in console , you can remove it later
    console.log("Refreshed");
}


// Conversion (client-side) JSON.stringify(data)
// Defines what can be data

// IDS
//  urlEntry
//  valueEntry

const isValidElement = element => {
  return element.name && element.value;
};
const formToJSON = elements => [].reduce.call(elements, (data, element) => {
  if (isValidElement(element)) {
    data[element.name] = element.value;
  }
  return data;
}, {});


const handleFormSubmit = event => {
  event.preventDefault();
  const data = formToJSON(form.elements);

  const dataContainer = document.getElementsByClassName('results__display')[0];
  dataContainer.textContent = JSON.stringify(data, null, '  ');
  data22 = JSON.stringify(data);

  const base64data = btoa(JSON.stringify(data));
  const dataContainer2 = document.getElementsByClassName('results__display2')[0];
  dataContainer2.textContent = base64data;

  if (checkboxStatus == 'CheckOn') {
    BPreview01()
  };
  if(document.getElementById('DisableB01').disabled && document.getElementById('DisableB02').disabled){
    document.getElementById('DisableB01').disabled = false;
  };
};
// EventListener('submit'
const form = document.getElementsByClassName('contact-form')[0];
form.addEventListener('submit', handleFormSubmit);
// Press Enter to Preview
function EntertoPreview01() {
  var checkBox = document.getElementById('myCheck');
  if (checkBox.checked == true){
    checkboxStatus = 'CheckOn'
  } else {
    checkboxStatus = 'CheckOff'
  };
};

// set up stuff on page loadb
window.onload = reloadP()
function reloadP() {
  document.getElementById('DisableB01').disabled = true;
  document.getElementById('DisableB02').disabled = true;
  checkboxStatus = 'CheckOn'
  var pageurl = `Status: <span style='color:gray; font-weight: bold;'>n/a</span> <br> Host: <span style='color:gray; font-weight: bold;'>n/a</span>`;
  document.getElementById('ShowMyHost').innerHTML = pageurl;

  var defhost1 = `${location.hostname}:8888/json01`;
  document.getElementById('urlEntry').value = defhost1;

//  var valuename = document.getElementById("valueId").name = newname;


};
// no need to edit. hostname is obtained automatically...
function loadJSON(data22,method,pageurl,newauth) {
  var http = new XMLHttpRequest();
  var params = `${data22}`;
  var host  = (`${pageurl}`);
  var newauth = (`${newauth}`);

  http.open(`${method}`, `http://${host}`, true);
  http.setRequestHeader('Content-type', 'application/json;charset=UTF-8');
  http.setRequestHeader('Authorization', `${newauth}`);
  http.onreadystatechange = function() {
  http.timeout = 2000;
  if(http.readyState == 4 && http.status == 200) {
    appendData((http.responseText),'jsondata');
    var pageurl = `Status: <span style='color:green; font-weight: bold;'>ok</span> <br> Host: ${host}`;
    document.getElementById('ShowMyHost').innerHTML = pageurl;
  }
  else if (http.readyState == 4 && http.status != 200) {
    var pageurl = `Status: <span style='color:red; font-weight: bold;'>${http.status}</span> <br> Host: ${location.hostname}`;
    document.getElementById('ShowMyHost').innerHTML = pageurl;
  }
};
http.ontimeout = function (e) {
  var pageurl = `Status: <span style='color:red; font-weight: bold;'>timeout</span> <br> Host: ${location.hostname}`;
  document.getElementById('ShowMyHost').innerHTML = pageurl;
};
http.send(params);
};
function appendData(http,eID,nameElement02) {
  var mainContainer = document.getElementById(`${eID}`);
  var nameElement02 = document.getElementById("valueEntry");

  for (var i = 0; i < 1; i++) {

    obj = JSON.parse(http);
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

function jSettings02() {
// HOST
  var name02 = document.getElementById("urlEntry");
  var jhost = name02.value;
  var pageurl = `Status: <span style='color:gray; font-weight: bold;'>n/a</span> <br> Host: ${jhost}`;
  document.getElementById('ShowMyHost').innerHTML = pageurl;


// DATA
  var name02 = document.getElementById("valueEntry");
  var newname = name02.value;

  var valuename = document.getElementById("valueId").name = newname;
};


function BPreview01() {
  document.getElementById('DisableB01').disabled = true;
  document.getElementById('DisableB02').disabled = false;

  // URL
  var name00 = document.getElementById("urlEntry");
  var jhost = name00.value;


  // METHOD
  var nameElement04 = document.getElementById("methodEntry");
  var method = nameElement04.value;

 // AUTH
  var name03 = document.getElementById("authEntry");
  var newauth = name03.value;

  loadJSON(`${data22}`,`${method}`,`${jhost}`,`${newauth}`);
};
function BClear01(elementID) {
  document.getElementById('DisableB01').disabled = false;
  document.getElementById('DisableB02').disabled = true;
  document.getElementById('jsondata').innerHTML = '';
};
function ReloadPage() {
  location.reload(true);
};




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

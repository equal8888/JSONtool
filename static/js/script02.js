// set up stuff on page load
function initialconf() {
  document.getElementById('DisableB01').disabled = true;
  document.getElementById('DisableB02').disabled = true;
  checkboxStatus = 'CheckOn'
  var pageurl = `Status: <span style='color:gray; font-weight: bold;'>n/a</span> <br> Host: ${location.hostname}:8888`;
  document.getElementById('ShowMyHost').innerHTML = pageurl;
};
// no need to edit. hostname is obtained automatically...
// you can confirm that its the right one from the website under Host:
function loadJSON(url,data22,method) {
  var http = new XMLHttpRequest();
  var myhostname = location.hostname;
  var url = `${url}`;
  var params = `${data22}`;
  http.open(`${method}`, `http://${myhostname}:8888/${url}`, true);
  http.setRequestHeader('Content-type', 'application/json;charset=UTF-8');
  http.setRequestHeader('Authorization', 'Basic [YWRtaW46YWRtaW4=]');
  http.onreadystatechange = function() {
  http.timeout = 2000;
  if(http.readyState == 4 && http.status == 200) {
    appendData(atob(http.responseText),'jsondata');
    document.getElementById('jsondata').innerHTML.reload;
    var pageurl = `Status: <span style='color:green; font-weight: bold;'>ok</span> <br> Host: ${location.hostname}:8888`;
    document.getElementById('ShowMyHost').innerHTML = pageurl;
  }
  else if (http.readyState == 4 && http.status != 200) {
    var pageurl = `Status: <span style='color:red; font-weight: bold;'>${http.status}</span> <br> Host: ${location.hostname}:8888`;
    document.getElementById('ShowMyHost').innerHTML = pageurl;
  }
};
http.ontimeout = function (e) {
  var pageurl = `Status: <span style='color:red; font-weight: bold;'>timeout</span> <br> Host: ${location.hostname}:8888`;
  document.getElementById('ShowMyHost').innerHTML = pageurl;
};
http.send(params);
};
function appendData(http,eID) {
  var mainContainer = document.getElementById(`${eID}`);
  for (var i = 0; i < 1; i++) {
    var div = document.createElement('div');
    div.innerHTML = http
    mainContainer.appendChild(div);
  }
};
// Buttons
function BPreview01() {
  document.getElementById('DisableB01').disabled = true;
  document.getElementById('DisableB02').disabled = false;
  loadJSON('Gjson01',`${data22}`,'POST');
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
  const base64data = btoa(JSON.stringify(data));
  const dataContainer = document.getElementsByClassName('results__display')[0];
  dataContainer.textContent = JSON.stringify(data, null, '  ');
  data22 = JSON.stringify(data);
  if (checkboxStatus == 'CheckOn') {
    BClear01()
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

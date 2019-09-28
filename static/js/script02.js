window.onload = reloadP()
function reloadP() {
  document.getElementById('DisableB01').disabled = true;
  document.getElementById('DisableB02').disabled = true;
  checkboxStatus = 'CheckOn'

  var pageurl = `Status: <span style='color:green; font-weight: bold;'>ok</span> <br> Host: ${location.hostname}:8888`;
  document.getElementById('ShowMyHost').innerHTML = pageurl;

}

function startTime() {
  var today = new Date();
  var h = today.getHours();
  var m = today.getMinutes();
  m = checkTime(m);
  document.getElementById('txt').innerHTML =
  h + ':' + m;
  var t = setTimeout(startTime, 2000 );
}
function checkTime(i) {
  if (i < 10) {i = '0' + i};
  return i;
}

function loadJSON(url,data22,method) {
   var http = new XMLHttpRequest();
   var myhostname = location.hostname;
   var url = `${url}`;
   var params = `${data22}`;
   http.open(`${method}`, `http://${myhostname}:8888/${url}`, true);
   http.setRequestHeader('Content-type', 'application/json;charset=UTF-8');
   http.setRequestHeader('Authorization', 'Basic [YWRtaW46YWRtaW4=]');

   http.onreadystatechange = function() {
       if(http.readyState == 4 && http.status == 200) {
           appendData(atob(http.responseText),'jsondata');
           document.getElementById('jsondata').innerHTML.reload
       }
   }
   http.send(params);
}

function appendData(http,eID) {
    var mainContainer = document.getElementById(`${eID}`);
    for (var i = 0; i < 1; i++) {
        var div = document.createElement('div');
        div.innerHTML = http
        mainContainer.appendChild(div);
    }
}

function BGjson03() {
  loadJSON('Gjson03','null','GET');
}
function BPreview01() {
  document.getElementById('DisableB01').disabled = true;
  document.getElementById('DisableB02').disabled = false;

  loadJSON('Gjson01',`${data22}`,'POST');
}
function BClear01(elementID)
{
    document.getElementById('DisableB01').disabled = false;
    document.getElementById('DisableB02').disabled = true;

    document.getElementById('jsondata').innerHTML = '';
}

function BGjson04() {
  location.reload(true);
}


const isValidElement = element => {
  return element.name && element.value;
};

const isValidValue = element => {
  return (!['checkbox', 'radio'].includes(element.type) || element.checked);
};


const isCheckbox = element => element.type === 'checkbox';
const isMultiSelect = element => element.options && element.multiple;
const getSelectValues = options => [].reduce.call(options, (values, option) => {
  return option.selected ? values.concat(option.value) : values;
}, []);

const formToJSON_deconstructed = elements => {
  const reducerFunction = (data, element) => {
    data[element.name] = element.value;
    console.log(JSON.stringify(data));
    return data;
  };

  const reducerInitialValue = {};
  console.log('Initial `data` value:', JSON.stringify(reducerInitialValue));
  const formData = [].reduce.call(elements, reducerFunction, reducerInitialValue);
  return formData;
};

const formToJSON = elements => [].reduce.call(elements, (data, element) => {
  if (isValidElement(element) && isValidValue(element)) {
    if (isCheckbox(element)) {
      data[element.name] = (data[element.name] || []).concat(element.value);
    } else if (isMultiSelect(element)) {
      data[element.name] = getSelectValues(element);
    } else {
      data[element.name] = element.value;
    }
  }
  return data;
}, {});

// Show raw data on page

const handleFormSubmit = event => {
  event.preventDefault();

  const data = formToJSON(form.elements);

  const base64data = btoa(JSON.stringify(data));

  const dataContainer = document.getElementsByClassName('results__display')[0];
  dataContainer.textContent = JSON.stringify(data, null, '  ');

  const dataContainer2 = document.getElementsByClassName('results__display2')[0];
  dataContainer2.textContent = base64data;

  data22 = JSON.stringify(data);


  if (checkboxStatus == 'CheckOn') {
    BClear01()
    BPreview01()
   } else {
  }

  if(document.getElementById('DisableB01').disabled && document.getElementById('DisableB02').disabled){
    document.getElementById('DisableB01').disabled = false;
  }

};


const form = document.getElementsByClassName('contact-form')[0];
form.addEventListener('submit', handleFormSubmit);

// Press Enter to Preview
function EntertoPreview01() {
  var checkBox = document.getElementById('myCheck');
  if (checkBox.checked == true){
    checkboxStatus = 'CheckOn'

  } else {
    checkboxStatus = 'CheckOff'

  }
}

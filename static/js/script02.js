window.onload = reloadP()
function reloadP() {
  document.getElementById("DisableB01").disabled = true;
  document.getElementById("DisableB02").disabled = true;
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

function appendData(xobj,eID) {
    var mainContainer = document.getElementById(`${eID}`);
    for (var i = 0; i < 1; i++) {
        var div = document.createElement("div");
        div.innerHTML = xobj
        mainContainer.appendChild(div);
    }
}
function BGjson01() {
  loadJSON('Gjson01',`${data22}`,'POST');
}
function BGjson03() {
  loadJSON('Gjson03','null','GET');
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
  document.getElementById("DisableB01").disabled = false;
  event.preventDefault();
  const data = formToJSON(form.elements);
  const base64data = btoa(JSON.stringify(data));


  const dataContainer = document.getElementsByClassName('results__display')[0];
  dataContainer.textContent = JSON.stringify(data, null, "  ");

  const dataContainer2 = document.getElementsByClassName('results__display2')[0];
  dataContainer2.textContent = base64data;

  data22 = JSON.stringify(data);

};

const form = document.getElementsByClassName('contact-form')[0];
form.addEventListener('submit', handleFormSubmit);

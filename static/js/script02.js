window.onload = reloadP()
function reloadP() {
  document.getElementById("DisableB").disabled = true;
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
function loadJSON(method,url) {
   var xobj = new XMLHttpRequest();
       xobj.overrideMimeType("application/json");
   xobj.open(`${method}`, `http://10.42.0.87:8888/${url}`, true);
   xobj.setRequestHeader('Authorization', 'Basic [YWRtaW46YWRtaW4=]');
   xobj.onreadystatechange = function () {
         if (xobj.readyState == 4 && xobj.status == "200") {
           if (`${url}`=='Gjson01') {
             appendData(atob(xobj.responseText),'jsondata');

           } else if (`${url}`=='Pjson01') {
             console.log(`Its: ${url}`);

           } else {
             console.log(`Unknown Value of: ${url}`);
           }
          }
   };
   xobj.send(null);
}
function appendData(xobj,eID) {
    var mainContainer = document.getElementById(`${eID}`);
    for (var i = 0; i < 1; i++) {
        var div = document.createElement("div");
        div.innerHTML = xobj
        mainContainer.appendChild(div);
    }
}
function BGjsonP01() {
  loadJSON('GET','jp01');
}
function BGjson01() {
  loadJSON('GET','Gjson01');
}
function BPjson01() {
  loadJSON('POST','Pjson01');
}

//show json format currently not on server side

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

const handleFormSubmit = event => {
  event.preventDefault();
  const data = formToJSON(form.elements);
  const dataContainer = document.getElementsByClassName('results__display')[0];
  dataContainer.textContent = JSON.stringify(data, null, "  ");
};

const form = document.getElementsByClassName('contact-form')[0];
form.addEventListener('submit', handleFormSubmit);

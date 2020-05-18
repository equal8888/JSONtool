// set up stuff on page loadb
window.onload = reloadP()
function reloadP() {
  document.getElementById('DisableB01').disabled = true;
  document.getElementById('DisableB02').disabled = true;
  checkboxStatus = 'CheckOn'

//  document.getElementById('IncomingJson').value = '';

  // HOST
  document.getElementById('ShowMyHost').innerHTML = `Status: <span style='color:gray; font-weight: bold;'>n/a</span> <br> Host: <span style='color:gray; font-weight: bold;'>n/a</span>`;
  document.getElementById('urlEntry').value = `http://${location.hostname}:8888/json01`;
  // Auth
  document.getElementById('authEntry01').value = 'application/json';
  document.getElementById('authEntry02').value = 'Basic [YWRtaW46YWRtaW4=]';
  // Method
  document.getElementById('methodEntry').value = 'POST';
  // DATA
  document.getElementById('dataId01').value = 'data01';
  // VALUE
  document.getElementById('valueId01').value = '<iframe width="100%" height="400" src="https://www.youtube.com/embed/eMDQfSrpLlQ" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>';

  // HeaderEntry data
  var headerlist = `
            <option value="novalue">---</option>
            <option value="Accept">Accept</option>
            <option value="Accept-Charset">Accept-Charset</option>
            <option value="Accept-Encoding">Accept-Encoding</option>
            <option value="Accept-Language">Accept-Language</option>
            <option value="Access-Control-Request-Headers">Access-Control-Request-Headers</option>
            <option value="Access-Control-Request-Method">Access-Control-Request-Method</option>
            <option value="Authorization">Authorization</option>
            <option value="Cache-Control">Cache-Control</option>
            <option value="Connection">Connection</option>
            <option value="Content-Language">Content-Language</option>
            <option value="Content-Type">Content-Type</option>
            <option value="Cookie">Cookie</option>
            <option value="Date">Date</option>
            <option value="DNT">DNT</option>
            <option value="DPR">DPR</option>
            <option value="Early-Data">Early-Data</option>
            <option value="Expect">Expect</option>
            <option value="Forwarded">Forwarded</option>
            <option value="From">From</option>
            <option value="Host">Host</option>
            <option value="If-Match">If-Match</option>
            <option value="If-Modified-Since">If-Modified-Since</option>
            <option value="If-None-Match">If-None-Match</option>
            <option value="If-Range">If-Range</option>
            <option value="If-Unmodified-Since">If-Unmodified-Since</option>
            <option value="Keep-Alive">Keep-Alive</option>
            <option value="Max-Forwards">Max-Forwards</option>
            <option value="Origin">Origin</option>
            <option value="Pragma">Pragma</option>
            <option value="Proxy-Authorization">Proxy-Authorization</option>
            <option value="Range">Range</option>
            <option value="Referer">Referer</option>
            <option value="Save-Data">Save-Data</option>
            <option value="TE">TE</option>
            <option value="Trailer">Trailer</option>
            <option value="Transfer-Encoding">Transfer-Encoding</option>
            <option value="Upgrade">Upgrade</option>
            <option value="Upgrade-Insecure-Requests">Upgrade-Insecure-Requests</option>
            <option value="User-Agent">User-Agent</option>
            <option value="Vary">Vary</option>
            <option value="Via">OPTIONS</option>
            <option value="Viewport-Width">Viewport-Width</option>
            <option value="Warning">Warning</option>
            <option value="Width">Width</option>
            `;

            // HeaderEntry value

            document.getElementById('HeaderEntry01').innerHTML = headerlist
            document.getElementById('HeaderEntry02').innerHTML = headerlist
            document.getElementById('HeaderEntry03').innerHTML = headerlist

            document.getElementById('HeaderEntry01').value = 'Content-Type';
            document.getElementById('HeaderEntry02').value = 'Authorization';
}
// memo
//   crossOrigin: true,
//  dataType: "jsonp",

function loadJSON(data22,method,pageurl,he01,heval01,he02,heval02,he03,heval03) {

  const xhr = new XMLHttpRequest();

  var params = `${data22}`;
  var host  = (`${pageurl}`);
  var he01 = `${he01}`;
  var heval01 = (`${heval01}`);
  var he02 = `${he02}`;
  var heval02 = (`${heval02}`);
  var he03 = `${he03}`;
  var heval03 = (`${heval03}`);

  xhr.open(`${method}`, `${host}`);

  xhr.setRequestHeader(`${he01}`, `${heval01}`);
  xhr.setRequestHeader(`${he02}`, `${heval02}`);
  xhr.setRequestHeader(`${he03}`, `${heval03}`);

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
  var nameElement02 = document.getElementById('dataId01');



  for (var i = 0; i < 1; i++) {

    obj = JSON.parse(xhr);
    newname1 = nameElement02.value;

    var div = document.createElement('div');

    div.innerHTML = obj[`${newname1}`];

    document.getElementById('jsondata').value = `${xhr}`;
    document.getElementById('IncomingJson').value = `${xhr}`;

    mainContainer.appendChild(div);
  }
};
// Buttons
function jSettings04() {
  var nmet001 = document.getElementById('methodEntry');
  var newmethod = nmet001.value;
};

// Apply
function BPreview01() {
  document.getElementById('DisableB01').disabled = true;
  document.getElementById('DisableB02').disabled = false;
// HOST
  var name02 = document.getElementById('urlEntry');
  var jhost = name02.value;
  var pageurl = `Status: <span style='color:gray; font-weight: bold;'>n/a</span> <br> Host: ${jhost}`;
  document.getElementById('ShowMyHost').innerHTML = pageurl;

// URL
  var nurl001 = document.getElementById('urlEntry');
  var jhost = nurl001.value;
// METHOD
  var nmet001 = document.getElementById('methodEntry');
  var method = nmet001.value;

// HEADER handlers

//Header 1
if (document.getElementById('HeaderEntry01').value == 'novalue')  {
  console.log('header1: deactivated');
} else {
  var nhent01 = document.getElementById('HeaderEntry01');
  var he01 = nhent01.value;

  var nhaut01 = document.getElementById('authEntry01');
  var heval01 = nhaut01.value;
}

//Header 2
if (document.getElementById('HeaderEntry02').value == 'novalue')  {
  console.log('header2: deactivated');
} else {
  var nhent02 = document.getElementById('HeaderEntry02');
  var he02 = nhent02.value;

  var nhaut02 = document.getElementById('authEntry02');
  var heval02 = nhaut02.value;
}

//Header 3
if (document.getElementById('HeaderEntry02').value == 'novalue')  {
  console.log('header2: deactivated');
} else {
  var nhent03 = document.getElementById('HeaderEntry02');
  var he03 = nhent03.value;

  var nhaut03 = document.getElementById('authEntry02');
  var heval03 = nhaut03.value;
}

// Method get handler
if (document.getElementById('methodEntry').value == 'GET')  {
  console.log('GET: data=deactivated, value=deactivated');
// Header 1
  var nhent01 = document.getElementById('HeaderEntry01');
  var he01 = nhent01.value;
  var nhaut01 = document.getElementById('authEntry01');
  var heval01 = nhaut01.value;
// Header 2
  var nhent02 = document.getElementById('HeaderEntry02');
  var he02 = nhent02.value;
  var nhaut02 = document.getElementById('authEntry02');
  var heval02 = nhaut02.value;
// Header 3
  var nhent03 = document.getElementById('HeaderEntry03');
  var he03 = nhent03.value;
  var nhaut03 = document.getElementById('authEntry03');
  var heval03 = nhaut03.value;

// } else {

}

// DATA
  var dname01 = document.getElementById('dataId01');
  var vdataId01 = dname01.value;

// VALUE
  var vname01 = document.getElementById('valueId01');
  var vvalueId01 = vname01.value;

// Combine DATA + VALUE to json
  var combine = { [`${vdataId01}`] : `${vvalueId01}` };
  var data22 = JSON.stringify(combine);

  loadJSON(`${data22}`,`${method}`,`${jhost}`,`${he01}`,`${heval01}`,`${he02}`,`${heval02}`,`${he03}`,`${heval03}`);
};


function BClear01(elementID) {
  document.getElementById('DisableB01').disabled = false;
  document.getElementById('DisableB02').disabled = true;
  document.getElementById('jsondata').innerHTML = '';
  document.getElementById('IncomingJson').value = '';
};
function ReloadPage() {
  location.reload(true);
};


function reset() {
  // Host
  document.getElementById('urlEntry').value = `http://${location.hostname}:8888/json01`;
  // HeaderEntry02
  document.getElementById('HeaderEntry01').value = 'Content-Type';
  document.getElementById('HeaderEntry02').value = 'Authorization';
  document.getElementById('HeaderEntry03').value = 'novalue';
  // Auth
  document.getElementById('authEntry01').value = 'application/json';
  document.getElementById('authEntry02').value = 'Basic [YWRtaW46YWRtaW4=]';
  document.getElementById('authEntry03').value = '';
  // Method
  document.getElementById('methodEntry').value = 'POST';
  // DATA
  document.getElementById('valueEntry').value = 'data01';
};



// show data on page

const handleFormSubmit = event => {
  event.preventDefault();

  if (document.getElementById('methodEntry').value != 'GET')  {

    // DATA
      var dname011 = document.getElementById('dataId01');
      var vdataId011 = dname011.value;

    // VALUE
      var vname011 = document.getElementById('valueId01');
      var vvalueId011 = vname011.value;

    // Combine DATA + VALUE to json
      var combine1 = { [`${vdataId011}`] : `${vvalueId011}` };
      var data = JSON.stringify(combine1);

    // show in page

      const dataContainer = document.getElementsByClassName('results__display')[0];
      dataContainer.textContent = data;

      var base64data = btoa(data);
      const dataContainer2 = document.getElementsByClassName('results__display2')[0];
      dataContainer2.textContent = base64data;

  };

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

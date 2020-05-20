// set up stuff on page loadb
window.onload = reloadP()
function reloadP() {
  checkboxStatus = 'CheckOn';
  myCheck.checked = true;

  // HOST
  document.getElementById('ShowMyHost').innerHTML = `Status: <span style='color:gray; font-weight: bold;'>n/a</span> <br> Host: <span style='color:gray; font-weight: bold;'>n/a</span>`;
  document.getElementById('urlEntry').value = `http://${location.hostname}:8888/json01`;
  // Method
  document.getElementById('methodEntry').value = 'POST';
  // DATA
  document.getElementById('dataId01').value = 'data01';
  // VALUE
  document.getElementById('valueId01').value = '<iframe width="100%" height="400" src="https://www.youtube.com/embed/eMDQfSrpLlQ" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>';

  // encoder data IncomingJson
  document.getElementById('showJson01').readOnly = true;
  document.getElementById('showJsonbase01').readOnly = true;
  document.getElementById('IncomingJson').readOnly = true;


  window.addEventListener('DOMContentLoaded', (event) => {
      document.getElementById("resetbtn01").click();
  });


  if (chbox02.checked == true) {
    chbox02.checked = false;
  }

  if (myCheck.checked == false) {
    myCheck.checked = true;
  }

}

function loadJSON(data22,method,pageurl,he01,heval01,he02,heval02,he03,heval03,he04,heval04,he05,heval05,he06,heval06,he07,heval07,he08,heval08) {

  var xhr = new XMLHttpRequest();

  var params = `${data22}`;
  var host  = (`${pageurl}`);
  var he01 = `${he01}`;
  var heval01 = (`${heval01}`);
  var he02 = `${he02}`;
  var heval02 = (`${heval02}`);
  var he03 = `${he03}`;
  var heval03 = (`${heval03}`);
  var he04 = `${he04}`;
  var heval04 = (`${heval04}`);
  var he05 = `${he05}`;
  var heval05 = (`${heval05}`);
  var he06 = `${he06}`;
  var heval06 = (`${heval06}`);
  var he07 = `${he07}`;
  var heval07 = (`${heval07}`);
  var he08 = `${he08}`;
  var heval08 = (`${heval08}`);

  xhr.open(`${method}`, `${host}`, true);

  xhr.setRequestHeader(`${he01}`, `${heval01}`);
  xhr.setRequestHeader(`${he02}`, `${heval02}`);
  xhr.setRequestHeader(`${he03}`, `${heval03}`);
  xhr.setRequestHeader(`${he04}`, `${heval04}`);
  xhr.setRequestHeader(`${he05}`, `${heval05}`);
  xhr.setRequestHeader(`${he06}`, `${heval06}`);
  xhr.setRequestHeader(`${he07}`, `${heval07}`);
  xhr.setRequestHeader(`${he08}`, `${heval08}`);

  xhr.onreadystatechange = function() {
  xhr.timeout = 5000;

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

  if(xhr.readyState == 4 && xhr.status == 200) {

    appendData((xhr.responseText),'jsondata');
    var pageurl = `Status: <span style='color:green; font-weight: bold;'>ok</span> <br> Host: ${host}`;
    document.getElementById('ShowMyHost').innerHTML = pageurl;
  }

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
function BShow01() {
  strcv01 = document.getElementById('methodEntry').value
  document.getElementById('methodEntry').value = 'GET';
  BPreview01()
  document.getElementById('methodEntry').value = strcv01;
};

function BClear01(elementID) {
  document.getElementById('DisableB01').disabled = false;
  document.getElementById('DisableB02').disabled = true;
  document.getElementById('jsondata').innerHTML = '';
  document.getElementById('IncomingJson').value = '';
};
function reset() {

  document.getElementById('headerlist01').innerHTML = '';
  counter = 0

  if (  counter <= 1 )  {
    loadheaders01()
    loadheaders01()
  }

  // Host
  document.getElementById('urlEntry').value = `http://${location.hostname}:8888/json01`;
  // HeaderEntry02
  document.getElementById('HeaderEntry01').value = 'Content-Type';
  document.getElementById('HeaderEntry02').value = 'Authorization';
  // Auth
  document.getElementById('authEntry01').value = 'application/json';
  document.getElementById('authEntry02').value = 'Basic [YWRtaW46YWRtaW4=]';
  // Method
  document.getElementById('methodEntry').value = 'POST';
  // DATA
  document.getElementById('dataId01').value = 'data01';
  // encoder data
  document.getElementById('showJson01').value = ' ';
  document.getElementById('showJsonbase01').value = ' ';
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

  //Header 1
  if (counter >= 1)  {
    if (document.getElementById('HeaderEntry01').value == 'novalue')  {
      console.log('header1: deactivated');
    } else {
      console.log('header1: Active');
      var nhent01 = document.getElementById('HeaderEntry01');
      var he01 = nhent01.value;

      var nhaut01 = document.getElementById('authEntry01');
      var heval01 = nhaut01.value;
    }
  }

  //Header 2
  if (counter >= 2)  {
    if (document.getElementById('HeaderEntry02').value == 'novalue')  {
      console.log('header2: deactivated');
    } else {
      console.log('header2: Active');
      var nhent02 = document.getElementById('HeaderEntry02');
      var he02 = nhent02.value;

      var nhaut02 = document.getElementById('authEntry02');
      var heval02 = nhaut02.value;
    }
  }

  //Header 3
  if (counter >= 3)  {
    if (document.getElementById('HeaderEntry03').value == 'novalue')  {
      console.log('header3: deactivated');
    } else {
      console.log('header3: Active');
      var nhent03 = document.getElementById('HeaderEntry03');
      var he03 = nhent03.value;

      var nhaut03 = document.getElementById('authEntry03');
      var heval03 = nhaut03.value;
    }
  }

  //Header 4
  if (counter >= 4)  {
    if (document.getElementById('HeaderEntry04').value == 'novalue')  {
      console.log('header4: deactivated');
    } else {
      console.log('header4: Active');
      var nhent04 = document.getElementById('HeaderEntry04');
      var he04 = nhent04.value;

      var nhaut04 = document.getElementById('authEntry04');
      var heval04 = nhaut04.value;
    }
  }

  //Header 5
  if (counter >= 5)  {
    if (document.getElementById('HeaderEntry05').value == 'novalue')  {
      console.log('header5: deactivated');
    } else {
      console.log('header5: Active');
      var nhent05 = document.getElementById('HeaderEntry05');
      var he05 = nhent05.value;

      var nhaut05 = document.getElementById('authEntry05');
      var heval05 = nhaut05.value;
    }
  }

  //Header 6
  if (counter >= 6)  {
    if (document.getElementById('HeaderEntry06').value == 'novalue')  {
      console.log('header6: deactivated');
    } else {
      console.log('header6: Active');
      var nhent06 = document.getElementById('HeaderEntry06');
      var he06 = nhent06.value;

      var nhaut06 = document.getElementById('authEntry06');
      var heval06 = nhaut06.value;
    }
  }

  //Header 7
  if (counter >= 7)  {
    if (document.getElementById('HeaderEntry07').value == 'novalue')  {
      console.log('header7: deactivated');
    } else {
      console.log('header7: Active');
      var nhent07 = document.getElementById('HeaderEntry07');
      var he07 = nhent07.value;

      var nhaut07 = document.getElementById('authEntry07');
      var heval07 = nhaut07.value;
    }
  }

  //Header 8
  if (counter >= 8)  {
    if (document.getElementById('HeaderEntry08').value == 'novalue')  {
      console.log('header8: deactivated');
    } else {
      console.log('header8: Active');
      var nhent08 = document.getElementById('HeaderEntry08');
      var he08 = nhent08.value;

      var nhaut08 = document.getElementById('authEntry08');
      var heval08 = nhaut08.value;
    }
  }

// handler for data

if (document.getElementById("chbox02").checked == false){
  if (document.getElementById('methodEntry').value != 'GET')  {
    // DATA
    var dname01 = document.getElementById('dataId01');
    var vdataId01 = dname01.value;
    // VALUE
    var vname01 = document.getElementById('valueId01');
    var vvalueId01 = vname01.value;
    // Combine DATA + VALUE to json
    var combine = { [`${vdataId01}`] : `${vvalueId01}` };
    var data22 = JSON.stringify(combine);
  }
} else {
  if (document.getElementById('methodEntry').value != 'GET')  {
      // DATA
      var dname01 = document.getElementById('valueId02');
      var vdataId01 = dname01.value;
      // DATA to json
      var data22 = vdataId01;
  }
};

  loadJSON(`${data22}`,`${method}`,`${jhost}`,`${he01}`,`${heval01}`,`${he02}`,`${heval02}`,`${he03}`,`${heval03}`);

};

// show data on page
const handleFormSubmit = event => {
  event.preventDefault();

  // show on page
  if (document.getElementById('methodEntry').value != 'GET')  {

    // DATA
      var dname011 = document.getElementById('dataId01');
      var vdataId011 = dname011.value;

    // VALUE
      var vname011 = document.getElementById('valueId01');
      var vvalueId011 = vname011.value;

    // Combine DATA + VALUE
      var combine1 = { [`${vdataId011}`] : `${vvalueId011}` };

    // Json VALUE
      var dataj01 = JSON.stringify(combine1);
    // base64 + VALUE
      var databjdata = btoa(dataj01);

    // show in page
      document.getElementById('showJson01').value = dataj01;
      document.getElementById('showJsonbase01').value = databjdata;
  }


  if (checkboxStatus == 'CheckOn') {
    BPreview01()
  };
  if(document.getElementById('DisableB01').disabled && document.getElementById('DisableB02').disabled){
    document.getElementById('DisableB01').disabled = false;
  };
};

var counter = 0;
var maximum = 8;

function loadheaders01() {

  var node = document.createElement("div");

  var dyncontent = document.createElement('div');
  dyncontent.innerHTML = `

  header `+(counter+1)+` <select id="HeaderEntry0`+(counter+1)+`"value='Authorization'

          <option value="novalue">---</option>
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
          >
          " + "
          <br><input id="authEntry0`+(counter+1)+`" class='jsonvalue' type='text' value=''>`;

  if (counter == maximum)  {
    console.log("maximum reached");
	} else {
 	  node.appendChild(dyncontent);
 	  document.getElementById("headerlist01").appendChild(node);

 	  counter++;

  }

}


function jsonbst01() {
  if (chbox02.checked == true) {
    chbox02.checked = true

    document.getElementById('jsonbstyle01').innerHTML = `
      <div class='inputbox'>
        enter json
        <textarea id="valueId02" class='inputbox01' type='text' ></textarea>
        <br>
      </div>
    `;

    document.getElementById('advrend01').innerHTML = `
      select object to render (currently cannot render object inside an object thus giving you the "[object Object]")
      <input id="dataId01" class='jsonvalue' type="text" value='data01'>
    `

    document.getElementById('advrend02').innerHTML = '<button id="button" class="resetbutton" onclick="reset()">reset</button> <button id="button" class="resetbutton" onclick="loadheaders01()">add hdr</button>'


  } if (chbox02.checked == false) {
    chbox02.checked = false
    document.getElementById('jsonbstyle01').innerHTML = `
    data
    <input id="dataId01" class='jsonvalue' type="text" value='data01'>
      <div class='inputbox'>
        value
        <textarea id="valueId01" class='inputbox01' type='text' ></textarea>
        <br>
      </div>
    `;

    document.getElementById('advrend01').innerHTML = ''
    document.getElementById('advrend02').innerHTML = '<button id="button" class="resetbutton" onclick="reset()">reset</button>'

  }

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

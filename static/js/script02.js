// set up stuff on page loadb
window.onload = reloadP()
function reloadP() {
  document.getElementById('DisableB01').disabled = true;
  document.getElementById('DisableB02').disabled = true;

  chbox02.checked = false;

  // HOST
  document.getElementById('ShowMyHost').innerHTML = `<label>Status: <span style='color:gray; font-weight: bold;'>n/a</span><br>Host: <span style='color:gray; font-weight: bold;'>n/a</span></label>`;

  document.getElementById('urlEntry').value = '';
  // Method
  document.getElementById('methodEntry').value = 'GET';
  // DATA
  document.getElementById('dataId01').value = '';

  // VALUE
  document.getElementById('valueId01').value = '';

  window.addEventListener('DOMContentLoaded', (event) => {
    start01()
  });

}

function loadJSON(data22,method,pageurl,he01,heval01,he02,heval02,he03,heval03,he04,heval04,he05,heval05,he06,heval06,he07,heval07,he08,heval08,he09,heval09) {

  var xhr = new XMLHttpRequest();

  var params = `${data22}`;
  var method  = (`${method}`);
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
  var he09 = `${he09}`;
  var heval09 = (`${heval09}`);

  xhr.open(`${method}`, `${host}`, true);

  xhr.setRequestHeader(`${he01}`, `${heval01}`);
  xhr.setRequestHeader(`${he02}`, `${heval02}`);
  xhr.setRequestHeader(`${he03}`, `${heval03}`);
  xhr.setRequestHeader(`${he04}`, `${heval04}`);
  xhr.setRequestHeader(`${he05}`, `${heval05}`);
  xhr.setRequestHeader(`${he06}`, `${heval06}`);
  xhr.setRequestHeader(`${he07}`, `${heval07}`);
  xhr.setRequestHeader(`${he08}`, `${heval08}`);
  xhr.setRequestHeader(`${he09}`, `${heval09}`);

  xhr.onreadystatechange = function() {
  xhr.timeout = 5000;

  if(xhr.readyState == 4 && xhr.status == 200) {
    appendData((xhr.responseText),'jsondata');
    var pageurl = `<label>Status: <span style='color:green; font-weight: bold;'>ok</span> <br> Host: ${host}</label>`;
    document.getElementById('ShowMyHost').innerHTML = pageurl;
  } else if (xhr.readyState == 4 && xhr.status != 200) {
      var pageurl = `<label>Status: <span style='color:red; font-weight: bold;'>${xhr.status}</span> <br> Host: ${host}</label>`;
      document.getElementById('ShowMyHost').innerHTML = pageurl;
    }
  };
  xhr.ontimeout = function (e) {
    var pageurl = `<label>Status: <span style='color:red; font-weight: bold;'>timeout</span> <br> Host: ${host}</label>`;
    document.getElementById('ShowMyHost').innerHTML = pageurl;
  };
  xhr.send(params);
  };

  function appendData(xhr,eID,nameElement02) {
    var mainContainer = document.getElementById(`${eID}`);
    var nameElement02 = document.getElementById('dataId01');

    if(xhr.readyState == 4 && xhr.status == 200) {
      appendData((xhr.responseText),'jsondata');
      var pageurl = `<label>Status: <span style='color:green; font-weight: bold;'>ok</span> <br> Host: ${host}</label>`;
      document.getElementById('ShowMyHost').innerHTML = pageurl;
    }

    for (var i = 0; i < 1; i++) {

        obj = JSON.parse(xhr);
        document.getElementById('IncomingJson').value = `${xhr}`;

        if (objcounter == 1) {
          var newname1 = document.getElementById('dataId01').value;

          var div = document.createElement('div');
          div.innerHTML = obj[`${newname1}`] + "<hr>";
          mainContainer.appendChild(div);
        }

        if (objcounter == 2) {
          var newname1 = document.getElementById('dataId01').value;
          var newname2 = document.getElementById('dataId02').value;

          var div = document.createElement('div');

          div.innerHTML = obj[`${newname1}`][`${newname2}`] + "<hr>";
          mainContainer.appendChild(div);
        }

        if (objcounter == 3) {
          var newname1 = document.getElementById('dataId01').value;
          var newname2 = document.getElementById('dataId02').value;
          var newname3 = document.getElementById('dataId03').value;

          var div = document.createElement('div');

          div.innerHTML = obj[`${newname1}`][`${newname2}`][`${newname3}`] + "<hr>";  //
          mainContainer.appendChild(div);
        }

        if (objcounter == 4) {
          var newname1 = document.getElementById('dataId01').value;
          var newname2 = document.getElementById('dataId02').value;
          var newname3 = document.getElementById('dataId03').value;
          var newname4 = document.getElementById('dataId04').value;

          var div = document.createElement('div');

          div.innerHTML = obj[`${newname1}`][`${newname2}`][`${newname3}`][`${newname4}`] + "<hr>";  //
          mainContainer.appendChild(div);
        }

        if (objcounter == 5) {
          var newname1 = document.getElementById('dataId01').value;
          var newname2 = document.getElementById('dataId02').value;
          var newname3 = document.getElementById('dataId03').value;
          var newname4 = document.getElementById('dataId04').value;
          var newname5 = document.getElementById('dataId05').value;

          var div = document.createElement('div');

          div.innerHTML = obj[`${newname1}`][`${newname2}`][`${newname3}`][`${newname4}`][`${newname5}`] + "<hr>";  //
          mainContainer.appendChild(div);
        }

        if (objcounter == 6) {
          var newname1 = document.getElementById('dataId01').value;
          var newname2 = document.getElementById('dataId02').value;
          var newname3 = document.getElementById('dataId03').value;
          var newname4 = document.getElementById('dataId04').value;
          var newname5 = document.getElementById('dataId05').value;
          var newname6 = document.getElementById('dataId06').value;

          var div = document.createElement('div');

          div.innerHTML = obj[`${newname1}`][`${newname2}`][`${newname3}`][`${newname4}`][`${newname5}`][`${newname6}`] + "<hr>";  //
          mainContainer.appendChild(div);
        }

        if (objcounter == 7) {
          var newname1 = document.getElementById('dataId01').value;
          var newname2 = document.getElementById('dataId02').value;
          var newname3 = document.getElementById('dataId03').value;
          var newname4 = document.getElementById('dataId04').value;
          var newname5 = document.getElementById('dataId05').value;
          var newname6 = document.getElementById('dataId06').value;
          var newname7 = document.getElementById('dataId07').value;

          var div = document.createElement('div');

          div.innerHTML = obj[`${newname1}`][`${newname2}`][`${newname3}`][`${newname4}`][`${newname5}`][`${newname6}`][`${newname7}`] + "<hr>";  //
          mainContainer.appendChild(div);
        }

        if (objcounter == 8) {
          var newname1 = document.getElementById('dataId01').value;
          var newname2 = document.getElementById('dataId02').value;
          var newname3 = document.getElementById('dataId03').value;
          var newname4 = document.getElementById('dataId04').value;
          var newname5 = document.getElementById('dataId05').value;
          var newname6 = document.getElementById('dataId06').value;
          var newname7 = document.getElementById('dataId07').value;
          var newname8 = document.getElementById('dataId08').value;

          var div = document.createElement('div');

          div.innerHTML = obj[`${newname1}`][`${newname2}`][`${newname3}`][`${newname4}`][`${newname5}`][`${newname6}`][`${newname7}`][`${newname8}`] + "<hr>";  //
          mainContainer.appendChild(div);
        }

        if (objcounter == 9) {
          var newname1 = document.getElementById('dataId01').value;
          var newname2 = document.getElementById('dataId02').value;
          var newname3 = document.getElementById('dataId03').value;
          var newname4 = document.getElementById('dataId04').value;
          var newname5 = document.getElementById('dataId05').value;
          var newname6 = document.getElementById('dataId06').value;
          var newname7 = document.getElementById('dataId07').value;
          var newname8 = document.getElementById('dataId08').value;
          var newname9 = document.getElementById('dataId09').value;

          var div = document.createElement('div');

          div.innerHTML = obj[`${newname1}`][`${newname2}`][`${newname3}`][`${newname4}`][`${newname5}`][`${newname6}`][`${newname7}`][`${newname8}`][`${newname9}`] + "<hr>";  //
          mainContainer.appendChild(div);
        }
      }

  };


// Buttons

function start01() {
  document.getElementById('headerlist01').innerHTML = '';
  counter = 0

  if (counter <= 1)  {
    loadheaders01()
    loadheaders01()
  }

};

function BShow01() {
  if (objcounter == 1) {
    cjsonformat01 = document.getElementById('dataId01').value

    document.getElementById('cjsonformat').value = "(obj["+`${cjsonformat01}`+"])";
  }

  if (objcounter == 2) {
    cjsonformat01 = document.getElementById('dataId01').value
    cjsonformat02 = document.getElementById('dataId02').value

    document.getElementById('cjsonformat').value = "(obj["+`${cjsonformat01}`+"]"+"["+`${cjsonformat02}`+"])";
  }

  if (objcounter == 3) {
    cjsonformat01 = document.getElementById('dataId01').value
    cjsonformat02 = document.getElementById('dataId02').value
    cjsonformat03 = document.getElementById('dataId03').value

    document.getElementById('cjsonformat').value = "(obj["+`${cjsonformat01}`+"]"+"["+`${cjsonformat02}`+"]"+"["+`${cjsonformat03}`+"])";
  }

  if (objcounter == 4) {
    cjsonformat01 = document.getElementById('dataId01').value
    cjsonformat02 = document.getElementById('dataId02').value
    cjsonformat03 = document.getElementById('dataId03').value
    cjsonformat04 = document.getElementById('dataId04').value

    document.getElementById('cjsonformat').value = "(obj["+`${cjsonformat01}`+"]"+"["+`${cjsonformat02}`+"]"+"["+`${cjsonformat03}`+"]"+"["+`${cjsonformat04}`+"])";
  }

  if (objcounter == 5) {
    cjsonformat01 = document.getElementById('dataId01').value
    cjsonformat02 = document.getElementById('dataId02').value
    cjsonformat03 = document.getElementById('dataId03').value
    cjsonformat04 = document.getElementById('dataId04').value
    cjsonformat05 = document.getElementById('dataId05').value

    document.getElementById('cjsonformat').value = "(obj["+`${cjsonformat01}`+"]"+"["+`${cjsonformat02}`+"]"+"["+`${cjsonformat03}`+"]"+"["+`${cjsonformat04}`+"]"+"["+`${cjsonformat05}`+"])";
  }

  if (objcounter == 6) {
    cjsonformat01 = document.getElementById('dataId01').value
    cjsonformat02 = document.getElementById('dataId02').value
    cjsonformat03 = document.getElementById('dataId03').value
    cjsonformat04 = document.getElementById('dataId04').value
    cjsonformat05 = document.getElementById('dataId05').value
    cjsonformat06 = document.getElementById('dataId06').value

    document.getElementById('cjsonformat').value = "(obj["+`${cjsonformat01}`+"]"+"["+`${cjsonformat02}`+"]"+"["+`${cjsonformat03}`+"]"+"["+`${cjsonformat04}`+"]"+"["+`${cjsonformat05}`+"]"+"["+`${cjsonformat06}`+"])";
  }

  if (objcounter == 7) {
    cjsonformat01 = document.getElementById('dataId01').value
    cjsonformat02 = document.getElementById('dataId02').value
    cjsonformat03 = document.getElementById('dataId03').value
    cjsonformat04 = document.getElementById('dataId04').value
    cjsonformat05 = document.getElementById('dataId05').value
    cjsonformat06 = document.getElementById('dataId06').value
    cjsonformat07 = document.getElementById('dataId07').value

    document.getElementById('cjsonformat').value = "(obj["+`${cjsonformat01}`+"]"+"["+`${cjsonformat02}`+"]"+"["+`${cjsonformat03}`+"]"+"["+`${cjsonformat04}`+"]"+"["+`${cjsonformat05}`+"]"+"["+`${cjsonformat06}`+"]"+"["+`${cjsonformat07}`+"])";
  }

  if (objcounter == 8) {
    cjsonformat01 = document.getElementById('dataId01').value
    cjsonformat02 = document.getElementById('dataId02').value
    cjsonformat03 = document.getElementById('dataId03').value
    cjsonformat04 = document.getElementById('dataId04').value
    cjsonformat05 = document.getElementById('dataId05').value
    cjsonformat06 = document.getElementById('dataId06').value
    cjsonformat07 = document.getElementById('dataId07').value
    cjsonformat08 = document.getElementById('dataId08').value

    document.getElementById('cjsonformat').value = "(obj["+`${cjsonformat01}`+"]"+"["+`${cjsonformat02}`+"]"+"["+`${cjsonformat03}`+"]"+"["+`${cjsonformat04}`+"]"+"["+`${cjsonformat05}`+"]"+"["+`${cjsonformat06}`+"]"+"["+`${cjsonformat07}`+"]"+"["+`${cjsonformat08}`+"])";
  }

  if (objcounter == 9) {
    cjsonformat01 = document.getElementById('dataId01').value
    cjsonformat02 = document.getElementById('dataId02').value
    cjsonformat03 = document.getElementById('dataId03').value
    cjsonformat04 = document.getElementById('dataId04').value
    cjsonformat05 = document.getElementById('dataId05').value
    cjsonformat06 = document.getElementById('dataId06').value
    cjsonformat07 = document.getElementById('dataId07').value
    cjsonformat08 = document.getElementById('dataId08').value
    cjsonformat09 = document.getElementById('dataId09').value

    document.getElementById('cjsonformat').value = "(obj["+`${cjsonformat01}`+"]"+"["+`${cjsonformat02}`+"]"+"["+`${cjsonformat03}`+"]"+"["+`${cjsonformat04}`+"]"+"["+`${cjsonformat05}`+"]"+"["+`${cjsonformat06}`+"]"+"["+`${cjsonformat07}`+"]"+"["+`${cjsonformat08}`+"]"+"["+`${cjsonformat09}`+"])";
  }

  strcv01 = document.getElementById('methodEntry').value
  document.getElementById('methodEntry').value = 'GET';

  BPreview01()

  document.getElementById('methodEntry').value = strcv01;
};

function BClear01(elementID) {
  document.getElementById('DisableB02').disabled = true;
  document.getElementById('jsondata').innerHTML = '';
};

function testv() {
  // Method
  document.getElementById('methodEntry').value = 'POST';
  // DATA
  document.getElementById('dataId01').value = 'data01';
  // VALUE
  document.getElementById('valueId01').value = '<iframe width="100%" height="400" src="https://www.youtube.com/embed/Xb5E82BEidQ" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>';
};

function reset() {
  document.getElementById('DisableB01').disabled = false;

  document.getElementById('headerlist01').innerHTML = '';
  counter = 0

  if (chbox02.checked == false) {
    document.getElementById('dataId01').value = 'data01';
  }

  if (  counter <= 1 )  {
    loadheaders01()
    loadheaders01()
  }

  if (  counter == 2 )  {
    // Host
    document.getElementById('urlEntry').value = `http://${location.hostname}:8888/json01`;
    // HeaderEntry02
    document.getElementById('HeaderEntry01').value = 'Content-Type';
    document.getElementById('HeaderEntry02').value = 'Authorization';
    // Auth
    document.getElementById('authEntry01').value = 'application/json';
    document.getElementById('authEntry02').value = 'Basic [YWRtaW46YWRtaW4=]';
    // Method
    document.getElementById('methodEntry').value = 'GET';
    // encoder data
    document.getElementById('showJson01').value = ' ';
    document.getElementById('showJsonbase01').value = ' ';
  }

};

// Apply
function BPreview01() {
  document.getElementById('DisableB02').disabled = false;
// HOST
  var jhost = document.getElementById('urlEntry').value;
  var pageurl = `<label>Status: <span style='color:gray; font-weight: bold;'>n/a</span> <br> Host: ${jhost}</label>`;
  document.getElementById('ShowMyHost').innerHTML = pageurl;
// URL
  var jhost = document.getElementById('urlEntry').value;
// METHOD
  var method = document.getElementById('methodEntry').value;

  //Header 1
  if (counter >= 1)  {
    if (document.getElementById('HeaderEntry01').value == 'novalue')  {
      console.log('header1: deactivated');
    } else {
      var he01 = document.getElementById('HeaderEntry01').value;

      var heval01 = document.getElementById('authEntry01').value;
    }
  }

  //Header 2
  if (counter >= 2)  {
    if (document.getElementById('HeaderEntry02').value == 'novalue')  {
      console.log('header2: deactivated');
    } else {
      var he02 = document.getElementById('HeaderEntry02').value;
      var heval02 = document.getElementById('authEntry02').value;
    }
  }

  //Header 3
  if (counter >= 3)  {
    if (document.getElementById('HeaderEntry03').value == 'novalue')  {
      console.log('header3: deactivated');
    } else {
      var he03 = document.getElementById('HeaderEntry03').value;
      var heval03 = document.getElementById('authEntry03').value;
    }
  }

  //Header 4
  if (counter >= 4)  {
    if (document.getElementById('HeaderEntry04').value == 'novalue')  {
      console.log('header4: deactivated');
    } else {
      var he04 = document.getElementById('HeaderEntry04').value;
      var heval04 = document.getElementById('authEntry04').value;
    }
  }

  //Header 5
  if (counter >= 5)  {
    if (document.getElementById('HeaderEntry05').value == 'novalue')  {
      console.log('header5: deactivated');
    } else {
      var he05 = document.getElementById('HeaderEntry05').value;
      var heval05 = document.getElementById('authEntry05').value;
    }
  }

  //Header 6
  if (counter >= 6)  {
    if (document.getElementById('HeaderEntry06').value == 'novalue')  {
      console.log('header6: deactivated');
    } else {
      var he06 = document.getElementById('HeaderEntry06').value;
      var heval06 = document.getElementById('authEntry06').value;
    }
  }

  //Header 7
  if (counter >= 7)  {
    if (document.getElementById('HeaderEntry07').value == 'novalue')  {
      console.log('header7: deactivated');
    } else {
      var he07 = document.getElementById('HeaderEntry07').value;
      var heval07 = document.getElementById('authEntry07').value;
    }
  }

  //Header 8
  if (counter >= 8)  {
    if (document.getElementById('HeaderEntry08').value == 'novalue')  {
      console.log('header8: deactivated');
    } else {
      var he08 = document.getElementById('HeaderEntry08').value;
      var heval08 = document.getElementById('authEntry08').value;
    }
  }

  //Header 9
  if (counter >= 9)  {
    if (document.getElementById('HeaderEntry09').value == 'novalue')  {
      console.log('header9: deactivated');
    } else {
      var he09 = document.getElementById('HeaderEntry09').value;
      var heval09 = document.getElementById('authEntry09').value;
    }
  }

// handler for data
  if (document.getElementById("chbox02").checked == false){
    if (document.getElementById('methodEntry').value != 'GET')  {
      // DATA
      var vdataId01 = document.getElementById('dataId01').value;
      // VALUE
      var vvalueId01 = document.getElementById('valueId01').value;
      // Combine DATA + VALUE to json
      var combine = { [`${vdataId01}`] : `${vvalueId01}` };
      var data22 = JSON.stringify(combine);
    }
  } else {
    if (document.getElementById('methodEntry').value != 'GET')  {
      // DATA
      var vdataId01 = document.getElementById('valueId02').value;
      // DATA to json
      var data22 = vdataId01;
    }
  }

  loadJSON(`${data22}`,`${method}`,`${jhost}`,`${he01}`,`${heval01}`,`${he02}`,`${heval02}`,`${he03}`,`${heval03}`,`${he04}`,`${heval04}`,`${he05}`,`${heval05}`,`${he06}`,`${heval06}`,`${he07}`,`${heval07}`,`${he08}`,`${heval08}`,`${he09}`,`${heval09}`);

};

// show data on page
const handleFormSubmit = event => {
  event.preventDefault();
  // show on page
    if (chbox02.checked == false & document.getElementById('methodEntry').value != 'GET')  {
      // DATA
      var vdataId011 = document.getElementById('dataId01').value;
      // VALUE
      var vvalueId011 = document.getElementById('valueId01').value;
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

    // show on page
    if (chbox02.checked == true & document.getElementById('methodEntry').value != 'GET')  {
      // Json VALUE
      var dataj01 = document.getElementById('valueId02');
      // base64 + VALUE
      var databjdata = btoa(dataj01);
      // show in page
      document.getElementById('showJson01').value = dataj01;
      document.getElementById('showJsonbase01').value = databjdata;
    }

    BPreview01()

};


var objcounter = 1;
var objmax = 9;

function loadobjects01() {

  var node01 = document.createElement('div');
  node01.innerHTML = `<input id="dataId0`+(objcounter+1)+`" class='jsonvalue' type="text" value=''>`;

  if (objcounter == objmax)  {
    console.log("objmax reached");
	} else {
 	  document.getElementById("advrend01").appendChild(node01);
 	  objcounter++;
  }

};


function removeobjects01(elementId) {

  if (objcounter > 1) {
    var ename01 = "dataId0" + `${objcounter}`;
    console.log (ename01);

    var element = document.getElementById(`${ename01}`);
    element.parentNode.removeChild(element);
    objcounter--;
  }

};

var counter = 0;
var maximum = 9;

function loadheaders01() {

  var node = document.createElement("div");

  var dyncontent = document.createElement("div");
  dyncontent.innerHTML = `
    <label for="HeaderEntry0`+(counter+1)+`" id="lbHeaderEntry0`+(counter+1)+`" >header `+(counter+1)+`</label>
    <select class="inputstyle" id="HeaderEntry0`+(counter+1)+`" value="novalue">
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
    </select>
    <input id="authEntry0`+(counter+1)+`" class='jsonvalue' type='text' value=''>`;

  if (counter == maximum)  {
    console.log("maximum reached");
	} else {
 	  node.appendChild(dyncontent);
 	  document.getElementById("headerlist01").appendChild(node);
 	  counter++;
  }

};

function removeheaders01(elementId) {

  if (counter > 2) {
    var lhename01 = "lbHeaderEntry0" + `${counter}`;
    var element = document.getElementById(`${lhename01}`);
    element.parentNode.removeChild(element);
// ---
    var hename01 = "HeaderEntry0" + `${counter}`;
    var element = document.getElementById(`${hename01}`);
    element.parentNode.removeChild(element);
// ---
    var hename02 = "authEntry0" + `${counter}`;
    var element = document.getElementById(`${hename02}`);
    element.parentNode.removeChild(element);
    counter--;
  }

};

function jsonbst01() {
  if (chbox02.checked == true) {

    document.getElementById('jsonbstyle01').innerHTML = `
      <div class='inputbox'>
      <label for="valueId02">enter json</label>
      <textarea id="valueId02" class='inputboxx01' type='text' ></textarea>
      <br>
      </div>`;

    document.getElementById('advrend01').innerHTML = `
      <button id="button" class="resetbutton" onclick="removeobjects01()">nested-obj -</button>
      <button id="button" class="resetbutton" onclick="loadobjects01()">nested-obj +</button>
      <br>
      <label for="dataId01">obj to render</label>
      <input id="dataId01" class='jsonvalue' type="text">

      <label for="IncomingJson">incoming Json</label>
      <textarea id="IncomingJson" class='result01' type='text' readonly></textarea>
      <label for="cjsonformat">rendered obj</label>
      <input class='inputstyle02' id="cjsonformat" type='text' readonly></input>`;
    document.getElementById('advrend02').innerHTML = '<button id="button" class="testvb" onclick="reset()">reset & defaults</button> <button id="button" class="resetbutton" onclick="removeheaders01()">header -</button> <button id="button" class="resetbutton" onclick="loadheaders01()">header +</button>';


  } if (chbox02.checked == false) {
    objcounter = 1;
    document.getElementById('jsonbstyle01').innerHTML = `
      <label for="dataId01">data</label>
      <input id="dataId01" class='jsonvalue' type="text" value='data01'>
      <div class='inputbox'>
      <label for="valueId01">value</label>
      <textarea id="valueId01" class='inputbox01' type='text' ></textarea>
      <br>
      </div>`;

    document.getElementById('advrend01').innerHTML = `
      <br>
      <label for="IncomingJson">incoming Json</label>
      <textarea id="IncomingJson" class='result01' type='text' readonly></textarea>`;

    document.getElementById('advrend02').innerHTML = '<button id="button" class="testvb" onclick="reset()">defaults</button> <button id="button" class="testvb" onclick="testv()">sample value</button>';
  }

};

// EventListener('submit'
const form = document.getElementsByClassName('contact-form')[0];
form.addEventListener('submit', handleFormSubmit);

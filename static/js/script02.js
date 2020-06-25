// set up stuff on page loadb
window.onload = reloadP()
function reloadP() {
  document.getElementById('DisableB01').disabled = true;
  document.getElementById('DisableB02').disabled = true;

  chbox02.checked = true;
  chbox03.checked = false;

  var jdatac = 0
  // HOST
  document.getElementById('ShowMyHost').innerHTML = `<label>Status: <span style='color:gray; font-weight: bold;'>n/a</span><br>Host: <span style='color:gray; font-weight: bold;'>n/a</span></label>`;

  document.getElementById('urlEntry').value = '';
  // Method
  document.getElementById('methodEntry').value = 'GET';


  window.addEventListener('DOMContentLoaded', (event) => {
    start01()

  });

}
var jdatac = 0
var vcjsonformat ='null'

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

  if (counter == 1)  {
    xhr.setRequestHeader(`${he01}`, `${heval01}`);
  }

  if (counter == 2)  {
    xhr.setRequestHeader(`${he01}`, `${heval01}`);
    xhr.setRequestHeader(`${he02}`, `${heval02}`);
  }

  if (counter == 3)  {
    xhr.setRequestHeader(`${he01}`, `${heval01}`);
    xhr.setRequestHeader(`${he02}`, `${heval02}`);
    xhr.setRequestHeader(`${he03}`, `${heval03}`);
  }

  if (counter == 4)  {
    xhr.setRequestHeader(`${he01}`, `${heval01}`);
    xhr.setRequestHeader(`${he02}`, `${heval02}`);
    xhr.setRequestHeader(`${he03}`, `${heval03}`);
    xhr.setRequestHeader(`${he04}`, `${heval04}`);
  }

  if (counter == 5)  {
    xhr.setRequestHeader(`${he01}`, `${heval01}`);
    xhr.setRequestHeader(`${he02}`, `${heval02}`);
    xhr.setRequestHeader(`${he03}`, `${heval03}`);
    xhr.setRequestHeader(`${he04}`, `${heval04}`);
    xhr.setRequestHeader(`${he05}`, `${heval05}`);
  }


  if (counter == 6)  {
    xhr.setRequestHeader(`${he01}`, `${heval01}`);
    xhr.setRequestHeader(`${he02}`, `${heval02}`);
    xhr.setRequestHeader(`${he03}`, `${heval03}`);
    xhr.setRequestHeader(`${he04}`, `${heval04}`);
    xhr.setRequestHeader(`${he05}`, `${heval05}`);
    xhr.setRequestHeader(`${he06}`, `${heval06}`);
  }


  if (counter == 7)  {
    xhr.setRequestHeader(`${he01}`, `${heval01}`);
    xhr.setRequestHeader(`${he02}`, `${heval02}`);
    xhr.setRequestHeader(`${he03}`, `${heval03}`);
    xhr.setRequestHeader(`${he04}`, `${heval04}`);
    xhr.setRequestHeader(`${he05}`, `${heval05}`);
    xhr.setRequestHeader(`${he06}`, `${heval06}`);
    xhr.setRequestHeader(`${he07}`, `${heval07}`);
  }


  if (counter == 8)  {
    xhr.setRequestHeader(`${he01}`, `${heval01}`);
    xhr.setRequestHeader(`${he02}`, `${heval02}`);
    xhr.setRequestHeader(`${he03}`, `${heval03}`);
    xhr.setRequestHeader(`${he04}`, `${heval04}`);
    xhr.setRequestHeader(`${he05}`, `${heval05}`);
    xhr.setRequestHeader(`${he06}`, `${heval06}`);
    xhr.setRequestHeader(`${he07}`, `${heval07}`);
    xhr.setRequestHeader(`${he08}`, `${heval08}`);
  }


  if (counter == 9)  {
    xhr.setRequestHeader(`${he01}`, `${heval01}`);
    xhr.setRequestHeader(`${he02}`, `${heval02}`);
    xhr.setRequestHeader(`${he03}`, `${heval03}`);
    xhr.setRequestHeader(`${he04}`, `${heval04}`);
    xhr.setRequestHeader(`${he05}`, `${heval05}`);
    xhr.setRequestHeader(`${he06}`, `${heval06}`);
    xhr.setRequestHeader(`${he07}`, `${heval07}`);
    xhr.setRequestHeader(`${he08}`, `${heval08}`);
    xhr.setRequestHeader(`${he09}`, `${heval09}`);
  }




  xhr.onreadystatechange = function() {
  xhr.timeout = 5000;

  if(xhr.readyState == 4 && xhr.status == 200) {
    appendData((xhr.responseText),'jsondata');
    var pageurl = `<label>Status: <span style='color:green; font-weight: bold;'>ok</span> <br> Host: ${host}</label>`;
    document.getElementById('ShowMyHost').innerHTML = pageurl;
  } else if (xhr.readyState == 4 && xhr.status != 200) {
      var pageurl = `<label>Status: <span style='color:red; font-weight: bold;'>${xhr.status}</span> <br> Host: ${host}</label>`;
      document.getElementById('ShowMyHost').innerHTML = pageurl;
      document.getElementById('IncomingJson').value = xhr.responseText;
    }
  };
  xhr.ontimeout = function (e) {
    document.getElementById('ShowMyHost').innerHTML = `<label>Status: <span style='color:red; font-weight: bold;'>timeout</span> <br> Host: ${host}</label>`;
  };
  xhr.send(params);
  };

  function appendData(xhr,eID,nameElement02) {
    var mainContainer = document.getElementById(`${eID}`);
    var nameElement02 = document.getElementById('dataId01');

    if(xhr.readyState == 4 && xhr.status == 200) {
      appendData((xhr.responseText),'jsondata');
      document.getElementById('ShowMyHost').innerHTML =  `<label>Status: <span style='color:green; font-weight: bold;'>ok</span> <br> Host: ${host}</label>`;
    }

    for (var i = 0; i < 1; i++) {

        htmldata01 = '<hr><label>'+(vcjsonformat)+'</label><button id=jbdataId0'+(jdatac+1)+' class="jsonbtn01" onclick="rmjsond()">X</button><hr><br>';

        obj = JSON.parse(xhr);
        document.getElementById('IncomingJson').value = `${xhr}`;

        if (objcounter == 1) {
          var newname1 = document.getElementById('dataId01').value;

          if (document.getElementById('methodEntry').value == 'GET') {

          var a = document.createElement('a');
          a.setAttribute('id', 'jdataId0'+(jdatac+1)+'');
          a.setAttribute('class', 'forcsshover');

          a.innerHTML = htmldata01+obj[`${newname1}`];
          document.getElementById('methodEntry').value = strcv01;


          mainContainer.appendChild(a);

          jdatac++;
          }
        }

        if (objcounter == 2) {
          var newname1 = document.getElementById('dataId01').value;
          var newname2 = document.getElementById('dataId02').value;

          if (document.getElementById('methodEntry').value == 'GET') {

          var a = document.createElement('a');
          a.setAttribute('id', 'jdataId0'+(jdatac+1)+'');
          a.setAttribute('class', 'forcsshover');

          a.innerHTML = htmldata01+obj[`${newname1}`][`${newname2}`];
          document.getElementById('methodEntry').value = strcv01;


          mainContainer.appendChild(a);

          jdatac++;
          }
        }

        if (objcounter == 3) {
          var newname1 = document.getElementById('dataId01').value;
          var newname2 = document.getElementById('dataId02').value;
          var newname3 = document.getElementById('dataId03').value;

          if (document.getElementById('methodEntry').value == 'GET') {

          var a = document.createElement('a');
          a.setAttribute('id', 'jdataId0'+(jdatac+1)+'');
          a.setAttribute('class', 'forcsshover');

          a.innerHTML = htmldata01+obj[`${newname1}`][`${newname2}`][`${newname3}`];
          document.getElementById('methodEntry').value = strcv01;

          mainContainer.appendChild(a);
          jdatac++;
          }
        }

        if (objcounter == 4) {
          var newname1 = document.getElementById('dataId01').value;
          var newname2 = document.getElementById('dataId02').value;
          var newname3 = document.getElementById('dataId03').value;
          var newname4 = document.getElementById('dataId04').value;

          if (document.getElementById('methodEntry').value == 'GET') {

          var a = document.createElement('a');
          a.setAttribute('id', 'jdataId0'+(jdatac+1)+'');
          a.setAttribute('class', 'forcsshover');

          if (document.getElementById('methodEntry').value == 'GET') {
          a.innerHTML = htmldata01+obj[`${newname1}`][`${newname2}`][`${newname3}`][`${newname4}`];
          document.getElementById('methodEntry').value = strcv01;
          }
          mainContainer.appendChild(a);

          jdatac++;
          }
        }

        if (objcounter == 5) {
          var newname1 = document.getElementById('dataId01').value;
          var newname2 = document.getElementById('dataId02').value;
          var newname3 = document.getElementById('dataId03').value;
          var newname4 = document.getElementById('dataId04').value;
          var newname5 = document.getElementById('dataId05').value;

          if (document.getElementById('methodEntry').value == 'GET') {

          var a = document.createElement('a');
          a.setAttribute('id', 'jdataId0'+(jdatac+1)+'');
          a.setAttribute('class', 'forcsshover');

          if (document.getElementById('methodEntry').value == 'GET') {
          a.innerHTML = htmldata01+obj[`${newname1}`][`${newname2}`][`${newname3}`][`${newname4}`][`${newname5}`];
          document.getElementById('methodEntry').value = strcv01;
          }
          mainContainer.appendChild(a);

          jdatac++;
          }
        }

        if (objcounter == 6) {
          var newname1 = document.getElementById('dataId01').value;
          var newname2 = document.getElementById('dataId02').value;
          var newname3 = document.getElementById('dataId03').value;
          var newname4 = document.getElementById('dataId04').value;
          var newname5 = document.getElementById('dataId05').value;
          var newname6 = document.getElementById('dataId06').value;

          if (document.getElementById('methodEntry').value == 'GET') {

          var a = document.createElement('a');
          a.setAttribute('id', 'jdataId0'+(jdatac+1)+'');
          a.setAttribute('class', 'forcsshover');

          a.innerHTML = htmldata01+obj[`${newname1}`][`${newname2}`][`${newname3}`][`${newname4}`][`${newname5}`][`${newname6}`];
          document.getElementById('methodEntry').value = strcv01;

          mainContainer.appendChild(a);

          jdatac++;
          }
        }

        if (objcounter == 7) {
          var newname1 = document.getElementById('dataId01').value;
          var newname2 = document.getElementById('dataId02').value;
          var newname3 = document.getElementById('dataId03').value;
          var newname4 = document.getElementById('dataId04').value;
          var newname5 = document.getElementById('dataId05').value;
          var newname6 = document.getElementById('dataId06').value;
          var newname7 = document.getElementById('dataId07').value;

          if (document.getElementById('methodEntry').value == 'GET') {

          var a = document.createElement('a');
          a.setAttribute('id', 'jdataId0'+(jdatac+1)+'');
          a.setAttribute('class', 'forcsshover');

          a.innerHTML = htmldata01+obj[`${newname1}`][`${newname2}`][`${newname3}`][`${newname4}`][`${newname5}`][`${newname6}`][`${newname7}`];
          document.getElementById('methodEntry').value = strcv01;

          mainContainer.appendChild(a);

          jdatac++;
          }
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

          if (document.getElementById('methodEntry').value == 'GET') {

          var a = document.createElement('a');
          a.setAttribute('id', 'jdataId0'+(jdatac+1)+'');
          a.setAttribute('class', 'forcsshover');

          a.innerHTML = htmldata01+obj[`${newname1}`][`${newname2}`][`${newname3}`][`${newname4}`][`${newname5}`][`${newname6}`][`${newname7}`][`${newname8}`];
          document.getElementById('methodEntry').value = strcv01;

          mainContainer.appendChild(a);

          jdatac++;
          }
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

          if (document.getElementById('methodEntry').value == 'GET') {

          var a = document.createElement('a');
          a.setAttribute('id', 'jdataId0'+(jdatac+1)+'');
          a.setAttribute('class', 'forcsshover');

          a.innerHTML = htmldata01+obj[`${newname1}`][`${newname2}`][`${newname3}`][`${newname4}`][`${newname5}`][`${newname6}`][`${newname7}`][`${newname8}`][`${newname9}`];
          document.getElementById('methodEntry').value = strcv01;

          mainContainer.appendChild(a);

          jdatac++;
          }
        }
      }

  };

  // Buttons
function rmjsond(elementId) {

  if ( vcjsonformat ='null') {
    var element = document.getElementById(event.target.id);
    element.parentNode.parentNode.removeChild(element.parentNode);
  } else {
    var element = document.getElementById(event.target.id);
    element.parentNode.parentNode.parentNode.removeChild(element.parentNode.parentNode);
  }


};

function start01() {
  document.getElementById('headerlist01').innerHTML = '';
  counter = 0

  if (counter < 1)  {
    loadheaders01()
  }

};

function bshow01() {
  if (objcounter == 1) {
    cjsonformat01 = document.getElementById('dataId01').value

    vcjsonformat = "(obj["+`${cjsonformat01}`+"])";
  }

  if (objcounter == 2) {
    cjsonformat01 = document.getElementById('dataId01').value
    cjsonformat02 = document.getElementById('dataId02').value

    vcjsonformat = "(obj["+`${cjsonformat01}`+"]"+"["+`${cjsonformat02}`+"])";
  }

  if (objcounter == 3) {
    cjsonformat01 = document.getElementById('dataId01').value
    cjsonformat02 = document.getElementById('dataId02').value
    cjsonformat03 = document.getElementById('dataId03').value

    vcjsonformat = "(obj["+`${cjsonformat01}`+"]"+"["+`${cjsonformat02}`+"]"+"["+`${cjsonformat03}`+"])";
  }

  if (objcounter == 4) {
    cjsonformat01 = document.getElementById('dataId01').value
    cjsonformat02 = document.getElementById('dataId02').value
    cjsonformat03 = document.getElementById('dataId03').value
    cjsonformat04 = document.getElementById('dataId04').value

    vcjsonformat = "(obj["+`${cjsonformat01}`+"]"+"["+`${cjsonformat02}`+"]"+"["+`${cjsonformat03}`+"]"+"["+`${cjsonformat04}`+"])";
  }

  if (objcounter == 5) {
    cjsonformat01 = document.getElementById('dataId01').value
    cjsonformat02 = document.getElementById('dataId02').value
    cjsonformat03 = document.getElementById('dataId03').value
    cjsonformat04 = document.getElementById('dataId04').value
    cjsonformat05 = document.getElementById('dataId05').value

    vcjsonformat = "(obj["+`${cjsonformat01}`+"]"+"["+`${cjsonformat02}`+"]"+"["+`${cjsonformat03}`+"]"+"["+`${cjsonformat04}`+"]"+"["+`${cjsonformat05}`+"])";
  }

  if (objcounter == 6) {
    cjsonformat01 = document.getElementById('dataId01').value
    cjsonformat02 = document.getElementById('dataId02').value
    cjsonformat03 = document.getElementById('dataId03').value
    cjsonformat04 = document.getElementById('dataId04').value
    cjsonformat05 = document.getElementById('dataId05').value
    cjsonformat06 = document.getElementById('dataId06').value

    vcjsonformat = "(obj["+`${cjsonformat01}`+"]"+"["+`${cjsonformat02}`+"]"+"["+`${cjsonformat03}`+"]"+"["+`${cjsonformat04}`+"]"+"["+`${cjsonformat05}`+"]"+"["+`${cjsonformat06}`+"])";
  }

  if (objcounter == 7) {
    cjsonformat01 = document.getElementById('dataId01').value
    cjsonformat02 = document.getElementById('dataId02').value
    cjsonformat03 = document.getElementById('dataId03').value
    cjsonformat04 = document.getElementById('dataId04').value
    cjsonformat05 = document.getElementById('dataId05').value
    cjsonformat06 = document.getElementById('dataId06').value
    cjsonformat07 = document.getElementById('dataId07').value

    vcjsonformat = "(obj["+`${cjsonformat01}`+"]"+"["+`${cjsonformat02}`+"]"+"["+`${cjsonformat03}`+"]"+"["+`${cjsonformat04}`+"]"+"["+`${cjsonformat05}`+"]"+"["+`${cjsonformat06}`+"]"+"["+`${cjsonformat07}`+"])";
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

    vcjsonformat = "(obj["+`${cjsonformat01}`+"]"+"["+`${cjsonformat02}`+"]"+"["+`${cjsonformat03}`+"]"+"["+`${cjsonformat04}`+"]"+"["+`${cjsonformat05}`+"]"+"["+`${cjsonformat06}`+"]"+"["+`${cjsonformat07}`+"]"+"["+`${cjsonformat08}`+"])";
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

    vcjsonformat = "(obj["+`${cjsonformat01}`+"]"+"["+`${cjsonformat02}`+"]"+"["+`${cjsonformat03}`+"]"+"["+`${cjsonformat04}`+"]"+"["+`${cjsonformat05}`+"]"+"["+`${cjsonformat06}`+"]"+"["+`${cjsonformat07}`+"]"+"["+`${cjsonformat08}`+"]"+"["+`${cjsonformat09}`+"])";
  }
// Encoder simple page
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

// Encoder advanced page
  if (chbox02.checked == true & document.getElementById('methodEntry').value != 'GET')  {
    // Json VALUE
    var dataj01 = document.getElementById('valueId02').value;
    // base64 + VALUE
    var databjdata = btoa(dataj01);
    // show in page
    document.getElementById('showJson01').value = dataj01;
    document.getElementById('showJsonbase01').value = databjdata;
  }


BPreview01()

};


function bshow02() {

  if (objcounter == 1) {
    cjsonformat01 = document.getElementById('dataId01').value

    vcjsonformat = "(obj["+`${cjsonformat01}`+"])";
  }

  if (objcounter == 2) {
    cjsonformat01 = document.getElementById('dataId01').value
    cjsonformat02 = document.getElementById('dataId02').value

    vcjsonformat = "(obj["+`${cjsonformat01}`+"]"+"["+`${cjsonformat02}`+"])";
  }

  if (objcounter == 3) {
    cjsonformat01 = document.getElementById('dataId01').value
    cjsonformat02 = document.getElementById('dataId02').value
    cjsonformat03 = document.getElementById('dataId03').value

    vcjsonformat = "(obj["+`${cjsonformat01}`+"]"+"["+`${cjsonformat02}`+"]"+"["+`${cjsonformat03}`+"])";
  }

  if (objcounter == 4) {
    cjsonformat01 = document.getElementById('dataId01').value
    cjsonformat02 = document.getElementById('dataId02').value
    cjsonformat03 = document.getElementById('dataId03').value
    cjsonformat04 = document.getElementById('dataId04').value

    vcjsonformat = "(obj["+`${cjsonformat01}`+"]"+"["+`${cjsonformat02}`+"]"+"["+`${cjsonformat03}`+"]"+"["+`${cjsonformat04}`+"])";
  }

  if (objcounter == 5) {
    cjsonformat01 = document.getElementById('dataId01').value
    cjsonformat02 = document.getElementById('dataId02').value
    cjsonformat03 = document.getElementById('dataId03').value
    cjsonformat04 = document.getElementById('dataId04').value
    cjsonformat05 = document.getElementById('dataId05').value

    vcjsonformat = "(obj["+`${cjsonformat01}`+"]"+"["+`${cjsonformat02}`+"]"+"["+`${cjsonformat03}`+"]"+"["+`${cjsonformat04}`+"]"+"["+`${cjsonformat05}`+"])";
  }

  if (objcounter == 6) {
    cjsonformat01 = document.getElementById('dataId01').value
    cjsonformat02 = document.getElementById('dataId02').value
    cjsonformat03 = document.getElementById('dataId03').value
    cjsonformat04 = document.getElementById('dataId04').value
    cjsonformat05 = document.getElementById('dataId05').value
    cjsonformat06 = document.getElementById('dataId06').value

    vcjsonformat = "(obj["+`${cjsonformat01}`+"]"+"["+`${cjsonformat02}`+"]"+"["+`${cjsonformat03}`+"]"+"["+`${cjsonformat04}`+"]"+"["+`${cjsonformat05}`+"]"+"["+`${cjsonformat06}`+"])";
  }

  if (objcounter == 7) {
    cjsonformat01 = document.getElementById('dataId01').value
    cjsonformat02 = document.getElementById('dataId02').value
    cjsonformat03 = document.getElementById('dataId03').value
    cjsonformat04 = document.getElementById('dataId04').value
    cjsonformat05 = document.getElementById('dataId05').value
    cjsonformat06 = document.getElementById('dataId06').value
    cjsonformat07 = document.getElementById('dataId07').value

    vcjsonformat = "(obj["+`${cjsonformat01}`+"]"+"["+`${cjsonformat02}`+"]"+"["+`${cjsonformat03}`+"]"+"["+`${cjsonformat04}`+"]"+"["+`${cjsonformat05}`+"]"+"["+`${cjsonformat06}`+"]"+"["+`${cjsonformat07}`+"])";
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

    vcjsonformat = "(obj["+`${cjsonformat01}`+"]"+"["+`${cjsonformat02}`+"]"+"["+`${cjsonformat03}`+"]"+"["+`${cjsonformat04}`+"]"+"["+`${cjsonformat05}`+"]"+"["+`${cjsonformat06}`+"]"+"["+`${cjsonformat07}`+"]"+"["+`${cjsonformat08}`+"])";
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

    vcjsonformat = "(obj["+`${cjsonformat01}`+"]"+"["+`${cjsonformat02}`+"]"+"["+`${cjsonformat03}`+"]"+"["+`${cjsonformat04}`+"]"+"["+`${cjsonformat05}`+"]"+"["+`${cjsonformat06}`+"]"+"["+`${cjsonformat07}`+"]"+"["+`${cjsonformat08}`+"]"+"["+`${cjsonformat09}`+"])";
  }

  strcv01 = document.getElementById('methodEntry').value
  document.getElementById('methodEntry').value = 'GET';

  document.getElementById('apply01').click();

};

function bclear01(elementID) {
  document.getElementById('DisableB02').disabled = true;
  document.getElementById('jsondata').innerHTML = '';
  document.getElementById('IncomingJson').value = '';

  jdatac = 0
};

function testv() {
  // Method
  document.getElementById('methodEntry').value = 'POST';
  // DATA
  document.getElementById('valueId02').value = `{ "book":{ "name":"Harry Potter and the Goblet of Fire",
        "author":"J. K. Rowling",
        "price":{
           "hardcover":"$30.32",
           "paperback":"$11.80",
           "kindle":"$10.12"
  },
        "characters":[
           "Harry Potter",
           "Hermione Granger",
           "Ron Weasley"
  ],
        "year":2000,
        "genre":"Fantasy Fiction"
  },
  "videos":{ "music":"<iframe width='100%' height='400' src='http://www.youtube.com/embed/lNyebE4_XtI?start=190' frameborder='0' allow='accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture' allowfullscreen></iframe>",
  "science":"<iframe width='100%' height='400' src='http://www.youtube.com/embed/ecIWPzGEbFc' frameborder='0' allow='accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture' allowfullscreen></iframe>"
  }
  }`;
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
    // HeaderEntry01
    document.getElementById('HeaderEntry01').value = 'Content-Type';
    document.getElementById('HeaderEntry01').click();
    document.getElementById('authEntry01').value = 'application/json';
    document.getElementById('authEntry01').click();
    // HeaderEntry02
    document.getElementById('HeaderEntry02').value = 'Authorization';
    document.getElementById('HeaderEntry02').click();
    document.getElementById('aauthEntry02').value = 'Basic';
    document.getElementById('aauthEntry02').click();

    var authtype02 = 'Basic';
    document.getElementById('authEntry02').value = 'YWRtaW46YWRtaW4=';



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

      if (he01 == 'Authorization') {
        var heval01 = document.getElementById('aauthEntry01').value + ' [' + document.getElementById('authEntry01').value + ']';
      } else {
        var heval01 = document.getElementById('authEntry01').value;
      }

    }
  }

  //Header 2
  if (counter >= 2)  {
    if (document.getElementById('HeaderEntry02').value == 'novalue')  {
      console.log('header2: deactivated');
    } else {
      var he02 = document.getElementById('HeaderEntry02').value;

      if (he02 == 'Authorization') {
        var heval02 = document.getElementById('aauthEntry02').value + ' [' + document.getElementById('authEntry02').value + ']';
      } else {
        var heval02 = document.getElementById('authEntry02').value;
      }

    }
  }

  //Header 3
  if (counter >= 3)  {
    if (document.getElementById('HeaderEntry03').value == 'novalue')  {
      console.log('header3: deactivated');
    } else {
      var he03 = document.getElementById('HeaderEntry03').value;

      if (he03 == 'Authorization') {
        var heval03 = document.getElementById('aauthEntry03').value + ' [' + document.getElementById('authEntry03').value + ']';
      } else {
        var heval03 = document.getElementById('authEntry03').value;
      }

    }
  }

  //Header 4
  if (counter >= 4)  {
    if (document.getElementById('HeaderEntry04').value == 'novalue')  {
      console.log('header4: deactivated');
    } else {
      var he04 = document.getElementById('HeaderEntry04').value;

      if (he04 == 'Authorization') {
        var heval04 = document.getElementById('aauthEntry04').value + ' [' + document.getElementById('authEntry04').value + ']';
      } else {
        var heval04 = document.getElementById('authEntry04').value;
      }

    }
  }

  //Header 5
  if (counter >= 5)  {
    if (document.getElementById('HeaderEntry05').value == 'novalue')  {
      console.log('header5: deactivated');
    } else {
      var he05 = document.getElementById('HeaderEntry05').value;

      if (he05 == 'Authorization') {
        var heval05 = document.getElementById('aauthEntry05').value + ' [' + document.getElementById('authEntry05').value + ']';
      } else {
        var heval05 = document.getElementById('authEntry05').value;
      }

    }
  }

  //Header 6
  if (counter >= 6)  {
    if (document.getElementById('HeaderEntry06').value == 'novalue')  {
      console.log('header6: deactivated');
    } else {
      var he06 = document.getElementById('HeaderEntry06').value;

      if (he06 == 'Authorization') {
        var heval06 = document.getElementById('aauthEntry06').value + ' [' + document.getElementById('authEntry06').value + ']';
      } else {
        var heval06 = document.getElementById('authEntry06').value;
      }

    }
  }

  //Header 7
  if (counter >= 7)  {
    if (document.getElementById('HeaderEntry07').value == 'novalue')  {
      console.log('header7: deactivated');
    } else {
      var he07 = document.getElementById('HeaderEntry07').value;

      if (he07 == 'Authorization') {
        var heval07 = document.getElementById('aauthEntry07').value + ' [' + document.getElementById('authEntry07').value + ']';
      } else {
        var heval07 = document.getElementById('authEntry07').value;
      }

    }
  }

  //Header 8
  if (counter >= 8)  {
    if (document.getElementById('HeaderEntry08').value == 'novalue')  {
      console.log('header8: deactivated');
    } else {
      var he08 = document.getElementById('HeaderEntry08').value;

      if (he08 == 'Authorization') {
        var heval08 = document.getElementById('aauthEntry08').value + ' [' + document.getElementById('authEntry08').value + ']';
      } else {
        var heval08 = document.getElementById('authEntry08').value;
      }

    }
  }

  //Header 9
  if (counter >= 9)  {
    if (document.getElementById('HeaderEntry09').value == 'novalue')  {
      console.log('header9: deactivated');
    } else {
      var he09 = document.getElementById('HeaderEntry09').value;

      if (he09 == 'Authorization') {
        var heval02 = document.getElementById('aauthEntry09').value + ' [' + document.getElementById('authEntry09').value + ']';
      } else {
        var heval09 = document.getElementById('authEntry09').value;
      }

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


var objcounter = 1;
var objmax = 9;

function loadobjects01() {

  var node01 = document.createElement('div');
  node01.innerHTML = `<input id="dataId0`+(objcounter+1)+`" class='jsonvalue' type="text" value=''>`;

  if (objcounter != objmax)  {

  if (document.getElementById( "dataId0"+(objcounter) ).value != '' ) {
 	  document.getElementById("addnobj01").appendChild(node01);
 	  objcounter++;
  }

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
    <select class="inputstyle" id="HeaderEntry0`+(counter+1)+`" value="novalue" onclick="checkinput0`+(counter+1)+`()">
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
    <div id="stuffhere0`+(counter+1)+`"></div>
    `;

  if (counter == maximum)  {
    console.log("maximum reached");
	} else {
 	  node.appendChild(dyncontent);
 	  document.getElementById("headerlist01").appendChild(node);
 	  counter++;
  }

};


function checkinput01(elementId) {

    var vheader1 = document.getElementById("HeaderEntry01").value

    // Header1
    if (vheader1 == 'novalue') {
      document.getElementById("stuffhere01").innerHTML = '';
    }

    if (vheader1 == 'Accept' ) {

      document.getElementById("stuffhere01").innerHTML = `
      <select class="inputstyle" id="authEntry01" value="novalue">
      <option value="application/json">application/json</option>
      <option value="application/x-www-form-urlencoded">application/x-www-form-urlencoded</option>
      <option value="application/xhtml+xml">application/xhtml+xml</option>
      <option value="application/xml">application/xml</option>
      <option value="multipart/form-data">multipart/form-data</option>
      <option value="text/html">text/html</option>
      <option value="text/plain">text/plain</option>
      <option value="text/xml">text/xml</option>
      </select>
      `;
    }

    if (vheader1 == 'Accept-Charset' ) {

      document.getElementById("stuffhere01").innerHTML = `
      <select class="inputstyle" id="authEntry01" value="novalue">
      <option value="iso-8859-1">iso-8859-1</option>
      <option value="utf-8">utf-8</option>
      </select>
      `;
    }

    if (vheader1 == 'Accept-Encoding' ) {

      document.getElementById("stuffhere01").innerHTML = `
      <select class="inputstyle" id="authEntry01" value="novalue">
      <option value="deflate">deflate</option>
      <option value="gzip">gzip</option>
      </select>
      `;
    }

    if (vheader1 == 'Cache-Control' ) {

      document.getElementById("stuffhere01").innerHTML = `
      <select class="inputstyle" id="authEntry01" value="novalue">
      <option value="no-cache">no-cache</option>
      </select>
      `;
    }

    if (vheader1 == 'Connection' ) {

      document.getElementById("stuffhere01").innerHTML = `
      <select class="inputstyle" id="authEntry01" value="novalue">
      <option value="close">close</option>
      <option value="keep-alive">keep-alive</option>
      </select>
      `;
    }

      if (vheader1 == 'Content-Type' ) {

        document.getElementById("stuffhere01").innerHTML = `
        <select class="inputstyle" id="authEntry01" value="novalue">
        <option value="application/json">application/json</option>
        <option value="application/x-www-form-urlencoded">application/x-www-form-urlencoded</option>
        <option value="application/xhtml+xml">application/xhtml+xml</option>
        <option value="application/xml">application/xml</option>
        <option value="multipart/form-data">multipart/form-data</option>
        <option value="text/html">text/html</option>
        <option value="text/plain">text/plain</option>
        <option value="text/xml">text/xml</option>
        </select>
        `;
      }

      if (vheader1 == 'Authorization' ) {

        document.getElementById("stuffhere01").innerHTML = `
        <select class="inputstyle" id="aauthEntry01" value="novalue">
        <option value="Basic">Basic</option>
        <option value="Bearer">Bearer</option>
        <option value="Digest">Digest</option>
        </select>

        <input id="authEntry01" class='jsonvalue' type='text'>
        `;

        document.getElementById('aauthEntry01').click();

      }

      if (vheader1 != 'novalue' & vheader1 != 'Accept' & vheader1 != 'Accept-Charset' & vheader1 != 'Accept-Encoding'  & vheader1 != 'Cache-Control' & vheader1 != 'Connection' & vheader1 != 'Content-Type' & vheader1 != 'Authorization' ) {
        document.getElementById("stuffhere01").innerHTML = '<input id="authEntry01" class="jsonvalue" type="text" value="">';
      }

};


function checkinput02(elementId) {

    var vheader2 = document.getElementById("HeaderEntry02").value

    // Header2
    if (vheader2 == 'novalue') {
      document.getElementById("stuffhere02").innerHTML = '';
    }

    if (vheader2 == 'Accept' ) {

      document.getElementById("stuffhere02").innerHTML = `
      <select class="inputstyle" id="authEntry02" value="novalue">
      <option value="application/json">application/json</option>
      <option value="application/x-www-form-urlencoded">application/x-www-form-urlencoded</option>
      <option value="application/xhtml+xml">application/xhtml+xml</option>
      <option value="application/xml">application/xml</option>
      <option value="multipart/form-data">multipart/form-data</option>
      <option value="text/html">text/html</option>
      <option value="text/plain">text/plain</option>
      <option value="text/xml">text/xml</option>
      </select>
      `;
    }

    if (vheader2 == 'Accept-Charset' ) {

      document.getElementById("stuffhere02").innerHTML = `
      <select class="inputstyle" id="authEntry02" value="novalue">
      <option value="iso-8859-1">iso-8859-1</option>
      <option value="utf-8">utf-8</option>
      </select>
      `;
    }

    if (vheader2 == 'Accept-Encoding' ) {

      document.getElementById("stuffhere02").innerHTML = `
      <select class="inputstyle" id="authEntry02" value="novalue">
      <option value="deflate">deflate</option>
      <option value="gzip">gzip</option>
      </select>
      `;
    }

    if (vheader2 == 'Cache-Control' ) {

      document.getElementById("stuffhere02").innerHTML = `
      <select class="inputstyle" id="authEntry02" value="novalue">
      <option value="no-cache">no-cache</option>
      </select>
      `;
    }

    if (vheader2 == 'Connection' ) {

      document.getElementById("stuffhere02").innerHTML = `
      <select class="inputstyle" id="authEntry02" value="novalue">
      <option value="close">close</option>
      <option value="keep-alive">keep-alive</option>
      </select>
      `;
    }

      if (vheader2 == 'Content-Type' ) {

        document.getElementById("stuffhere02").innerHTML = `
        <select class="inputstyle" id="authEntry02" value="novalue">
        <option value="application/json">application/json</option>
        <option value="application/x-www-form-urlencoded">application/x-www-form-urlencoded</option>
        <option value="application/xhtml+xml">application/xhtml+xml</option>
        <option value="application/xml">application/xml</option>
        <option value="multipart/form-data">multipart/form-data</option>
        <option value="text/html">text/html</option>
        <option value="text/plain">text/plain</option>
        <option value="text/xml">text/xml</option>
        </select>
        `;
      }

      if (vheader2 == 'Authorization' ) {

        document.getElementById("stuffhere02").innerHTML = `
        <select class="inputstyle" id="aauthEntry02" value="novalue">
        <option value="Basic">Basic</option>
        <option value="Bearer">Bearer</option>
        <option value="Digest">Digest</option>
        </select>

        <input id="authEntry02" class='jsonvalue' type='text'>
        `;

        document.getElementById('aauthEntry02').click();

      }

      if (vheader2 != 'novalue' & vheader2 != 'Accept' & vheader2 != 'Accept-Charset' & vheader2 != 'Accept-Encoding'  & vheader2 != 'Cache-Control' & vheader2 != 'Connection' & vheader2 != 'Content-Type' & vheader2 != 'Authorization' ) {
        document.getElementById("stuffhere02").innerHTML = '<input id="authEntry02" class="jsonvalue" type="text" value="">';
      }


};

function checkinput03(elementId) {

    var vheader3 = document.getElementById("HeaderEntry03").value

    if (vheader3 == 'novalue') {
      document.getElementById("stuffhere03").innerHTML = '';
    }

    if (vheader3 == 'Accept' ) {

      document.getElementById("stuffhere03").innerHTML = `
      <select class="inputstyle" id="authEntry03" value="novalue">
      <option value="application/json">application/json</option>
      <option value="application/x-www-form-urlencoded">application/x-www-form-urlencoded</option>
      <option value="application/xhtml+xml">application/xhtml+xml</option>
      <option value="application/xml">application/xml</option>
      <option value="multipart/form-data">multipart/form-data</option>
      <option value="text/html">text/html</option>
      <option value="text/plain">text/plain</option>
      <option value="text/xml">text/xml</option>
      </select>
      `;
    }

    if (vheader3 == 'Accept-Charset' ) {

      document.getElementById("stuffhere03").innerHTML = `
      <select class="inputstyle" id="authEntry03" value="novalue">
      <option value="iso-8859-1">iso-8859-1</option>
      <option value="utf-8">utf-8</option>
      </select>
      `;
    }

    if (vheader3 == 'Accept-Encoding' ) {

      document.getElementById("stuffhere03").innerHTML = `
      <select class="inputstyle" id="authEntry03" value="novalue">
      <option value="deflate">deflate</option>
      <option value="gzip">gzip</option>
      </select>
      `;
    }

    if (vheader3 == 'Cache-Control' ) {

      document.getElementById("stuffhere03").innerHTML = `
      <select class="inputstyle" id="authEntry03" value="novalue">
      <option value="no-cache">no-cache</option>
      </select>
      `;
    }

    if (vheader3 == 'Connection' ) {

      document.getElementById("stuffhere03").innerHTML = `
      <select class="inputstyle" id="authEntry03" value="novalue">
      <option value="close">close</option>
      <option value="keep-alive">keep-alive</option>
      </select>
      `;
    }

      if (vheader3 == 'Content-Type' ) {

        document.getElementById("stuffhere03").innerHTML = `
        <select class="inputstyle" id="authEntry03" value="novalue">
        <option value="application/json">application/json</option>
        <option value="application/x-www-form-urlencoded">application/x-www-form-urlencoded</option>
        <option value="application/xhtml+xml">application/xhtml+xml</option>
        <option value="application/xml">application/xml</option>
        <option value="multipart/form-data">multipart/form-data</option>
        <option value="text/html">text/html</option>
        <option value="text/plain">text/plain</option>
        <option value="text/xml">text/xml</option>
        </select>
        `;
      }

      if (vheader3 == 'Authorization' ) {

        document.getElementById("stuffhere03").innerHTML = `
        <select class="inputstyle" id="aauthEntry03" value="novalue">
        <option value="Basic">Basic</option>
        <option value="Bearer">Bearer</option>
        <option value="Digest">Digest</option>
        </select>

        <input id="authEntry03" class='jsonvalue' type='text' value=''>
        `;

        document.getElementById('aauthEntry03').click();

      }

      if (vheader3 != 'novalue' & vheader3 != 'Accept' & vheader3 != 'Accept-Charset' & vheader3 != 'Accept-Encoding'  & vheader3 != 'Cache-Control' & vheader3 != 'Connection' & vheader3 != 'Content-Type' & vheader3 != 'Authorization' ) {
        document.getElementById("stuffhere03").innerHTML = '<input id="authEntry03" class="jsonvalue" type="text" value="">';
      }

};

function checkinput04(elementId) {

    var vheader4 = document.getElementById("HeaderEntry04").value

    // Header4
    if (vheader4 == 'novalue') {
      document.getElementById("stuffhere04").innerHTML = '';
    }

    if (vheader4 == 'Accept' ) {

      document.getElementById("stuffhere04").innerHTML = `
      <select class="inputstyle" id="authEntry04" value="novalue">
      <option value="application/json">application/json</option>
      <option value="application/x-www-form-urlencoded">application/x-www-form-urlencoded</option>
      <option value="application/xhtml+xml">application/xhtml+xml</option>
      <option value="application/xml">application/xml</option>
      <option value="multipart/form-data">multipart/form-data</option>
      <option value="text/html">text/html</option>
      <option value="text/plain">text/plain</option>
      <option value="text/xml">text/xml</option>
      </select>
      `;
    }

    if (vheader4 == 'Accept-Charset' ) {

      document.getElementById("stuffhere04").innerHTML = `
      <select class="inputstyle" id="authEntry04" value="novalue">
      <option value="iso-8859-1">iso-8859-1</option>
      <option value="utf-8">utf-8</option>
      </select>
      `;
    }

    if (vheader4 == 'Accept-Encoding' ) {

      document.getElementById("stuffhere04").innerHTML = `
      <select class="inputstyle" id="authEntry04" value="novalue">
      <option value="deflate">deflate</option>
      <option value="gzip">gzip</option>
      </select>
      `;
    }

    if (vheader4 == 'Cache-Control' ) {

      document.getElementById("stuffhere04").innerHTML = `
      <select class="inputstyle" id="authEntry04" value="novalue">
      <option value="no-cache">no-cache</option>
      </select>
      `;
    }

    if (vheader4 == 'Connection' ) {

      document.getElementById("stuffhere04").innerHTML = `
      <select class="inputstyle" id="authEntry04" value="novalue">
      <option value="close">close</option>
      <option value="keep-alive">keep-alive</option>
      </select>
      `;
    }

      if (vheader4 == 'Content-Type' ) {

        document.getElementById("stuffhere04").innerHTML = `
        <select class="inputstyle" id="authEntry04" value="novalue">
        <option value="application/json">application/json</option>
        <option value="application/x-www-form-urlencoded">application/x-www-form-urlencoded</option>
        <option value="application/xhtml+xml">application/xhtml+xml</option>
        <option value="application/xml">application/xml</option>
        <option value="multipart/form-data">multipart/form-data</option>
        <option value="text/html">text/html</option>
        <option value="text/plain">text/plain</option>
        <option value="text/xml">text/xml</option>
        </select>
        `;
      }

      if (vheader4 == 'Authorization' ) {

        document.getElementById("stuffhere04").innerHTML = `
        <select class="inputstyle" id="aauthEntry04" value="novalue">
        <option value="Basic">Basic</option>
        <option value="Bearer">Bearer</option>
        <option value="Digest">Digest</option>
        </select>

        <input id="authEntry04" class='jsonvalue' type='text' value=''>
        `;

        document.getElementById('aauthEntry04').click();

      }

      if (vheader4 != 'novalue' & vheader4 != 'Accept' & vheader4 != 'Accept-Charset' & vheader4 != 'Accept-Encoding'  & vheader4 != 'Cache-Control' & vheader4 != 'Connection' & vheader4 != 'Content-Type' & vheader4 != 'Authorization' ) {
        document.getElementById("stuffhere04").innerHTML = '<input id="authEntry04" class="jsonvalue" type="text" value="">';
      }

};

function checkinput05(elementId) {

    var vheader5 = document.getElementById("HeaderEntry05").value

    // Header5
    if (vheader5 == 'novalue') {
      document.getElementById("stuffhere05").innerHTML = '';
    }

    if (vheader5 == 'Accept' ) {

      document.getElementById("stuffhere05").innerHTML = `
      <select class="inputstyle" id="authEntry05" value="novalue">
      <option value="application/json">application/json</option>
      <option value="application/x-www-form-urlencoded">application/x-www-form-urlencoded</option>
      <option value="application/xhtml+xml">application/xhtml+xml</option>
      <option value="application/xml">application/xml</option>
      <option value="multipart/form-data">multipart/form-data</option>
      <option value="text/html">text/html</option>
      <option value="text/plain">text/plain</option>
      <option value="text/xml">text/xml</option>
      </select>
      `;
    }

    if (vheader5 == 'Accept-Charset' ) {

      document.getElementById("stuffhere05").innerHTML = `
      <select class="inputstyle" id="authEntry05" value="novalue">
      <option value="iso-8859-1">iso-8859-1</option>
      <option value="utf-8">utf-8</option>
      </select>
      `;
    }

    if (vheader5 == 'Accept-Encoding' ) {

      document.getElementById("stuffhere05").innerHTML = `
      <select class="inputstyle" id="authEntry05" value="novalue">
      <option value="deflate">deflate</option>
      <option value="gzip">gzip</option>
      </select>
      `;
    }

    if (vheader5 == 'Cache-Control' ) {

      document.getElementById("stuffhere05").innerHTML = `
      <select class="inputstyle" id="authEntry05" value="novalue">
      <option value="no-cache">no-cache</option>
      </select>
      `;
    }

    if (vheader5 == 'Connection' ) {

      document.getElementById("stuffhere05").innerHTML = `
      <select class="inputstyle" id="authEntry05" value="novalue">
      <option value="close">close</option>
      <option value="keep-alive">keep-alive</option>
      </select>
      `;
    }

      if (vheader5 == 'Content-Type' ) {

        document.getElementById("stuffhere05").innerHTML = `
        <select class="inputstyle" id="authEntry05" value="novalue">
        <option value="application/json">application/json</option>
        <option value="application/x-www-form-urlencoded">application/x-www-form-urlencoded</option>
        <option value="application/xhtml+xml">application/xhtml+xml</option>
        <option value="application/xml">application/xml</option>
        <option value="multipart/form-data">multipart/form-data</option>
        <option value="text/html">text/html</option>
        <option value="text/plain">text/plain</option>
        <option value="text/xml">text/xml</option>
        </select>
        `;
      }

      if (vheader5 == 'Authorization' ) {

        document.getElementById("stuffhere05").innerHTML = `
        <select class="inputstyle" id="aauthEntry05" value="novalue">
        <option value="Basic">Basic</option>
        <option value="Bearer">Bearer</option>
        <option value="Digest">Digest</option>
        </select>

        <input id="authEntry05" class='jsonvalue' type='text' value=''>
        `;

        document.getElementById('aauthEntry05').click();

      }

      if (vheader5 != 'novalue' & vheader5 != 'Accept' & vheader5 != 'Accept-Charset' & vheader5 != 'Accept-Encoding'  & vheader5 != 'Cache-Control' & vheader5 != 'Connection' & vheader5 != 'Content-Type' & vheader5 != 'Authorization' ) {
        document.getElementById("stuffhere05").innerHTML = '<input id="authEntry05" class="jsonvalue" type="text" value="">';
      }

};


function checkinput06(elementId) {

    var vheader6 = document.getElementById("HeaderEntry06").value

    // Header6
    if (vheader6 == 'novalue') {
      document.getElementById("stuffhere06").innerHTML = '';
    }

    if (vheader6 == 'Accept' ) {

      document.getElementById("stuffhere06").innerHTML = `
      <select class="inputstyle" id="authEntry06" value="novalue">
      <option value="application/json">application/json</option>
      <option value="application/x-www-form-urlencoded">application/x-www-form-urlencoded</option>
      <option value="application/xhtml+xml">application/xhtml+xml</option>
      <option value="application/xml">application/xml</option>
      <option value="multipart/form-data">multipart/form-data</option>
      <option value="text/html">text/html</option>
      <option value="text/plain">text/plain</option>
      <option value="text/xml">text/xml</option>
      </select>
      `;
    }

    if (vheader6 == 'Accept-Charset' ) {

      document.getElementById("stuffhere06").innerHTML = `
      <select class="inputstyle" id="authEntry06" value="novalue">
      <option value="iso-8859-1">iso-8859-1</option>
      <option value="utf-8">utf-8</option>
      </select>
      `;
    }

    if (vheader6 == 'Accept-Encoding' ) {

      document.getElementById("stuffhere06").innerHTML = `
      <select class="inputstyle" id="authEntry06" value="novalue">
      <option value="deflate">deflate</option>
      <option value="gzip">gzip</option>
      </select>
      `;
    }

    if (vheader6 == 'Cache-Control' ) {

      document.getElementById("stuffhere06").innerHTML = `
      <select class="inputstyle" id="authEntry06" value="novalue">
      <option value="no-cache">no-cache</option>
      </select>
      `;
    }

    if (vheader6 == 'Connection' ) {

      document.getElementById("stuffhere06").innerHTML = `
      <select class="inputstyle" id="authEntry06" value="novalue">
      <option value="close">close</option>
      <option value="keep-alive">keep-alive</option>
      </select>
      `;
    }

      if (vheader6 == 'Content-Type' ) {

        document.getElementById("stuffhere06").innerHTML = `
        <select class="inputstyle" id="authEntry06" value="novalue">
        <option value="application/json">application/json</option>
        <option value="application/x-www-form-urlencoded">application/x-www-form-urlencoded</option>
        <option value="application/xhtml+xml">application/xhtml+xml</option>
        <option value="application/xml">application/xml</option>
        <option value="multipart/form-data">multipart/form-data</option>
        <option value="text/html">text/html</option>
        <option value="text/plain">text/plain</option>
        <option value="text/xml">text/xml</option>
        </select>
        `;
      }

      if (vheader6 == 'Authorization' ) {

        document.getElementById("stuffhere06").innerHTML = `
        <select class="inputstyle" id="aauthEntry06" value="novalue">
        <option value="Basic">Basic</option>
        <option value="Bearer">Bearer</option>
        <option value="Digest">Digest</option>
        </select>

        <input id="authEntry06" class='jsonvalue' type='text' value=''>
        `;

        document.getElementById('aauthEntry06').click();

      }

      if (vheader6 != 'novalue' & vheader6 != 'Accept' & vheader6 != 'Accept-Charset' & vheader6 != 'Accept-Encoding'  & vheader6 != 'Cache-Control' & vheader6 != 'Connection' & vheader6 != 'Content-Type' & vheader6 != 'Authorization' ) {
        document.getElementById("stuffhere06").innerHTML = '<input id="authEntry06" class="jsonvalue" type="text" value="">';
      }

};

function checkinput07(elementId) {

    var vheader7 = document.getElementById("HeaderEntry07").value

    // Header7
    if (vheader7 == 'novalue') {
      document.getElementById("stuffhere07").innerHTML = '';
    }

    if (vheader7 == 'Accept' ) {

      document.getElementById("stuffhere07").innerHTML = `
      <select class="inputstyle" id="authEntry07" value="novalue">
      <option value="application/json">application/json</option>
      <option value="application/x-www-form-urlencoded">application/x-www-form-urlencoded</option>
      <option value="application/xhtml+xml">application/xhtml+xml</option>
      <option value="application/xml">application/xml</option>
      <option value="multipart/form-data">multipart/form-data</option>
      <option value="text/html">text/html</option>
      <option value="text/plain">text/plain</option>
      <option value="text/xml">text/xml</option>
      </select>
      `;
    }

    if (vheader7 == 'Accept-Charset' ) {

      document.getElementById("stuffhere07").innerHTML = `
      <select class="inputstyle" id="authEntry07" value="novalue">
      <option value="iso-8859-1">iso-8859-1</option>
      <option value="utf-8">utf-8</option>
      </select>
      `;
    }

    if (vheader7 == 'Accept-Encoding' ) {

      document.getElementById("stuffhere07").innerHTML = `
      <select class="inputstyle" id="authEntry07" value="novalue">
      <option value="deflate">deflate</option>
      <option value="gzip">gzip</option>
      </select>
      `;
    }

    if (vheader7 == 'Cache-Control' ) {

      document.getElementById("stuffhere07").innerHTML = `
      <select class="inputstyle" id="authEntry07" value="novalue">
      <option value="no-cache">no-cache</option>
      </select>
      `;
    }

    if (vheader7 == 'Connection' ) {

      document.getElementById("stuffhere07").innerHTML = `
      <select class="inputstyle" id="authEntry07" value="novalue">
      <option value="close">close</option>
      <option value="keep-alive">keep-alive</option>
      </select>
      `;
    }

      if (vheader7 == 'Content-Type' ) {

        document.getElementById("stuffhere07").innerHTML = `
        <select class="inputstyle" id="authEntry07" value="novalue">
        <option value="application/json">application/json</option>
        <option value="application/x-www-form-urlencoded">application/x-www-form-urlencoded</option>
        <option value="application/xhtml+xml">application/xhtml+xml</option>
        <option value="application/xml">application/xml</option>
        <option value="multipart/form-data">multipart/form-data</option>
        <option value="text/html">text/html</option>
        <option value="text/plain">text/plain</option>
        <option value="text/xml">text/xml</option>
        </select>
        `;
      }

      if (vheader7 == 'Authorization' ) {

        document.getElementById("stuffhere07").innerHTML = `
        <select class="inputstyle" id="aauthEntry07" value="novalue">
        <option value="Basic">Basic</option>
        <option value="Bearer">Bearer</option>
        <option value="Digest">Digest</option>
        </select>

        <input id="authEntry07" class='jsonvalue' type='text' value=''>
        `;

        document.getElementById('aauthEntry07').click();

      }

      if (vheader7 != 'novalue' & vheader7 != 'Accept' & vheader7 != 'Accept-Charset' & vheader7 != 'Accept-Encoding'  & vheader7 != 'Cache-Control' & vheader7 != 'Connection' & vheader7 != 'Content-Type' & vheader7 != 'Authorization' ) {
        document.getElementById("stuffhere07").innerHTML = '<input id="authEntry07" class="jsonvalue" type="text" value="">';
      }

};

function checkinput08(elementId) {

    var vheader8 = document.getElementById("HeaderEntry08").value

    // Header8
    if (vheader8 == 'novalue') {
      document.getElementById("stuffhere08").innerHTML = '';
    }

    if (vheader8 == 'Accept' ) {

      document.getElementById("stuffhere08").innerHTML = `
      <select class="inputstyle" id="authEntry08" value="novalue">
      <option value="application/json">application/json</option>
      <option value="application/x-www-form-urlencoded">application/x-www-form-urlencoded</option>
      <option value="application/xhtml+xml">application/xhtml+xml</option>
      <option value="application/xml">application/xml</option>
      <option value="multipart/form-data">multipart/form-data</option>
      <option value="text/html">text/html</option>
      <option value="text/plain">text/plain</option>
      <option value="text/xml">text/xml</option>
      </select>
      `;
    }

    if (vheader8 == 'Accept-Charset' ) {

      document.getElementById("stuffhere08").innerHTML = `
      <select class="inputstyle" id="authEntry08" value="novalue">
      <option value="iso-8859-1">iso-8859-1</option>
      <option value="utf-8">utf-8</option>
      </select>
      `;
    }

    if (vheader8 == 'Accept-Encoding' ) {

      document.getElementById("stuffhere08").innerHTML = `
      <select class="inputstyle" id="authEntry08" value="novalue">
      <option value="deflate">deflate</option>
      <option value="gzip">gzip</option>
      </select>
      `;
    }

    if (vheader8 == 'Cache-Control' ) {

      document.getElementById("stuffhere08").innerHTML = `
      <select class="inputstyle" id="authEntry08" value="novalue">
      <option value="no-cache">no-cache</option>
      </select>
      `;
    }

    if (vheader8 == 'Connection' ) {

      document.getElementById("stuffhere08").innerHTML = `
      <select class="inputstyle" id="authEntry08" value="novalue">
      <option value="close">close</option>
      <option value="keep-alive">keep-alive</option>
      </select>
      `;
    }

      if (vheader8 == 'Content-Type' ) {

        document.getElementById("stuffhere08").innerHTML = `
        <select class="inputstyle" id="authEntry08" value="novalue">
        <option value="application/json">application/json</option>
        <option value="application/x-www-form-urlencoded">application/x-www-form-urlencoded</option>
        <option value="application/xhtml+xml">application/xhtml+xml</option>
        <option value="application/xml">application/xml</option>
        <option value="multipart/form-data">multipart/form-data</option>
        <option value="text/html">text/html</option>
        <option value="text/plain">text/plain</option>
        <option value="text/xml">text/xml</option>
        </select>
        `;
      }

      if (vheader8 == 'Authorization' ) {

        document.getElementById("stuffhere08").innerHTML = `
        <select class="inputstyle" id="aauthEntry08" value="novalue">
        <option value="Basic">Basic</option>
        <option value="Bearer">Bearer</option>
        <option value="Digest">Digest</option>
        </select>

        <input id="authEntry08" class='jsonvalue' type='text' value=''>
        `;

        document.getElementById('aauthEntry08').click();

      }

      if (vheader8 != 'novalue' & vheader8 != 'Accept' & vheader8 != 'Accept-Charset' & vheader8 != 'Accept-Encoding'  & vheader8 != 'Cache-Control' & vheader8 != 'Connection' & vheader8 != 'Content-Type' & vheader8 != 'Authorization' ) {
        document.getElementById("stuffhere08").innerHTML = '<input id="authEntry08" class="jsonvalue" type="text" value="">';
      }

};


function checkinput09(elementId) {

    var vheader9 = document.getElementById("HeaderEntry09").value

    // Header9
    if (vheader9 == 'novalue') {
      document.getElementById("stuffhere09").innerHTML = '';
    }

    if (vheader9 == 'Accept' ) {

      document.getElementById("stuffhere09").innerHTML = `
      <select class="inputstyle" id="authEntry09" value="novalue">
      <option value="application/json">application/json</option>
      <option value="application/x-www-form-urlencoded">application/x-www-form-urlencoded</option>
      <option value="application/xhtml+xml">application/xhtml+xml</option>
      <option value="application/xml">application/xml</option>
      <option value="multipart/form-data">multipart/form-data</option>
      <option value="text/html">text/html</option>
      <option value="text/plain">text/plain</option>
      <option value="text/xml">text/xml</option>
      </select>
      `;
    }

    if (vheader9 == 'Accept-Charset' ) {

      document.getElementById("stuffhere09").innerHTML = `
      <select class="inputstyle" id="authEntry09" value="novalue">
      <option value="iso-8859-1">iso-8859-1</option>
      <option value="utf-8">utf-8</option>
      </select>
      `;
    }

    if (vheader9 == 'Accept-Encoding' ) {

      document.getElementById("stuffhere09").innerHTML = `
      <select class="inputstyle" id="authEntry09" value="novalue">
      <option value="deflate">deflate</option>
      <option value="gzip">gzip</option>
      </select>
      `;
    }

    if (vheader9 == 'Cache-Control' ) {

      document.getElementById("stuffhere09").innerHTML = `
      <select class="inputstyle" id="authEntry09" value="novalue">
      <option value="no-cache">no-cache</option>
      </select>
      `;
    }

    if (vheader9 == 'Connection' ) {

      document.getElementById("stuffhere09").innerHTML = `
      <select class="inputstyle" id="authEntry09" value="novalue">
      <option value="close">close</option>
      <option value="keep-alive">keep-alive</option>
      </select>
      `;
    }

      if (vheader9 == 'Content-Type' ) {

        document.getElementById("stuffhere09").innerHTML = `
        <select class="inputstyle" id="authEntry09" value="novalue">
        <option value="application/json">application/json</option>
        <option value="application/x-www-form-urlencoded">application/x-www-form-urlencoded</option>
        <option value="application/xhtml+xml">application/xhtml+xml</option>
        <option value="application/xml">application/xml</option>
        <option value="multipart/form-data">multipart/form-data</option>
        <option value="text/html">text/html</option>
        <option value="text/plain">text/plain</option>
        <option value="text/xml">text/xml</option>
        </select>
        `;
      }

      if (vheader9 == 'Authorization' ) {

        document.getElementById("stuffhere09").innerHTML = `
        <select class="inputstyle" id="aauthEntry09" value="novalue">
        <option value="Basic">Basic</option>
        <option value="Bearer">Bearer</option>
        <option value="Digest">Digest</option>
        </select>

        <input id="authEntry09" class='jsonvalue' type='text' value=''>
        `;

        document.getElementById('aauthEntry09').click();

      }

      if (vheader9 != 'novalue' & vheader9 != 'Accept' & vheader9 != 'Accept-Charset' & vheader9 != 'Accept-Encoding'  & vheader9 != 'Cache-Control' & vheader9 != 'Connection' & vheader9 != 'Content-Type' & vheader9 != 'Authorization' ) {
        document.getElementById("stuffhere09").innerHTML = '<input id="authEntry09" class="jsonvalue" type="text" value="">';
      }

};


function removeheaders01(elementId) {

  if (counter > 1) {

    // Header
    var lhename01 = "lbHeaderEntry0" + `${counter}`;
    var element = document.getElementById(`${lhename01}`);
    element.parentNode.removeChild(element);
// ---
    var hename01 = "HeaderEntry0" + `${counter}`;
    var element = document.getElementById(`${hename01}`);
    element.parentNode.removeChild(element);
// ---
    var hename02 = "stuffhere0" + `${counter}`;
    var element = document.getElementById(`${hename02}`);
    element.parentNode.removeChild(element);

    counter--;

  }

};


function jsonbst01() {
  if (chbox02.checked == true) {

    document.getElementById('advbtn01').innerHTML = '<span class="chbstyletxt01" for="chbox02">Advanced ON</span>';


    document.getElementById('jsonbstyle01').innerHTML = '';

      document.getElementById('jsonbstyle02').innerHTML = `
        <div class='inputbox'>
        <label for="valueId02">enter json</label>
        <textarea id="valueId02" class='inputboxx01' type='text' ></textarea>
        <br>
        </div>`;

      document.getElementById('smplbtn01').innerHTML = `<button id='apply01' onclick='bshow01()'>apply</button> <button id="smp01" class="testvb" onclick="testv()">sample value</button>`;



    document.getElementById('advrend01').innerHTML = `
      <button id="rmnstobbtn01" class="resetbutton" onclick="removeobjects01()">nested-obj -</button>
      <button id="addnstobbtn01" class="resetbutton" onclick="loadobjects01()">nested-obj +</button>
      <br>
      <label for="dataId01">obj to render</label>
      <input id="dataId01" class='jsonvalue' type="text">
      <div id='addnobj01'>
      </div>
      <label for="IncomingJson">incoming data</label>
      <textarea id="IncomingJson" class='result01' type='text' readonly></textarea>`;
    document.getElementById('advrend02').innerHTML = '<button id="def02" class="testvb" onclick="reset()">reset & defaults</button> <button id="rmhdrsbtn01" class="resetbutton" onclick="removeheaders01()">header -</button> <button id="ldhdrsbtn01" class="resetbutton" onclick="loadheaders01()">header +</button>';

  } if (chbox02.checked == false) {
    objcounter = 1;
    document.getElementById('advbtn01').innerHTML = '<span class="chbstyletxt01" for="chbox02">Advanced <span style="color:red; font-weight: bold;">OFF</span></span>';
    document.getElementById('smplbtn01').innerHTML = `<button id='apply01' onclick='bshow01()'>apply</button>`;


    document.getElementById('jsonbstyle01').innerHTML = `
      <label for="dataId01">data</label>
      <input id="dataId01" class='jsonvalue' type="text" >
      <br>`;

      document.getElementById('jsonbstyle02').innerHTML = `
        <div class='inputbox'>
        <label for="valueId01">value</label>
        <textarea id="valueId01" class='inputbox01' type='text' ></textarea>
        <br>
        </div>`;

    document.getElementById('advrend01').innerHTML = `
      <br>
      <label for="IncomingJson">incoming data</label>
      <textarea id="IncomingJson" class='result01' type='text' readonly></textarea>`;

    document.getElementById('advrend02').innerHTML = '<button id="def01" class="testvb" onclick="reset()">defaults</button>';
  }

};


var input01 = document.getElementById('actualdata01');
var input02 = document.getElementById('advrend01');
var strcv01 ='GET';

input01.addEventListener("keyup", function(event) {
  if (event.keyCode === 13) {
    event.preventDefault();
    strcv01 = document.getElementById('methodEntry').value

    document.getElementById('apply01').click();

  }
});

input02.addEventListener("keyup", function(event) {
  if (event.keyCode === 13) {
    event.preventDefault();
    strcv01 = document.getElementById('methodEntry').value
    document.getElementById('methodEntry').value = 'GET';

    document.getElementById('apply01').click();
  }
});

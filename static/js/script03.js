function loadJSON(method,url) {
   var xobj = new XMLHttpRequest();
       xobj.overrideMimeType("application/json");
   xobj.open(`${method}`, `http://virgocluster:8888/${url}`, true);
   xobj.setRequestHeader('Authorization', 'Basic [YWRtaW46YWRtaW4=]');
   xobj.onreadystatechange = function () {
         if (xobj.readyState == 4 && xobj.status == "200") {
           if (`${url}`=='BGjson02') {
             appendData(atob(xobj.responseText),'jsondata');
             console.log('Reboot');

           } else if (`${url}`=='BGjson03') {
             appendData(atob(xobj.responseText),'jsondata');
             console.log('Poweroff');

           } else if (`${url}`=='BGjson04') {
             appendData(atob(xobj.responseText),'jsondata');
             console.log('daemon-reload');

           } else {
             console.log(`Unknown Value of: ${url}`);
           }
          }
   };
   xobj.send(null);
}

// reboot
function BGjson02() {
  loadJSON('GET','Gjson02');
}

// Poweroff
function BGjsonP03() {
  loadJSON('GET','Gjson03');
}

// Daemon-reload
function BGjson04() {
  loadJSON('GET','Gjson04');
}

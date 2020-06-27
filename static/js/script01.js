var animcounter = 0;

var canvas = document.getElementById('canvas01')
var sfx = canvas.getContext('2d');

canvas.width = window.innerWidth;
canvas.height = 100;


function startchkrunanimation() {

  if (chbox03.checked == false) {
    animcounter = 2;
    clearInterval(render01);
    var render01 = ''
  }

  if (chbox03.checked == true) {
    if (animcounter == 0) {
      runanimation()
      console.log('animation start()');
    }
    animcounter = 1

  }

}


function runanimation() {
  animcounter++;

  // You cant believe how tempting it was to type hidden message in here... I didnt
  var letters = '01100001万龙乂01001001'
  var letters = letters.split('');

  var fontSize = 12
  var columns = canvas.width / fontSize;

  var drops = [];


  for (var i = 0; i < columns; i++) {
    drops[i] = 1;
    if (animcounter == 2) {
      break;
    }
  }

  function render01() {
    sfx.fillStyle = 'rgba(0, 23, 8, 0.1)';
    sfx.fillRect(0, 0, canvas.width, canvas.height);

    for (var i = 0; i < drops.length; i++) {

      var text = letters[Math.floor(Math.random() * letters.length)];
      sfx.fillStyle = '#00FF41';
      sfx.fillText(text, i * fontSize, drops[i] * fontSize);
      drops[i]++;
      if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
        drops[i] = 0;
      }
      if (animcounter == 2) {
        break;
      }

    }
  }

  // Loop the animation
  if (animcounter == 1) {
      var render01 = setInterval(render01, 90 );
  }


};

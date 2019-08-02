//Code by: Kushagra Agarwal
//https://cssdeck.com/item/602/html5-canvas-particles-web-matrix

// RequestAnimFrame: a browser API for getting smooth animations

// -------- harjoitus --------

// --- DEBUG ---
// console.log('JS log');
// console.error('JS error');
// console.warn('JS warning');

// --- variables ---
// var (bad global)

// Added ES6
// USE const unless you need to change the value

// let (re assign value)
// let score;
// score = 10;

// const (Locked value)
// const score = 10;

// console.log(score);

// --- Datatypes ---
// string, number, boolean, null, undefined

// const name = 'John'; // string
// const age = 30; // number
// const rating = 4.5; // number
// const isCool = true; // boolean
// const x = null; // null (empty variable with nothing in it, js bug claims it as a object)
// const y = undefined; // undefined (can be exquisitely defined)
// let z; // undefined (can be exquisitely defined)

// console.log(typeof name);

// Concentation
// console.log(`My name is ${name} and I am ${age}`);

// Concentation for variable
// const hello = `My name is ${name} and I am ${age}`;

// console.log(hello);

// const s = 'Hello World!';

// console.log(s.lenght);
//console.log(s.lenght);

// method needs (). Method is a basically a function that is assosiated with the object
// console.log(s.toUpperCase());
// console.log(s.toLowerCase());

// how many letters are passed from variable
// console.log(s.substring(0, 5));

// Combine methods inside () with .
// console.log(s.substring(0, 5).toUpperCase());


// --- Arrays ---

// Arrays - variables that hold multiple values


// const ss = 'technology, computers, it world, code';

// for db and stuff makes array separator -> ', '
// console.log(ss.split(', '));

// const numbers = new Array(1,2,3,4,5);


// const fruits = ['apples', 'oranges', 'pears', 10, true];
// add to array BAD
// fruits[5] = 'grapes';

// add to array GOOD
// add to top of array
// fruits.unshift('stawerries');
// add to end of array
// fruits.push('mango');

// remove from Array
// fruits.pop();

// check if something is Array exists
// console.log(Array.isArray(fruits));

// check the numerical value of index item of oranges
// console.log(fruits.indexOf('oranges'));

// console.log(fruits);
// console.log(fruits[1]);



// --- Object Literals ---

//const person = {
//   firstName: 'John',
//   lastName: 'doe',
//   age: 30,
//   hobbies: ['music', 'movies', 'sports'],
//   address: {
//     street: '50 main st',
//     city: 'Boston',
//     state: 'MA'
//   }
// }

// console.log(person);
// console.log(person.firstName, person.lastName);
// console.log(person.hobbies[1]);
// console.log(person.address.city);

// pulling stuff out
// const { firstName, lastName } = person;
// console.log(firstName);

// emedded object
// const { firstName, lastName, address: { city }} = person;
// console.log(city);

// add properties
// person.email = 'john@gmail.com';
// console.log(person);

// arrays of ojects

// video jatkuu kohdasta 34:30

// const todos = [
//   {
//     id: 1,
//     text: 'Take out trash',
//     isCompleted: true
//   },
//   {
//     id: 2,
//     text: 'Meeting with boss',
//     isCompleted: true
//   },
//   {
//     id: 3,
//     text: 'Dentist appt',
//     isCompleted: false
//   },
// ];

// console.log(todos[1].text);
// console.log(person.address.city);

// --- JSON ---

// Convert data to JSON
// const todoJSON = JSON.stringify(todos);
// console.log(todoJSON);


// --- loops ---

// FOR

// assignment of the *iterator / variable*
// i = 0;

// Condition that needs to be met (i = less than 10. starts at 0 and stops at 9)
// i < 10

// Condition that needs to be met (i = less than 10. starts at 0 and stops at 10)
// i <= 10

// increment just add 1 to this i variable
// i++

// for(let i = 0; i < 10; i++){
//   console.log(i);
// }

// for(let i = 0; i <= 10; i++){
//   console.log(`For Loop Number: ${i}`);
// }

// while

// make sure to be incrementing 'ii' or otherwise it will be never/ending loops
// with condition never met

//let ii = 0;
//while(ii < 10) {
//  console.log(`While Loop Number: ${ii}`);
//  ii++; add +1
//}

// loop trought Arrays

// made with FOR loop

// ii is less than todos.lenght because lenght will give the number of items in the array
// lenght can be used in a string and array (in this case its an array)
// ii < todos.lenght;

// this is really not the best method of looping arrays !!!
//for(let i = 0; i < todos.lenght; i++) {
//  console.log(todos[i].text);
//}

// better way
// first todo could be called anything
// second todo is the real thing

// for(let todo of todos) {
//   console.log(todo);
// }

// for(let todo of todos) {
//   console.log(text);
// }

// for(let todo of todos) {
//  console.log(todo.id);
// }

// video 42:32
// High order array methods SUGGESTED METHOD TO DO ANYKIND OF ITERATION WITH ARRAYS

// These are
// forEach:
// just loops trought them

// 42:40
// High order array methods take it as a parameter a fuction
// and this callback function can take in multiple parameters but the first one
// is gonna the variable you wanna use as each item or in this case each to do

// todos.forEach(function(todo) {
//   console.log(todo.text);
// });

// map
// allows to create a new array from an array

// code

// ------

// const todoText = todos.map(function(todo) {
//// will loop trought and return in a array just the text
//   return todo.text;
// });
// output
// console.log(todoText);

// ------

// return in a array completed values
// const todoCompleted = todos.filter(function(todo) {
//// will loop trought and return in a array completed values
//   return todo.isCompleted === true;
// });
// output
// console.log(todoCompleted);

// ------

// POWERFULL

// return in a array with 2 prerequisites -->
// isCompleted === true and from that only
// text values
// const todoCompleted = todos.filter(function(todo) {
//// will loop trought and return in a array completed values
//   return todo.isCompleted === true;
// }).map(function (todo) {
//   return todo.text;
// })
// output
// console.log(todoCompleted);

// filter
// allows to create a new array based on condition


// ------

// the == does not mach with Datatypes
// the === maches with Datatypes
// || 	or
// && 	and 	(x < 10 && y > 1) is true

// const x = 6;
// const y = 11;

// if (x > 5 && y > 10) {
//   console.log('x is more than 5 or y is more than 10');
// }

// if (x > 5 || y > 10) {
//   console.log('x is more than 5 or y is more than 10');
// }

// if (x > 10) {
//   console.log('x is 10');
// } else if (x > 10) {
//   console.log('x is greater than 10');
// } else {
//   console.log('x is less than 10');
// }

// -----

// ternery operator
// shorthand if statement used alot to assign variables based on a condition

 // const x = 9;
// we have condition if its true or if its not true
// const color = x > 10 ? 'red' : 'blue';

// console.log(color);

// -----

// we have condition if its true or if its not true
// const color = x > 10 ? 'red' : 'blue';

//switch(color) {
//   case 'red':
//     console.log('color is red');
//     break;
//   case 'blue':
//     console.log('color is blue');
//     break;
//   default:
//     console.log('color is not red or blue');
//     break;
// }

// console.log(color);

// --- functions
// fuction "addNums" inside the () we can put parameters in this case (num1, num2)
// in this example the "addNums" calculates values of num1 and num2
// because of "return num1 + num2;"


// with functions we can set default values for parameters (num1 = 1, num2 = 1) output is

// function addNums(num1 = 1, num2 = 1) {
//   return num1 + num2;
// }

// now I call the function to run with console log (also could be button)
// by adding (addNums(5, 5)); it will overwrite the default values and sum up 10 as a result
// console.log(addNums());


// --- Arrow function ES6 variation of the same command

// with functions we can set default values for parameters (num1 = 1, num2 = 1) output is

// const addNums = (num1 = 1, num2 = 1) => num1 + num2;

// now I call the function to run with console log (also could be button)
// by adding (addNums(5, 5)); it will overwrite the default values and sum up 10 as a result
// console.log(addNums());

// arraymethods ES6 variation
// todos.forEach((todo) => console.log(todo));

// ----- object oriented programming -----

// ES6 Classes

// class Person {
//   constructor(firstName, lastName, dob) {
//     this.firstName = firstName;
//     this.lastName = lastName;
//     this.dob = new Date(dob);
//   }
//   getBirthYear() {
//     return this.dob.getFullYear();
//   }
//   getFullName() {
//     return `Full Name: ${this.firstName} ${this.lastName}`;
//   }
// }

// Instantiate object
// const person1 = new Person('John', 'Doe', '1-2-1980');
// const person2 = new Person('Mary', 'Suxx', '2-1-1982');

// console.log(person1.getBirthYear());
// console.log(person2.getFullName());

// console.log(person2.getFullName());

// console.log(person1.dob.getFullYear());

// [] {} ${} `` =>












// -------- json base64 to website --------


function loadJSON(callback) {
  
   var xobj = new XMLHttpRequest();
       xobj.overrideMimeType("application/json");
   xobj.open('GET', 'http://10.42.0.87:8888/json', true); // Replace 'my_data' with the path to your file
   xobj.onreadystatechange = function () {
         if (xobj.readyState == 4 && xobj.status == "200") {
           appendData(atob(xobj.responseText));
         }
   };
   xobj.send(null);
}

function appendData(xobj) {
    var mainContainer = document.getElementById("myData");
    for (var i = 0; i < 1; i++) {
        var div = document.createElement("div");
        div.innerHTML = xobj
        mainContainer.appendChild(div);
    }
}



function init() {
loadJSON(function(response) {
 // Parse JSON string into object
   var actual_JSON = JSON.parse(response);
});
}


// -------- animation --------

window.requestAnimFrame = (function(){
  return  window.requestAnimationFrame       ||
		  window.webkitRequestAnimationFrame ||
		  window.mozRequestAnimationFrame    ||
		  window.oRequestAnimationFrame      ||
		  window.msRequestAnimationFrame     ||
		  function( callback ){
			window.setTimeout(callback, 1000 / 60);
		  };
})();

// Initializing the canvas
// I am using native JS here, but you can use jQuery,
// Mootools or anything you want
var canvas = document.getElementById("canvas");

// Initialize the context of the canvas
var ctx = canvas.getContext("2d");

// Set the canvas width and height to occupy full window
var W = window.innerWidth, H = window.innerHeight;
canvas.width = W;
canvas.height = H;

// Some variables for later use
var particleCount = 100,
	particles = [],
	minDist = 70,
	dist;

// Function to paint the canvas black
function paintCanvas() {
	// Set the fill color to black
	ctx.fillStyle = "rgba(0,0,0,1)";
	// This will create a rectangle of white color from the
	// top left (0,0) to the bottom right corner (W,H)
	ctx.fillRect(0,0,W,H);
}

// Now the idea is to create some particles that will attract
// each other when they come close. We will set a minimum
// distance for it and also draw a line when they come
// close to each other.

// The attraction can be done by increasing their velocity as
// they reach closer to each other

// Let's make a function that will act as a class for
// our particles.

function Particle() {
	// Position them randomly on the canvas
	// Math.random() generates a random value between 0
	// and 1 so we will need to multiply that with the
	// canvas width and height.
	this.x = Math.random() * W;
	this.y = Math.random() * H;


	// We would also need some velocity for the particles
	// so that they can move freely across the space
	this.vx = -1 + Math.random() * 2;
	this.vy = -1 + Math.random() * 2;

	// Now the radius of the particles. I want all of
	// them to be equal in size so no Math.random() here..
	this.radius = 4;

	// This is the method that will draw the Particle on the
	// canvas. It is using the basic fillStyle, then we start
	// the path and after we use the `arc` function to
	// draw our circle. The `arc` function accepts four
	// parameters in which first two depicts the position
	// of the center point of our arc as x and y coordinates.
	// The third value is for radius, then start angle,
	// end angle and finally a boolean value which decides
	// whether the arc is to be drawn in counter clockwise or
	// in a clockwise direction. False for clockwise.
	this.draw = function() {
		ctx.fillStyle = "gray";
		ctx.beginPath();
		ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);

		// Fill the color to the arc that we just created
		ctx.fill();
	}
}

// Time to push the particles into an array
for(var i = 0; i < particleCount; i++) {
	particles.push(new Particle());
}

// Function to draw everything on the canvas that we'll use when
// animating the whole scene.
function draw() {

	// Call the paintCanvas function here so that our canvas
	// will get re-painted in each next frame
	paintCanvas();

	// Call the function that will draw the balls using a loop
	for (var i = 0; i < particles.length; i++) {
		p = particles[i];
		p.draw();
	}

	//Finally call the update function
	update();
}

// Give every particle some life
function update() {

	// In this function, we are first going to update every
	// particle's position according to their velocities
	for (var i = 0; i < particles.length; i++) {
		p = particles[i];

		// Change the velocities
		p.x += p.vx;
		p.y += p.vy

		// We don't want to make the particles leave the
		// area, so just change their position when they
		// touch the walls of the window
		if(p.x + p.radius > W)
			p.x = p.radius;

		else if(p.x - p.radius < 0) {
			p.x = W - p.radius;
		}

		if(p.y + p.radius > H)
			p.y = p.radius;

		else if(p.y - p.radius < 0) {
			p.y = H - p.radius;
		}

		// Now we need to make them attract each other
		// so first, we'll check the distance between
		// them and compare it to the minDist we have
		// already set

		// We will need another loop so that each
		// particle can be compared to every other particle
		// except itself
		for(var j = i + 1; j < particles.length; j++) {
			p2 = particles[j];
			distance(p, p2);
		}

	}
}

// Distance calculator between two particles
function distance(p1, p2) {
	var dist, colorIndex;
		dx = p1.x - p2.x;
		dy = p1.y - p2.y;

	dist = Math.sqrt(dx*dx + dy*dy);

	// Draw the line when distance is smaller
	// then the minimum distance
	if(dist <= minDist) {
		// Draw the line
		ctx.beginPath();
    colorIndex = parseInt((100.0 * dist/minDist))+25;
		ctx.strokeStyle = "hsla(2," + colorIndex + "%,50%,"+ (1.2-dist/minDist) +")";
		ctx.moveTo(p.x, p.y);
		ctx.lineTo(p2.x, p2.y);
		ctx.stroke();

		// Some acceleration for the partcles
		// depending upon their distance
		var ax = dx/2000,
			ay = dy/2000;

		// Apply the acceleration on the particles
		p1.vx -= ax;
		p1.vy -= ay;

		p2.vx += ax;
		p2.vy += ay;
	}
}

// Start the main animation loop using requestAnimFrame
function animloop() {
	draw();
	requestAnimFrame(animloop);
}

animloop();

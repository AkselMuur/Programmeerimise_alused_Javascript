//console.log("Hello!");

//console.log("I like pizza!");

//window.alert("This is an alert!");
//window.alert("I like pizza!");

// This is a comment

/* This is also a comment
    Group comment control + K + C
*/

/* 1 TUND!!!!!!!!!!!!!!!!
document.getElementById("myH1").textContent = "Hello!";
document.getElementById("myP").textContent = "I like pizza!";

let x;
x = 123;

console.log(x);

let age = 25;
let price = 10.99;

console.log(`Your are ${age} years old`);
console.log(`The price is $${price}`);



let online = false;
let forSale = true;
let isStudent = true;

console.log("Bro is online");
console.log(forSale);
console.log(isStudent);
*/

// 2 TUND !!!!!!!!!!!!!!! variables
/*
let fullName = "Bro Code";
let age = 25;
let isStudent = false;

document.getElementById("p1").textContent = `Your name is ${fullName}`;
document.getElementById("p2").textContent = `Your are ${age} yeas old`;
document.getElementById("p3").textContent = `Enrolled: ${isStudent}`;

console.log(document);
console.log(window);

console.log(typeof isStudent);
*/
// arithmetic operators + - * / % ** ++ --

/*
let students = 16;

//students = students + 1;             //LIIDA
//students = students - 2;             //LAHUTA
//students = students * 2;             //KORRUTA
//students = students / 2;             //JAGA   
//students = students ** 2;            //ASTMES
//let extraStudents = students % 3;    //JÄÄK
//students +=2;
//students++
//students
Math.sqrt(students);           //RUUTJUUR EI oska tööle panna

console.log(students);


let result = 1+2*3+4**2;
console.log(result);
*/

// How to accept user input
/*
let username;

//username = window.prompt("Enter your username: ");
console.log(username);
document.getElementById("mySubmit").onclick = function() {
    username = document.getElementById("myText").value;
  //  console.log(username);
  document.getElementById("myH1").textContent = `Hello ${username}`;
}

*/

// type conversion
/*
//let age = window.prompt("How old are you?");
//age = Number(age);
//age +=1;
//console.log(`You are ${age} years old`);
//console.log(age,typeof age  );

let x = "pizza";
let y = "pizza";
let z = "pizza";

x = Number(x);
y = String(y);
z = Boolean(z);

console.log(x, typeof x);
console.log(y, typeof y);
console.log(z, typeof z);

*/

// constants

let pi = 3.14159;
let radius;
let circumference;

radius = window.prompt("Enter the radius of a circle: ");
radius = Number(radius);
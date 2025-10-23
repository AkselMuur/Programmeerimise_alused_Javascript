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
Math.sqrt(students);           //RUUTJUUR 
console.log(Math.sqrt(students));
*/

//let result = 1+2*3+4**2;
//console.log(result);

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
/*
let PI = 3.14159;
let radius;
let circumference;

//radius = window.prompt("Enter the radius of a circle: ");
//radius = Number(radius);

//circumference = 2 * pi * radius;

//console.log(`The circumference is ${circumference}`);

document.getElementById("mySubmit").onclick = function() {
    radius = document.getElementById("myText").value;
    radius = Number(radius);
    circumference = 2 * PI * radius;
    document.getElementById("myH3").textContent = `The circumference is ${circumference} cm`;
}

*/

// COUNTER PROGRAM
/*
const decreaseBtn = document.getElementById("decreaseBtn");
const resetBtn = document.getElementById("resetBtn");
const increaseBtn = document.getElementById("increaseBtn");
let count = 0;

increaseBtn.onclick = function() {
    count++;
    countLabel.textContent = count;
}

decreaseBtn.onclick = function() {
    count--;
    countLabel.textContent = count;
}

resetBtn.onclick = function() {
    count=0;
    countLabel.textContent = count;
}

*/

// MATH

/*
//console.log(Math.PI);
//console.log(Math.sqrt(16));
//console.log(Math.pow(2, 4));
//console.log(Math.E);

let x = 3;
let y = 2;
let z = 1;
//z = Math.round(x);
//z=Math.floor(x);
//z = Math.ceil(x);
//z = Math.trunc(x);
//z=Math.pow(y,x);
//z= Math.sqrt(x);
//z=Math.log(x);
//z=Math.sin(x);
//z=Math.cos(x);
//z=Math.tan(x);
//z=Math.abs(x);
//z = Math.sign(x);

let max = Math.max(x,y,z);
let min = Math.min(x,y,z);


console.log(min);
console.log(max);

*/

// IF STATEMENTS - JÄRGMINE PÄEV !!!!!!!!!!!!!!!!
/*
let age = 15;

if (age >=18) {

    console.log("You are old enough to use this site!");
}

else{
    console.log("You must be 18+ to enter this site!");

}

*/
/*
let time = 10;

if (time <12){
    console.log("Good morning!");
}
else {
    console.log("Good afternoon!");
}
    */
/*
let isStudent = true;

if(isStudent){
    console.log("You are a student!");
}
else {
    console.log("You are not a student!");
}
    */
/*
let age = 17;
let hasLicense = true;

if (age >= 16) {
  console.log("You are old enough to drive!");
  if (hasLicense) {
    console.log("You have your license!");
  } else {
    console.log("You do not have your license yet!");
  }
} else {
  console.log("You must be 16+ to have a license");
}
*/

/*
const myText=document.getElementById("myText");
const mySubmit = document.getElementById("mySubmit");
const reslutElement = document.getElementById("resultElement");
let age;

mySubmit.onclick=function(){

    age=myText.value;
    age=Number(age);
if(age>=100){
    reslutElement.textContent="You are TOO OLD to enter this site";
}
else if(age == 0){
    reslutElement.textContent="You can't enter. You were just born.";

}
else if (age >=18){
    reslutElement.textContent="You are old enough to enter this site!";

}

else if (age < 0 ){
    reslutElement.textContent="Your age can't be below 0";
}
else{reslutElement.textContent="You must be 18+ to enter this site!";
}

}
*/

// .checked property
/*
const myCheckBox = document.getElementById("myCheckBox");
const visaBtn = document.getElementById("visaBtn");
const mastercardBtn = document.getElementById("mastercardBtn");
const paypalBtn = document.getElementById("paypalBtn");
const submitBtn = document.getElementById("submitBtn");
const resultElement = document.getElementById("resultElement");

mySubmit.onclick = function () {
  if (myCheckBox.checked) {
    subResult.textContent = "You are SUBSCRIBED!";
  } else {
    subResult.textContent = "You are NOT SUBSCRIBED!";
  }
  if (visaBtn.checked) {
    paymentResult.textContent = "You are paying with VISA";
  } else if (mastercardBtn.checked) {
    paymentResult.textContent = "You are paying with MASTERCARD";
  } else if (payPalBtn.checked) {
    paymentResult.textContent = "You are paying with PAYPAL";
  } else {
    paymentResult.textContent = "You must select a payment method!";
  }
};

// ternary operator = a shortcut for an if statement
// helps to assign a variable based on a condition
// condition ? value if true : value if false
*/

//Rudimentary Calculator

const x = document.getElementById("x");
const y = document.getElementById("y");
const o = document.getElementById("o");

const go = document.getElementById("go");
const vastus = document.getElementById("vastus");

go.onclick = function () {
  if (o >= 100) {
    vastus.textContent = "You are TOO OLD to enter this site";
  } else if (o == a) {
    vastus.textContent = "Result "x+y;
  } else if (o >= 18) {
    vastus.textContent = "You are old enough to enter this site!";
  } else if (o < 0) {
    vastus.textContent = "Your age can't be below 0";
  } else {
    vastus.textContent = "Unknown operation";
  }
};

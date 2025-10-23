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

// terenary operator

/*
let age = 18;
let message = age >= 18 ? "You are an adult" : "You are a minor";

console.log(message);
*/
/*
let time = 16;
let greeting = time < 12 ? "Good morning" : "Good afternoon";

console.log(greeting);

*/

/*
let isStudent = true;
let message = isStudent ? "You are a student":"You are not a student";

console.log(message);
*/

/*
let purchaseAmount = 100;

let discount = purchaseAmount >= 100 ? 10:0;
console.log(`Your total is $${purchaseAmount-purchaseAmount*(discount/100)}`);

*/

// SWITCH - replacement for multiple IF statements
/*
let day =8;

switch(day){
    case 1:
        console.log("Monday");
        break;
case 2:
        console.log("Tuesday");
        break;
case 3:
        console.log("Wednesday");
        break;
case 4:
        console.log("Thursday");
        break;
case 5:
        console.log("Friday");
        break;
case 6:
        console.log("Saturday");
        break;
case 7:
        console.log("Sunday");
        break;
default:
    console.log(`${day} is invalid day`);
        
    }
    */
/*
let testScore = 85;

let letterGrade;

switch (true) {
  case testScore >= 90:
    letterGrade = "A";
    break;
  case testScore >= 80:
    letterGrade = "B";
    break;
  case testScore >= 70:
    letterGrade = "C";
    break;
  case testScore >= 60:
    letterGrade = "D";
    break;
  case testScore >= 50:
    letterGrade = "E";
    break;
  case testScore < 50:
    letterGrade = "F";
    break;
  default:
    letterGrade = "Invalid score";
}
console.log(`Your grade is ${letterGrade}`);
*/

// string methods - allow you to manipulate and work with strings

let userName = "BroCode";

// carAt(index) - leiab indeksil oleva tähe
console.log(userName.charAt(0));

userName.indexOf("o"); // leiab tähe indeksi
console.log(userName.indexOf("o"));

console.log(`${userName.length} length`); // pikkus
//

console.log(
  `${userName.padStart(
    10,
    0
  )} padStart(index1,index2) - pad a string wiht index2 until it reaches the lenght index1`
);

console.log(`${userName.repeat(4)} repeat(index) - repeats index many times`);

console.log(
  `${userName.replaceAll(
    "o",
    "a"
  )} replaceAll(index1,index2) - replaces all occurrences of a substring with a new substring`
);

console.log(
  `${userName.charCodeAt(
    4
  )} charCodeAt(index) - returns the Unicode of the character at the specified index`
);

console.log(
  `${userName.codePointAt(
    4
  )} codePointAt(index) - returns the Unicode code point value at the specified index`
);

let text1 = "Bro";
let text2 = "Code";
console.log(
  `${text1.concat(
    "",
    text2,
    "asd",
    "toomas"
  )} concat(index1,index2...) - joins two or more strings `
);

console.log(
  `${userName.slice(
    1,
    3
  )} slice(index1,index2) - slices out a portion of a string from index1 to index2`
);

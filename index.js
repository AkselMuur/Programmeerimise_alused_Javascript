//console.log("Hello!");

//const { use } = require("react");

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

// terenary operator            !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

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
/*
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
*/
/*

const fullName = "Aksel Müür Code"

//let firstName = fullName.slice(0,3);
//let lastName=fullName.slice(4,8);

//let firstChar =fullName.slice(0,1);
//let lastChar =fullName.slice(-1);
//console.log(lastChar);


let firstName=fullName.slice(0,fullName.indexOf(" "))
let middleName=fullName.slice(fullName.indexOf(" ")+1,fullName.lastIndexOf(" "))
let lastName=fullName.slice(fullName.lastIndexOf(" ")+1)


console.log(firstName);
console.log(middleName);
console.log(lastName)
*/

/*
const email= "aksel.muur@voco.ee"

let username = email.slice(0,email.indexOf("@"))
let extension = email.slice(email.indexOf("@")+1,(email.length))
let last = email.length-1;


console.log(username);
console.log(extension);
console.log(username,"@",extension);
console.log(last);

*/

// METHOD CHAINING
/*
let username = window.prompt("Enter your username: ");

username = username.trim().charAt(0).toUpperCase() + username.trim().slice(1).toLowerCase();


console.log(username);
document.getElementById("myH1").textContent = `Hello ${username}`;

*/

//      LOGICAL OPERATORS - used to combine or manupulate boolean values        !!!!!!!!!!!!!!!
// AND = &&
// OR = || ("option + <" on mac)
// NOT = !

//const temp = -20;
/*
if(temp> 0 && temp <=30){
    console.log("Weather is good")

}

else {
    console.log("Weather is BAD")
}
*/

/*
if (temp <= 0 || temp >= 30) {
  console.log("Weather is BAD");
} else {
  console.log("Weather is GOOD");
}
*/
/*
const isSunny=true;

if(!isSunny){
    console.log("It is cloudy");
}
else{
    console.log("It is sunny");
}


*/

//          strict inequality operator                  !!!!!!!!!!!!!!!
// = assignment operator
// == comparison operator (compare if values are equal)
// === strict equality operator (compare if values AND datatype are equal)
// != inequality operator
// !== strict inequality operator
/*
const PI = "3.14";

if (PI !== "3.14") {
  console.log("That is NOT PI");
} else {
  console.log("That is PI");
}
*/

//            WHILE LOOP                              !!!!!!!!!!!!!!!!!!!
//      while(condition){ }

/*
let username = "";
while(username === ""|| username === null){
  username = window.prompt('Enter your name');
}
console.log(`Hello ${username}`)
*/

/*
while(username === " "){
  console.log(`Hello sdg`)
}
*/

/*
let loggedIn = false;
let username;
let password;

while (!loggedIn) {
  username = window.prompt(`Enter your username`);
  password = window.prompt(`Enter your password`);
  
  if (username === "x" && password === "y") {
    loggedIn = true;
    console.log("You are logged in!");
    
  } else {
    console.log("Invalid credentials! Please try again");
    break;
  }
 
}
*/

//                FOR LOOP            !!!!!!!!!!
//      for (start;condition;step){ }
/*
let i = 10;
for (i; i > 0; i -= 5) {
  console.log(i);
}
*/

// break - catkestab loop-i
// continue - hüppab valemist üle.

/*
for (let i = 1; i <= 20; i++) {
  if (i == 13) {
    continue;
  } else {
    console.log(i);
  }
}
*/

//                  Number guessing game
/*
let x = Math.floor(Math.random() * 101);
console.log(`${x}`);
let guess;
let i = 0;
while (i < 5) {
  guess = window.prompt(`Your guess`);
  i++;
  if (guess > x) {
    console.log(`Too high!`);
  } else if (guess < x) {
    console.log(`Too low!`);
  } else {
    console.log(`Correct quess!`);
    break;
  }
}

*/
//                  Number guessing game
/*
const minNum = 1;
const maxNum = 100;
const answer = Math.floor(Math.random() * (maxNum - minNum + 1)) + minNum;
const numGuesses = 5;

console.log(`${answer}`);
let guess;
let i = 0;
while (i < numGuesses) {
  guess = window.prompt(`Guess a number`);
  i++;
  if (Number.isInteger(Number(guess))) {
    if (guess > answer) {
      console.log(`Too high!`);
    } else if (guess < answer) {
      console.log(`Too low!`);
    } else {
      console.log(`Correct quess!`);
      i = 10;
      break;
    }
  } else {
    console.log("Not a number!");
  }
}
if (i == 10) {
} else {
  console.log("Out of guesses!");
}
*/

//              FUNCTIONS             !!!!!!!!

/*
function happyBirthday(username,age){
  console.log("Happy birthday to you!");
  console.log("Happy birthday to you!");
  console.log(`Happy birthday dear ${username}!`);
  console.log("Happy birthday to you!");
  console.log(`You are ${age} years old`)
}

happyBirthday("BroCode",25);

*/
/*
function add(x, y) {
  let result = x + y;
  return result;
}

let answer1 = add(3, 3);

console.log(answer1);

function add(x, y) {
  return x + y;
}

let answer2 = add(2, 2);

console.log(answer2);

function isEven(number) {
  if (number % 2 === 0) {
    return true;
  } else {
    return false;
  }
}

console.log(isEven(2));

function isValidEmail(email) {
  if (email.includes("@")) {
    return true;
  } else {
    return false;
  }
}

console.log(isValidEmail("aksel.muur@voco.ee"));

//terenary

function isValidEmail(email) {
  return email.includes("@") ? true : false;
}

console.log(isValidEmail("aksel.muurvoco.ee"));
*/

//              VARIABLE SCOPE              !!!!!!!!!!!!!!!!!!!!!!!!

/*
let x = 3;

function function1() {
  //let x = 1;
  console.log(x);
}

function function2() {
  let x = 2;
  console.log(x);
}

function1();
x = 5;
function2();
*/

//      ARRAY                     !!!!!!!!!!

/*
let fruits=["apple","orange","banana"];


console.log(fruits);
console.log(fruits[0]);
console.log(fruits[1]);
console.log(fruits[4]);

fruits[1]="coconut"
console.log(fruits);
console.log(fruits[1]);

fruits.push("cucumber"); //lisab lõppu
console.log(fruits);

fruits.pop(); // kustutab lõpust
console.log(fruits);

fruits.unshift("mango"); // lisab algusesse
console.log(fruits);

fruits.shift();   //kustutab algusest
console.log(fruits);
*/

/*
let fruits=["apple","orange","banana","coconut"];
let index=fruits.indexOf("apple");


let numOfFruits=fruits.length;    //ei pane sulge lõppu
console.log(numOfFruits);
console.log(index);

index=fruits.indexOf("purple");
console.log(index);

*/
/*

let fruits=["apple","orange","banana","coconut"];

for(let i =0;i<fruits.length;i++){
  console.log(fruits[i]);
}


for(i =fruits.length-1;i>=0;i--){
  console.log(fruits[i]);
}


for(let fruit of fruits){         //shortcut list
  console.log(fruit);
}

fruits.sort();
console.log(fruits);



fruits.sort().reverse();  //saad funktsioone punktiga üksteise otsa chainida
console.log(fruits);

*/

//                SPREAD OPERATOR       ...spread            !!!!!!!!!!!
//  unpacks elements in arrays

/*

let numbers=[1,2,3,4,5];
let maximum=Math.max(...numbers);
let minimum=Math.min(...numbers);


console.log(numbers);
console.log(...numbers);

console.log(maximum);
console.log(minimum);
*/

/*
let username="Bro code";

let letters=[...username].join("-");

console.log(letters);
*/

/*
let fruits=["apple","orange","banana"];
let vegetables=["carrots","celery","potatoes"];

let foods=[...fruits[0],...vegetables,"eggs","milk"];

console.log(fruits);
console.log(foods);
*/

//                      rest parameters   ...rest - bundles separet elements into an array,
//                                                  opposite of spread operator.
//                                                  must be in function parameter otherwise
//                                                  it is spread function

/*
function openFridge (...foods){
  console.log(...foods)
}

function getFood (...foods){
   return foods
}


const food1 ="pizza"
const food2 ="hamburger"
const food3 ="hotdog"
const food4 ="shushi"
const food5 ="ramen"


openFridge(food1,food2,food3,food4,food5)

const foods =getFood(food1,food2,food3,food4,food5)

console.log(foods)
*/
/*
function sum(...numbers){
  let result = 0
  for(let number of numbers){
    result += number
  }
  return result
}
function getAverage(...numbers){
  let result = 0
  for(let number of numbers){
    result += number
  }
  return result/numbers.length;
}

const total = getAverage(75,100,85,90,50)
console.log(total)
*/
/*
const total=sum(1,2,3,4,5)
console.log(`Your total is $${total}`)
*/
/*

function combineString(...Strings){
  return Strings.join(" ")
}

const fullName = combineString("Mr.","Spongebob","Squarepants","III");

console.log(fullName)

*/

// Dice roller

/*
function rollDice() {
  const numofDice = document.getElementById("myText").value;
  const diceResult = document.getElementById("DieResult");
  const diceImages = document.getElementById("DieResult");
  //console.log(numofDice);
  //console.log(diceResult);
  const values = [];
  const images = [];
  for (let i = 0; i < numofDice; i++) {
    let max = 6;
    // console.log(Math.floor(Math.random() * max + 1));
    const value = Math.floor(Math.random() * max + 1);
    values.push(value);
    images.push(`<img src="Dice/${value}.png" alt="Dice ${value}">`);
  }
  //console.log(values);
  //console.log(images);

  DiceResult.textContent = `dice:${values.join(", ")}`;
  DiceImages.innerHTML = images.join("");
}
*/

//          CALLBACK = function that passes an argument to another function !!!!!

/*
hello(goodbye);

function hello(callback) {
  console.log("Hello!"); 
  callback();
}
function wait() {
  console.log("Wait!");
}

function leave() {
  console.log("Leave!");
}

function goodbye() {
  console.log("Goodbye!");
}
*/

/*

sum(displayConsole,1,2)
sum(displayPage,1,2)


function sum(callback,x,y){
let result = x+y
callback(result)
}

function displayConsole(result){
  console.log(result)
}

function displayPage(result){
  document.getElementById("myH1").textContent=result
}

*/

//            forEach() = method used to iterate over the elements      !!!!!!!!!!!!!!!!
/*                        of an array and apply a specified function (callback) 
                      to each element
                      
                      array.forEach(callback)
                      element, index, array are provided
                      works only with arrays
                      */
/*
let numbers = [1, 2, 3, 4, 5];

numbers.forEach(square);
numbers.forEach(display);

function display(element) {
  console.log(element);
}

function triple(element, index, array) {
  array[index] = element * 3;
}

function square(element,index,array){
  array[index]=Math.pow(element,2);
}
*/

/*
let fruits = ["apple", "orange", "banana", "coconut"];

fruits.forEach(UpperCase);
fruits.forEach(display);
fruits.forEach(lowerCase);
fruits.forEach(display);
fruits.forEach(capitalize);
fruits.forEach(display);

function UpperCase(element, index, array) {
  array[index] = element.toUpperCase();
}
function lowerCase(element, index, array) {
  array[index] = element.toLowerCase();
}

function capitalize(element, index, array) {
  array[index] = element.charAt(0).toUpperCase() + element.slice(1);
}

function display(element) {
  console.log(element);
}
*/

//                .map() = accepts a callback and applies that function. !!!!!!!!!!!!!!
//                         to each element of an array, then return a new array

/*
const numbers = [1,2,3,4,5,6];

const squares = numbers.map(square);
const cubes = numbers.map(cube);

console.log(squares);
console.log(cubes);

function square(element){
  return Math.pow(element, 2)
}
function cube(element){
  return Math.pow(element, 3)
}
*/

/*
const students = ["Spongebob", "Patrick", "Squidward", "Sandy"];
const studentsUpper = students.map(upperCase);
const studentLower = students.map(lowerCase);

function upperCase(element) {
  return element.toUpperCase();
}
function lowerCase(element) {
  return element.toLowerCase();
}

console.log(studentsUpper);
console.log(studentLower);
*/

/*
const dates = ["2024-1-10", "2025-2-20", "2026-3-30"];
const formattedDates = dates.map(formatDates);

function formatDates(elements) {
  const parts = elements.split("-");
  return `${parts[2]}.${parts[1]}.${parts[0]}`;
}

console.log(formattedDates);
console.log(dates.map(formatDates));

console.log("2024-1-10".split("-"));
*/

//            .filter() = creates a new array by filtering out elements !!!!!!!!!!!!!

/*

let numbers = [1,2,3,4,5,6,7];
let evenNums = numbers.filter(isEven);
let oddNums = numbers.filter(isOdd);


function isEven(element){
  return element % 2 === 0;
}
function isOdd(element){
  return element % 2 !== 0;
}



console.log(evenNums);
console.log(oddNums);
*/
/*
const ages=[16,17,18,18,19,20,60];
let adult=ages.filter(isAdult);
let children=ages.filter(isChild);

function isAdult(elements){
  return elements >=18 && !isNaN(elements);
}

function isChild(elements){
  return elements <18 && !isNaN(elements);
}


console.log(adult);

console.log(children);
*/

/*
const words=["apple", "orange", "banana", "kiwi", 
  "pomegranate","coconut"]

let small = words.filter(getShortWords);
let long = words.filter(getLongWords);

  function getShortWords(elements){
    return elements.length <=6;
  }  
  console.log(small);

  function getLongWords(elements){
    return elements.length >=6;
  }
  console.log(long);      //  long ei töötanud
*/

// .reduce() = reduces the elements of an array to a single value !!!!!!!!
//              .reduce(accumulator, element, index, array)

/*

const prices = [5,30,10,25,15,20];

const total = prices.reduce(sum);

console.log(`${total}`);

function sum( accumulator, element){
return accumulator + element;
}

*/

/*
const grades = [75,50,90,80,65,95];


const maximum = grades.reduce(getMax);

function getMax(accumulator,element){
  return Math.max(accumulator,element);
}

console.log(maximum);

const minimum = grades.reduce(getMin);

function getMin(accumulator,element){
  return Math.min(accumulator,element);
}

console.log(minimum);
*/

//    function declaration = define a reusable block of code            !!!!!!!!!!!
/*                          that performs a specific task

old version--
function hello(){
console.log("Hello!")
}

      function expressions = a way to define functions as valuse or variables !!!!!!!!

*/
/*
const hello = function(){
  console.log("Hello!");
}

hello();

setTimeout(hello,3000);
*/

/*
setTimeout(function(){
  console.log("Hello!")},3000);

*/
/*
const numbers =[1,2,3,4,5,6];
const squares = numbers.map(square);

console.log(squares);

function square(element){
  return Math.pow(element,2);
}
*/
/*
const numbers =[1,2,3,4,5,6];
const squares = numbers.map(function(element){
  return Math.pow(element,3);
});

console.log(squares);
*/

//              arrow functions = a concise way to write function expressions !!!!!!!!!!!
/*                                good for simple functions that you use only once
                                  (parameters) = > some code


*/
/*
function hello(){
  console.log("Hello");
}

hello();
*/
/*
const hello = function(){
  console.log("Hello");
}

hello();
*/

//const hello = () => console.log("Hello");

// if more than 1 row then needs curly braces
/*
const hello = () => {console.log
("Hello");
}
hello();
*/

/*
const hello = (name,age) => {console.log(`Hello ${name}`)
console.log(`You are ${age} old`)};

hello("Bro",25);
*/
/*
setTimeout(hello, 3000);
function hello(){
  console.log("Hello");
}
*/
/*
setTimeout(function(){
  console.log("Hello");
},3000);
*/

/*
setTimeout( () => console.log("Hello"),3000);
*/
/*
const numbers = [1, 2, 3, 4, 5, 6];

const squares = numbers.map((element) => Math.pow(element, 2));

console.log(squares);
*/

//              Object = A collection of related properties and/or methods    !!!!!!!
/*                      Can represent real word object (people, products, places)
                        object={key:value,function()}
*/

/*
const person1 ={
  firstName: "Spongebob",
  lastName: "Squarepants",
  age:30,
  isEmployed:true,
  sayHello:function(){console.log("Hi! I am Spongebob!")},
  sayBye:function(){console.log("Goodbye")},
  eat:function(){console.log("I am eating a Krabby Patty")}
}

console.log(person1.firstName);
console.log(person1.lastName);
console.log(person1.age);
console.log(person1.isEmployed);


const person2 ={
  firstName: "Patrick",
  lastName: "Star",
  age:42,
  isEmployed:false,
  sayHello:function(){console.log("Hey! I'm Patrick...")},
  sayBye:function(){console.log("Bye...")},
  eat:function(){console.log("I am eating roast beef, chicken and pizza")}
}

console.log(person2.firstName);
console.log(person2.lastName);
console.log(person2.age);
console.log(person2.isEmployed);

person1.sayHello();
person2.eat();


*/

//          this = reference to the object where TIHS is used       !!!!!!!!!!!!
/*                  (the object depends on the immediate context)
                    person.name = this.name
                    Does not work with arrow functions
                  */

/*                   
const person1 = {
  firstName: "Spongebob",
  lastName: "Squarepants",
  age: 30,
  isEmployed: true,
  favFood:"hamburgers",
  sayHello: function () {
    console.log(`Hi! I am ${this.firstName}`)
  },
  fav: function () {
    console.log(`Hi! I am ${this.favFood}`)
  },
  sayBye: function () {
    console.log("Goodbye");
  },
  eat: function () {
    console.log("I am eating a Krabby Patty");
  },
};

person1.sayHello();
person1.fav();
*/

//          constructor = special method for defining the       !!!!!!!!!!!!!!!!
/*                      properties and methods of objects
 */
/*
function Car(make, model, year, color) {
  this.make = make;
  this.model = model;
  this.year = year;
  this.color = color;
  this.drive = function () {
    console.log(`You drive the ${this.model}`);
  };
}

const car1 = new Car("Ford", "Mustang", 2024, "red");
const car2 = new Car("Chevrolet", "Camaro", 2025, "blue");
const car3 = new Car("Doge", "Charger", 2026, "silver");

car2.drive();
*/

// class = (ES6 feature) provides a more structured and cleaner way to work     !!!!!!!!!!!!!!
//          with objects compared to traditional constructor functions

/*
class Product {
  constructor(name, price) {
    this.name = name;
    this.price = price;
  }
  displayProduct() {
    console.log(`Product: ${this.name}`);
    console.log(`Product: ${this.price.toFixed(2)}`);
  }
  calculateTotal(sakesTax) {
    return this.price + this.price * salesTax;
  }
}

const salesTax = 0.05;
const product1 = new Product("Shirt", 19.99);
const product2 = new Product("Pants", 22.5);

product2.displayProduct();

const total = product2.calculateTotal(salesTax);
console.log(`Total price (with tax): $${total.toFixed(2)}`);

*/

// static = keyword that defines properties or methds that belong to      !!!!!!!!!!!!!!!!!!
//          a class itself rather than the objects created from that
//          class( class owns anything static, not the objects)

/*
class MathUtil {
  static PI = 3.14159;

  static getDiameter(radius) {
    return radius * 2;
  }

  static getcircumference(radius) {
    return 2 * this.PI * radius;
  }
  static getArea(radius) {
    return this.PI * radius * radius;
  }
}

console.log(MathUtil.PI);
console.log(MathUtil.getDiameter(10));
console.log(MathUtil.getcircumference(10));
console.log(MathUtil.getArea(10));

*/

/*
class User {
  static userCount = 0;

  constructor(username) {
    this.username = username;
    User.userCount++;
  }
  sayHello() {
    console.log(`Hello, my username is ${this.username}`);
  }
  static getUserCount() {
    console.log(`There are ${User.userCount} users online`);
  }
}

const user1 = new User("Spongebob");
const user2 = new User("Sandy");
const user3 = new User("Patric");

console.log(user1.username);
console.log(User.userCount);
user2.sayHello();
User.getUserCount();

*/

// inheritance = allows a new class to inherit properties and methods     !!!!!!!!!!!!!!!!
//                from an existing class (parent -> child)
//                helps with code reusability

/*
class Animal {
  alive = true;

  eat() {
    console.log(`This ${this.name} is eating`);
  }
  sleep() {
    console.log(`This ${this.name} is sleeping`);
  }
}

class Rabbit extends Animal {
  name = "rabbit";
  run() {
    console.log(`This ${this.name} is running`);
  }
}
class Fish extends Animal {
  name = "fish";
  swim() {
    console.log(`This ${this.name} is swimming`);
  }

}
class Hawk extends Animal {
  name = "hawk";
  fly() {
    console.log(`This ${this.name} is flying `);
  }
}

const rabbit = new Rabbit();
const fish = new Fish();
const hawk = new Hawk();

rabbit.alive = false;

console.log(rabbit.alive);
rabbit.eat();
rabbit.sleep();
rabbit.run();
rabbit.swim();

*/

// super = keyword is used in classes to call the constructor or acess the    !!!!!!!!!!!
//         properties and methods of a parent (superclass)
//        this = this object
//        super = the parent

/*
class Animal {
  alive = true;

  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  move(speed) {
    console.log(`The ${this.name} moves at a speed of ${speed}km/h`);
  }

  eat() {
    console.log(`This ${this.name} is eating`);
  }
  sleep() {
    console.log(`This ${this.name} is sleeping`);
  }
}

class Rabbit extends Animal {
  name = "rabbit";
  constructor(name, age, runSpeed) {
    super(name, age);
    this.name = name;
    this.age = age;
    this.runSpeed = runSpeed;
  }
  run() {
    console.log(`This ${this.name} is running`);
    super.move(this.runSpeed);
  }
}
class Fish extends Animal {
  name = "fish";
  constructor(name, age, swimSpeed) {
    super(name, age);
    this.name = name;
    this.age = age;
    this.swimSpeed = swimSpeed;
  }
  swim() {
    console.log(`This ${this.name} is swimming`);
  }
}
class Hawk extends Animal {
  name = "hawk";
  constructor(name, age, flySpeed) {
    super(name, age);
    this.name = name;
    this.age = age;
    this.flySpeed = flySpeed;
  }
  fly() {
    console.log(`This ${this.name} is flying `);
  }
}

const rabbit = new Rabbit();
const fish = new Fish();
const hawk = new Hawk();

rabbit.alive = false;

const rabbit1 = new Rabbit("rabbit", 1, 25);
const fish1 = new Fish("Fish", 2, 12);
const hawk1 = new Hawk("Hawk", 3, 50);


console.log(rabbit.alive);
rabbit1.eat();
rabbit1.sleep();
rabbit1.run();
//rabbit.swim();


console.log(rabbit1.name);
console.log(rabbit1.age);
console.log(rabbit1.runSpeed);

rabbit1.run();

*/

// getter = special method that makes a property readable     !!!!!!!!!!!!!!!!!
// setter = special method that makes a property writable

// validate and modify a value when reading/writing a property

/*
class Rectangle {
  constructor(width, height) {
    this.width = width;
    this.height = height;
  }
  set width(newWidth) {
    if (newWidth > 0) {
      this._width = newWidth;
    } else {
      console.log("Width must be a positive number");
    }
  }
  set height(newHeigth) {
    if (newHeigth > 0) {
      this._height = newHeigth;
    } else {
      console.log("Width must be a positive number");
    }
  }

  get width() {
    return `${this._width.toFixed(1)}cm`;
  }

  get height() {
    return `${this._height.toFixed(1)}cm`;
  }

  get area(){
    return `${this._width*this._height.toFixed(1)}cm2`;
  }
}

const rectangle = new Rectangle(3, 4);

console.log(rectangle.width);
console.log(rectangle.height);
console.log(rectangle.area);
*/

/*
class Person {
  constructor(firstName, lastName, age) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
  }

  set firstName(newFirstName) {
    if (typeof newFirstName === "string" && newFirstName.length > 0) {
      this._firstName = newFirstName;
    } else {
      console.error("First name must be a non-empty string");
    }
  }
  set lastName(newLastName) {
    if (typeof newLastName === "string" && newLastName.length > 0) {
      this._LastName = newLastName;
    } else {
      console.error("Last name must be a non-empty string");
    }
  }
  set age(newAge) {
    if (typeof newAge === "number" && newAge >= 0) {
      this._age = newAge;
    } else {
      console.error("Age name must be a non-negative number");
    }
  }
  get firstName() {
    return this._firstName;
  }
  get lastName() {
    return this._LastName;
  }
  get fullName() {
    return this._firstName + " " + this._LastName;
  }
  get age() {
    return this._age;
  }
}

const person = new Person("Spongebob", "Squarepants", 30);

console.log(person.firstName);
console.log(person.lastName);
console.log(person.fullName);
console.log(person.age);
*/

// destructuring = extract values from arrays and objects, then assign them to
//                variables in a convenient way
//                [] = to perform array destructuring
//                {} = to perform object destructuring

// example 1
/*
let a = 1;
let b = 2;

[a,b]=[b,a];
console.log(a);
console.log(b);
*/

// example 2
/*
const colors = ["red","green","blue", "black", "white"];
[colors[0],colors[4]]=[colors[4],colors[0]];

console.log(colors);
*/

//example 3
/*
const colors = ["red","green","blue", "black", "white"];

const [firstColor, secondColor, thirdColor, ...extraColors]=colors;

console.log(firstColor);
console.log(secondColor);
console.log(thirdColor);
console.log(extraColors);
*/

// example 4
/*
const person1 = {
  firstName: "Spongebob",
  lastName: "SquarePants",
  age: 30,
  job: "Fry Cook",
}

const person2 = {
  firstName: "Patrick",
  lastName: "Star",
  age: 34,
  }

  const {firstName, lastName, age, job="Unemployed"}= person2;

  console.log(firstName);
    console.log(lastName);
      console.log(age);
        console.log(job);
*/
// example 5
/*
function displayPerson({firstName, lastName, age, job="Unemployed"}){
  console.log(`name: ${firstName} ${lastName}`);
  console.log(`age: ${age}`);
  console.log(`job: ${job}`);
}

const person1 = {
  firstName: "Spongebob",
  lastName: "SquarePants",
  age: 30,
  job: "Fry Cook",
}

const person2 = {
  firstName: "Patrick",
  lastName: "Star",
  age: 34,
  }

  displayPerson(person1);
*/

// Nested objekts = Objects inside of other Objects. Allows you to
//                  represent more complex data structures
//                   Child object is enclosed by a Parent Object

//                  Person{Address{}, ContactInfo{}}
//                  ShoppingCart{Keyboard{}, Mouse{}, Monitor{}}
//                  classe kutsud välja operaatoriga "new"

/*
const person = {
  fullName: "Spongebob Squarepants",
  age: 30,
isStudent: true,
hobbies:["karate", "jellyfishing", "cooking"],
address: {
  street: "124 Conch St.",
  city: "Bikini Bottom",
  country: "Int. Water"
}
}

console.log(person.fullName)
console.log(person.age)
console.log(person.isStudent)
console.log(person.hobbies[2])
console.log(person.address.country)

for(const property in person.address){
  console.log(person.address[property]);
}

*/

/*
class Person {
  constructor(name,age, ...address){
    this.name=name;
    this.age = age;
    this.address= new Address(...address);
  }
}

class Address{
  constructor(street, city, country){
    this.street=street;
    this.city=city;
    this.country=country;
  }
}

const person1 = new Person("Spongebob", 30, "124 Conch St.", "Bikini bottom",
  "Int. Waters"
)

const person2 = new Person("Patrick", 37, "128 Conch St.", "Bikini bottom",
  "Int. Waters"
)

const person3 = new Person("Squidward", 45, "126 Conch St.", "Bikini bottom",
  "Int. Waters"
)

console.log(person3);
console.log(person3.name);
console.log(person3.address);
console.log(person3.address.street);
console.log(person3.address.city);
console.log(person3.address.country);

*/
/*
const fruits = [
  { name: "apple", color: "red", calories: 95 },
  { name: "orange", color: "orange", calories: 45 },
  { name: "banana", color: "yellow", calories: 105 },
  { name: "coconut", color: "white", calories: 159 },
  { name: "pineapple", color: "yellow", calories: 37 },
];

/*
fruits.push({name: "grapes", color:"purple", calories: 62})
fruits.pop();
fruits.splice(1,2);
console.log(fruits);
*/
// fruits.forEach(fruit => console.log(fruit));
/*
const fruitNames = fruits.map((fruit) => fruit.name);
const fruitColors = fruits.map((fruit) => fruit.color);

console.log(fruitNames);
console.log(fruitColors);

const yellowFruits = fruits.filter((fruit) => fruit.color === "yellow");
const lowCalFruits = fruits.filter((fruit) => fruit.calories < 100);

console.log(yellowFruits);
console.log(lowCalFruits);

const maxFruit = fruits.reduce((max, fruit) =>
  fruit.calories > max.calories ? fruit : max
);
const minFruit = fruits.reduce((min, fruit) =>
  fruit.calories < min.calories ? fruit : min
);
// koolon ":" on OR funktsioon, kui funktsioon tõene siis anna fruit muul juhul max

console.log(maxFruit);
console.log(minFruit);
*/

// eventlistener - listen for specific events to create interactive web pages event. !!!!!!
//                  click, mouseover, mouseout
//                  .addEventListener(event, callback);

/*
const myBox = document.getElementById("myBox");
const myButton = document.getElementById("myButton");

/*
function changeColour(event){
  event.target.style.backgroundColor = "tomato";
  event.target.textContent="OUCH!";
}

myBox.addEventListener("click",changeColour);
*/
/*
myBox.addEventListener("click", (event) => {
  event.target.style.backgroundColor = "tomato";
  event.target.style.fontFamily = "Calibri";

  event.target.textContent = "OUCH!";
});

myBox.addEventListener("mouseover", (event) => {
  event.target.style.backgroundColor = "yellow";
  event.target.textContent = "Don't do it";
});

myBox.addEventListener("mouseout", (event) => {
  event.target.style.backgroundColor = "lightgreen";
  event.target.textContent = "Click Me";
});


myButton.addEventListener("click", (event) => {
  event.target.style.backgroundColor = "tomato";
  event.target.style.fontFamily = "Calibri";

  event.target.textContent = "OUCH!";
});

myButton.addEventListener("mouseover", (event) => {
  event.target.style.backgroundColor = "yellow";
  event.target.textContent = "Don't do it";
});

myButton.addEventListener("mouseout", (event) => {
  event.target.style.backgroundColor = "lightgreen";
  event.target.textContent = "Click Me";
});
*/

// eventListener - Listen for specific events to create interactive web pages !!!!!!!!!!!!
//                  events: keydown, keyup
//                  document.addEventListener(event,callback);
/*
const myBox = document.getElementById("myBox");
const moveAmount = 50;
let x = 0;
let y = 0;

document.addEventListener("keydown", (event) => {
  myBox.textContent = "No!";
  myBox.style.backgroundColor = "Blue";
});

document.addEventListener("keyup", (event) => {
  myBox.textContent = "Yay!";
  myBox.style.backgroundColor = "Orange";
});

document.addEventListener("keydown", (event) => {
  //console.log(event.key);
  event.preventDefault();
  if (event.key.startsWith("Arrow")) {
    switch (event.key) {
      case "ArrowUp":
        y -= moveAmount;
        break;
      case "ArrowDown":
        y += moveAmount;
        break;
      case "ArrowLeft":
        x -= moveAmount;
        break;
      case "ArrowRight":
        x += moveAmount;
        break;
    }

    myBox.style.top = `${y}px`;
    myBox.style.left = `${x}px`;
  }
});
*/
//        VISIBILITY                          !!!!!!!!!!!!!!!!!!!!!!!!!

/*
const myButton =document.getElementById("myButton");
const myImg=document.getElementById("myImg");

myButton.addEventListener("click",event =>{
 if(myImg.style.visibility === "hidden"){
  myImg.style.visibility="visible";
  myButton.textContent ="Hide";
 }
 else{
  myImg.style.visibility="hidden";
  myButton.textContent ="Show"
 }
})
*/

//    NodeList = Static collection of HTML elements by (id, class, element) !!!!!!!!!!
//                Can be created by using querySlectorAll()
//                Similar to an array, but no (map, finter, reduce)
//                NodeList wont update to automatically reflext changes
/*
let buttons = document.querySelectorAll(".myButtons");

buttons.forEach((button) => {
  button.style.backgroundColor = "green";
  button.textContent += " HI!";
});

buttons.forEach((button) => {
  button.addEventListener("click", (event) => {
    event.target.style.backgroundColor = "tomato";
  });
});

buttons.forEach((button) => {
  button.addEventListener("mouseover", (event) => {
    event.target.style.backgroundColor = "hsl(205,100%,40%)";
  });
});

buttons.forEach((button) => {
  button.addEventListener("mouseout", (event) => {
    event.target.style.backgroundColor = "hsl(205,100%,60%)";
  });
});

const newButton = document.createElement("button");
newButton.textContent = "Button 5";
newButton.classList = "myButtons";
document.body.appendChild(newButton);

buttons = document.querySelectorAll(".myButtons");
console.log(buttons);

buttons.forEach((button) => {
  button.addEventListener("click", (event) => {
    event.target.remove();
    buttons=document.querySelectorAll(".myButtons");
    console.log(buttons);
  });
});
*/

// classList = Element property in JavaScript used to interact with an element's !!!!!!!!!!!
//             list of classes (CSS classes). Allows you to make reusable classes
//              for many elements acriss your webpage.

// add()
// remove()
// toggle(Remove if present, Add if not)
// replace(oldClass, newClass)
// contains()
/*
const myButton = document.getElementById("myButton");

//myButton.classList.add("enabled");
//myButton.classList.remove("enabled");
//myButton.classList.add("hover");
/*
myButton.addEventListener("mouseover", (event) => {
  event.target.classList.toggle("hover");
});
myButton.addEventListener("mouseout", (event) => {
  event.target.classList.toggle("hover");
});
*/
/*
const myH1 = document.getElementById("myH1");
myButton.classList.add("enabled");
/*
myH1.classList.add("enabled");

myH1.addEventListener("click", (event) => {
  if (event.target.classList.contains("disabled")) {
    event.target.textContent += "No!";
  } else {
    event.target.classList.replace("enabled", "disabled");
  }
});

myButton.addEventListener("click", (event) => {
  if (event.target.classList.contains("disabled")) {
    event.target.textContent += "No!";
  } else {
    event.target.classList.replace("enabled", "disabled");
  }
});
*/
/*
let buttons = document.querySelectorAll(".myButtons");

buttons.forEach((button) => {
  button.classList.add("enabled");
});

buttons.forEach((button) => {
  button.addEventListener("mouseover", (event) => {
    event.target.classList.toggle("hover");
  });
});
buttons.forEach((button) => {
  button.addEventListener("mouseout", (event) => {
    event.target.classList.toggle("hover");
  });
});

/*
buttons.forEach((button) => {
  button.addEventListener("click", (event) => {
    event.target.classList.replace("enabled", "disabled");
  });
});
*/
/*
buttons.forEach((button) => {
  button.addEventListener("click", (event) => {
    if (event.target.classList.contains("disabled")) {
      event.target.textContent += " No!";
    } else {
      event.target.classList.replace("enabled", "disabled");
    }
  });
});
*/

// Promise = An Object that manages asynchronous operations.     !!!!!!!!!!!!!!!!!!!!!!
/*            Wrap a promise Object around {asynchronous code}
              "I promise to return a value"
              PENDING -> RESOLVED or REJECTED
              new Promise((resolve, reject) => {asynchronous code})
*/
/*
function walkDog() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const dogwalked = true;
      if (dogwalked) {
        resolve("You walk the dog");
      } else {
        reject("You didn't walk the dog");
      }
    }, 500);
  });
}

function cleanKitchen() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const kitchenCleaned = true;
      if (kitchenCleaned) {
        resolve("You clean the kitchen");
      } else {
        reject("You didn't clean the kitchen");
      }
    }, 500);
  });
}

function takeOutTrash(callback) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const trashTakenOut = false;
      if (trashTakenOut) {
        resolve("You take out the trash");
      } else {
        reject("You didn't take out the trash");
      }
    }, 500);
  });
}

walkDog()
  .then((value) => {
    console.log(value);
    return cleanKitchen();
  })
  .then((value) => {
    console.log(value);
    return takeOutTrash();
  })
  .then((value) => {
    console.log(value);
    console.log("You finished all the chores!");
  })
  .catch((error) => console.error(error));
  */
/*
// callback hell
walkDog(() => {
  cleanKitchen(() => {
    takeOutTrash(() => console.log("You finished all the chores!"));
  });
});
*/

// async/await = Async = makes a function return a promise              !!!!!!!!!!!!!!
//               Await = makes an async function wait for a promise

//                Allows you to write asyncronous code in synchronous manner
//                Async doesnt have resolve or reject parameters
//                Everything after Await is placed in an event queue
/*
function walkDog() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const dogwalked = true;
      if (dogwalked) {
        resolve("You walk the dog");
      } else {
        reject("You didn't walk the dog");
      }
    }, 500);
  });
}

function cleanKitchen() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const kitchenCleaned = false;
      if (kitchenCleaned) {
        resolve("You clean the kitchen");
      } else {
        reject("You didn't clean the kitchen");
      }
    }, 500);
  });
}

function takeOutTrash(callback) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const trashTakenOut = true;
      if (trashTakenOut) {
        resolve("You take out the trash");
      } else {
        reject("You didn't take out the trash");
      }
    }, 500);
  });
}

async function doChores() {
  try {
    const walkDogResult = await walkDog();
    console.log(walkDogResult);
    const cleanKitchenResult = await cleanKitchen();
    console.log(cleanKitchenResult);
    const takeOutTrashResult = await takeOutTrash();
    console.log(takeOutTrashResult);
    console.log("You finished all the chores!");
  } catch (error) {
    console.log(error);
  }
}

doChores();
*/

// JSON = (JavaScript Object Notation) data-interchange format              !!!!!!!!!!!!!
/*        Used for exchangeing data between a server and a web application
          JSON files {key:value} OR [value1, value2, value3]
          */

/*
const names =["Spongebob","Patric","Squidward","Sandy"]
const person={
    "name":"Spongebob",
    "age":"30",
    "isEmployed":true,
    "hobbies":["jellyfishing","karate","Cooking"]
}


const jsonString=JSON.stringify(names)
console.log(jsonString)
console.log(person)


const jsonNames=`["Spongebob","Patrick","Squidward"]`;
const paresdData=JSON.parse(jsonNames)
console.log(paresdData)

fetch("person.json")
.then(response=> response.json())
.then(value=>console.log(value))
*/

// fetch = Functinon used for making HTTP requests to fetch resources.    !!!!!!!!!
/*          (JSON style data, images, files)
            Simplifyes asynchronous data fetching in Javascript and used for interacting
            with APIs to retrieve and send data asynchronously over the web
            fetch(url,{options})
*/

/*
fetch("https://pokeapi.co/api/v2/pokemon/pikachu")
.then(response=>{
  if(!response.ok){
    throw new Error("Could not fetch resource")
  }
  return  response.json()
}
   
 )
.then(data=>console.log(data))
.catch(error=>console.log(error))
*/
/*
async function fetchData() {
  try {
    const pokemonName = document
      .getElementById("pokemonName")
      .value.toLowerCase();

    const response = await fetch(
      `https://pokeapi.co/api/v2/pokemon/${pokemonName}`
    );

    if (!response.ok) {
      throw new Error("Could not fetch resource");
    }
    const data = await response.json();
    const pokemonSprite = data.sprites.front_default;
    const imgElement = document.getElementById("pokemonSprite");
    imgElement.src = pokemonSprite;
    imgElement.style.display = "block";
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}
*/

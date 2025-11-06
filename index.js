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

//                      rest parameters   ...rest - bundles separet elements into an array, opposite of spread operator.
//                                                  must be in function parameter otherwise it is spread function

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


// Camel to titel

function camelToTitleCase(words){
words = words.trim().charAt(0).toUpperCase() + words.trim().slice(1)
let i = 0;
words = words.split("")
for (i; i < words.length; i += 1) {
  
  if (i>0&&i<words.length-1&&words[i]===words[i].toUpperCase()&&(
    words[i-1]!=words[i-1].toUpperCase()||
    words[i+1]!=words[i+1].toUpperCase())){
        words.splice(i,0," ");
        i+=1;
  }
  else{
    
  }
}
words = words.join("");
console.log(words);
}


camelToTitleCase("insertHTML");
camelToTitleCase("insertAdjacentHTML");
camelToTitleCase("firstHTMLElement");
camelToTitleCase("releaseDate");
camelToTitleCase("");


// Temperature conversion program

/*
Create a program that converts temperatures between Celsius and Fahrenheit.
The user inputs a temperature in Celsius, and the program outputs the equivalent temperature in Fahrenheit.
Optionally, you can extend the program to handle conversions to and from Kelvin as well.
Explanation:
celsiusToFahrenheit: This function uses the formula F = (C * 9/5) + 32 to convert Celsius to Fahrenheit.
fahrenheitToCelsius: This function uses the formula C = (F - 32) * 5/9 to convert Fahrenheit to Celsius.
Prompt and Input: The program takes user input for the temperature and the scale (C or F) to determine which conversion to perform.
NOTE

This version is quite basic and can be expanded to include Kelvin or improve the UI by building it into a web page using HTML/CSS 
alongside JavaScript
*/

let x;

x=window.prompt("Sisesta temperatuur kas `C´elsiuses või `F´ahrenheitis")

console.log(x);

//Exercise 1: Favorite Color
let sentence = ["my", "favorite", "color", "is", "blue"];
let mycolor = sentence.join(' ');
console.log(mycolor);









//Exercise 2: Exercise 2 : Mixup


//1 Create 2 variables. The values should be strings.
let firstWord = "Hello";
let secondWord = "World";

//2 Slice out and swap the first 2 characters of the two strings from part 1.
let str1 = firstWord.slice(0, 2);
let str2 = secondWord.slice(0, 2);

let valueOne = firstWord.slice(2, [firstWord.length]);
let valueTwo = secondWord.slice(2, [secondWord.length]);
firstWord = str1 + valueTwo;
secondWord = str2 + valueOne;

/* 3. Create a third variable where the value 
is the concatenation of the two strings from the part 1 (separated by a space). */
let newWord = secondWord + " " + firstWord;

//4 Finally console.log the new concatenated string

console.log(newWord);







//Exercise 3 : Calculator


//1 Prompt the user for the first number.

//2 Store the first number in a variable called num1.
let num1 = prompt("Please type the first number");
console.log(typeof (num1));
let numberNum1 = parseInt(num1);

//3 Prompt the user for the second number.
//4 Store the second number in a variable called num2.
let num2 = prompt("Please type the second number");
let choice = prompt("Choose your operation type in string like : sum, subtract, multiply, divide");

//6 BONUS: Make a program that can subtract, multiply, and also divide!
if (choice == "sum") {
    //5 Create an Alert where the value is the SUM of num1 and num2.
    let numberNum2 = parseInt(num2);
    let sum = numberNum1 + numberNum2;
    alert("The sum of " + numberNum1 + " and " + numberNum2 + " is equal " + sum);
} else if (choice == "subtract") {
    let numberNum2 = parseInt(num2);
    let sum = numberNum1 - numberNum2;
    alert("The subtraction of " + numberNum1 + " and " + numberNum2 + " is equal " + sum);
} else if (choice == "multiply") {
    let numberNum2 = parseInt(num2);
    let sum = numberNum1 * numberNum2;
    alert("The multiplication of " + numberNum1 + " and " + numberNum2 + " is equal " + sum);
} else if (choice == "divide") {
    let numberNum2 = parseInt(num2);
    let sum = numberNum1 / numberNum2;
    alert("The division of " + numberNum1 + " and " + numberNum2 + " is equal " + sum);
} else {
    alert("Please type in a string the operation ");
}
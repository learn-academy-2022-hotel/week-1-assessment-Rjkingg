// ASSESSMENT 1: Coding Practical Questions

// To run file: navigate to the correct directory in terminal, $ node code-challenges.js

// Pseudo coding your process is required.

// --------------------INSTRUCTOR EXAMPLE: Create a function that takes in two strings and determines which of the two strings has more characters. Use the two sets of test variables provided.

// Pseudo code:

// Set one:
const fruit1 = "apple"
const fruit2 = "banana"
// Expected outcome: "banana"

// Set two:
const fruit3 = "cherry"
const fruit4 = "kiwi"
// Expected outcome: "cherry"
// START
// --------------------1) Create a function that takes in a number and determines if the given number is below boiling point, at boiling point, or above boiling point. Boiling point is 212 degrees Fahrenheit. Use the test variables provided below.

// Pseudo code: 

// To solve this challenge, I know that I will need to use a function. I need to establish a  keyword. Because we have multiple variables, it will be an "if else" Statement. 
// keyword: "let" 
// Next, I need a condition to put into the parenthesis- I will use (boilingPoint) because it is a detailed description. Inside each of my curly brackets contains a code block. All of the contents in the code block are related to the keyword contain an action, if ran. 

let boilingPoint = 212

if(boilingPoint===212) {

console.log("212 is at boiling point")

} else if(boilingPoint===42) {
   
console.log("42 is below boiling point")

} else if (boilingPoint===350){
  
    console.log("350 is above boiling point")
}

const temp1 = 42
// Expected output: "42 is below boiling point"

const temp2 = 350
// Expected output: "350 is above boiling point"

const temp3 = 212
// Expected output: "212 is at boiling point"

// --------------------2) Create the code that will combine the two arrays and return the length using the test variables provided below.

// Pseudo code: 
// The best way to get the length of an Array is to use the .length property. We can also assign a variable to that .length. We also need to use the .concat method to combine the two arrays.
const padres1984WorldSeriesRuns = [2, 5, 2, 2, 4]
const padres1998WorldSeriesRuns = [6, 3, 5, 3]
const padres1998WorldSeries = padres1984WorldSeries.concat(padres1998WorldSeries.length)


// const padres1984WorldSeriesRuns = [2, 5, 2, 2, 4]
// const padres1998WorldSeriesRuns = [6, 3, 5, 3]
// // Expected output: 9

// --------------------3) Create the code that will reverse the letters of a string using the test variable provided below.

// Pseudo code: 
// The .reverse method is used to reverse letters. I will ned to use console.log to view the output. The variable has a name of "currentCohort" and it needs the .reverse in order to perform the action:
console.log(currentCohort.reverse)

const currentCohort = "Hotel 2022"
// Expected output: "2202 letoH"

// --------------------4) Create the code that will return the last index of the given value from the array using the test variables provided below.

// Pseudo code: Looking at the elements in the array, I see that it has has an index of 8. It starts from 0, (13) and ends at 8 (10). The givenValue1 is set to 42, which lets me know that they're using [7]. 

// console.log(myArray[7]) is what I was thinking but that would give an output of 42, instead of 7. 

const myNumbers = [13, 34, 42, 5, 5, 10, 27, 42, 10]
const givenValue1 = 42
// Expected output: 7

const givenValue2 = 10
// Expected output: 8

// --------------------5) Create the code that will sort all the numbers in an array from largest to smallest. Use the test variables provided below.

// Pseudo code: .sort method is used to compare values.

console.log(typeof dataTypes.length) and then add the .sort method
console.log(sanDiegoSummerTemperature.sort)

const sanDiegoSummerTemperatures = [79, 80, 72, 73, 82, 77, 76]
// Expected output: [82, 80, 79, 77, 76, 73, 72]

const sanDiegoWinterTemperatures = [59, 68, 62, 59, 66, 67, 66]
// Expected output: [68, 67, 66, 66, 62, 59, 59]

// ASSESSMENT 1: Coding Conceptual Questions

// Examine the following examples.

// First, predict the outcome based on your understanding of the code.
// Then, uncomment the console.log() and verify the output. Briefly explain why your initial answer was correct or incorrect.

// --------------------INSTRUCTOR EXAMPLE: What will this log?
const colors = ["tangerine", "magenta", "lilac", "daffodil"]
// console.log(colors.push("indigo"))

// a) Your answer:
// b) Verify and explain:

// --------------------1) What will this log?

const cohort = "LEARN 2022"
console.log(cohort.length)

// a) Your answer: This will log 10. 
// b) Verify and explain: When the .length property is used, it starts counting at 1. L=1 E=2 A=3 R=4 N=5 the SPACE = 6 2=7 0=8 2=9 2=10

// Predicted output: 10
// Actual output: 10

const greeting = "Hello World!"
console.log(greeting[4])

// a) Your answer: It will log the "o" in hello
// b) Verify and explain: It ran "o" because when we use [] (bracket notation) we are using an index, and it starts counting the characters at 0

// // Predicted output: o
// Actual output: o


const languages = ["JavaScript", "Ruby", "Python", "C++"]
const index = 1
console.log(languages[index])

// a) Your answer: "a"
// b) Verify and explain: The output was Ruby because it is the 1st string listed. Given the zero index counting, Javascript, to the far left is 0, following Ruby at [1]

// Predicted output: "a"
// Actual output: "Ruby"


// const weekendDays = ["saturday", "sunday"]
// console.log(weekendDays.toUpperCase())

// a) Your answer:["SATURDAY", "SUNDAY"]
// b) Verify and explain: 
// This answer was given because the .toUpperCase method will not work on array's.
// 

// Predicted output: ["SATURDAY", "SUNDAY"]
// Actual output:TypeError:weekendDays.toUpperCase is not a function  at Object.<anonymous>

// const dataTypes = ["number", "string", "Boolean", "undefined"]
// console.log(typeof dataTypes.length)

// a) Your answer: 31
// b) Verify and explain: The result logged was "number".

// Predicted output: 31
// Actual output: Number. One of the array's built in methods would have helped get the correct output.    

const dataTypes = ["number", "string", "Boolean", "undefined"]
console.log(dataTypes.length)         

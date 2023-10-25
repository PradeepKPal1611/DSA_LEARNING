// JavaScript Array is a single variable that is used to store elements of different data types. 
// JavaScript arrays are zero-indexed. 
// The Javascript Arrays are not associative in nature.
// Arrays are used when we have a list of items. 
// An array allows you to store several values with the same name and access them by using their index number.
 
//DECLARATION OF AN ARRAY

// There are basically Two ways to declare an Array.

// 1. CREATING AN ARRAY USING ARRAY LITERAL.

//let arrayName = [Value1, Value2, ...];

//JavaScript Example-1
// Initializing While Declaring

let courses = ["HTML", "CSS", "JavaScript","React"];

console.log(courses);

// 2. CREATING AN ARRAY USING THE JAVASCRIPT NEW KEYWORD:

// Let arrayName = new Array();

//JavaScript Example-2
// Initializing While Declaring

let arr1 = new Array(3);
arr1[0] = 10;
arr2[1] = 20;
arr3[2] = 30;

console.log("Array 1: ", arr1);

//Creates an Array having elements 10, 20, 30, 40, 50.
let arr2 = new Array(10, 20, 30, 40, 40);
console.log("Array 2: ", arr2);

//Creates an Array of 5 undefined elements
let arr3 = new Array(5);
console.log("Array 3: ", arr3);

//Creates an Array with one Element
let arr4 = new Array("1BHK");
console.log("Array 4: ", arr4);

// Note: Both the above methods do exactly the same. 
// Use the array literal method for efficiency, 
// readability, and speed.

// ACCESSING ELEMENTS OF AN ARRAY

// Any element in the array can be accessed using the index number. 
// The index in the arrays starts with 0.

const course = ["HTML", "CSS", "JavaScript"];

console.log(course[0]);
console.log(course[1]);
console.log(course[2]);


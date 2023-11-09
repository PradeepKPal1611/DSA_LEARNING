/* <-- How to Copy Array by Value in JavaScript ?

In this article, we will see how to create a copy 
of an array by value using JavaScript. Javascript has 
various ways to clone the array.

We can use some methods to create a copy of an array that is given below:

Using Spread Operator
Using Array.from() Method
Using Array.slice() Method
Using structuredClone() Method --> */

/*  <-- Method 1: Using Spread Operator
Using the spread operator … is a concise and 
easy way to copy an array by value in JavaScript.
 The spread operator allows you to expand an array into individual elements, which can then be used to create a new array.

Example: --> */

const originalArr = [1, 2, 3, 4, 5, 6]; 
const clonedArr = [...originalArr]; 
  
console.log(clonedArr);

// Output
// [ 1, 2, 3, 4, 5, 6 ] 



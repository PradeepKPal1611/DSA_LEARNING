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

const originalArr1 = [1, 2, 3, 4, 5, 6]; 
const clonedArr1 = [...originalArr1]; 
  
console.log(clonedArr1);

// Output
// [ 1, 2, 3, 4, 5, 6 ] 

/* <-- Method 2: Using Array.from() Method
Using the Array.from() method is another way to copy 
an array by its value in JavaScript. This method creates
a new array from an existing array, using an optional mapping 
function to transform the values in the new array.

Example: --> */

const originalArr2 = [1, 2, 3, 5, 6, 4]; 
const clonedArr2 = Array.from(originalArr2); 
  
console.log(clonedArr2);

// Output
//[ 1, 2, 3, 5, 6, 4 ]

/*  <-- Method 3: Using Array.slice() Method
We use the slice() method to create a copy of an 
array by its value in JavaScript. This method creates 
a new array with a subset of the elements from the original array.

Example: -->  */

const originalArr3 = [1, 2, 3, 4, 5, 6]; 
const clonedArr3 = originalArr3.slice(); 
  
console.log(clonedArr3);

// Output
//[ 1, 2, 3, 4, 5, 6 ]
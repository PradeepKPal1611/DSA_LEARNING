/* <== How to remove n elements from the end of a given array in JavaScript ?
In this article, we will learn how to remove the last n 
elements from the end of the given array in JavaScript.

We can remove n elements from the end of a given array in 
the following ways:

Using splice() Method
Using pop() Method
Using filter() Method
Using Array slice() method
Using while loop
Method 1: Using splice() Method
It is used to modify an array by adding or removing elements 
from it. This method accepts the index from which the 
modification has to be made and the number of elements to 
delete. The index from which the deletion has to start can 
be found by subtracting the number of elements from the 
length of the array. 

Syntax:
array.splice(start, deleteCount);

Example: In this example, we will be using the Javascript 
splice() method to remove the elements from the end of a 
given array. ==> */

// Define the array
let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
 
console.log("Original Array:", arr);
 
// Define the number of elements to remove
let elemsToDelete = 3;
 
// Using the splice() method to remove from
// the last nth index for n elements
arr.splice(arr.length - elemsToDelete,
    elemsToDelete);
 
console.log("Modified Array:", arr);

/* Output
Original Array: [
  1, 2, 3, 4, 5,
  6, 7, 8, 9
]
Modified Array: [ 1, 2, 3, 4, 5, 6 ] */
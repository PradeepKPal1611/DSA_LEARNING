/* <-- How to clone an array in JavaScript ?

In JavaScript, cloning an array means creating a 
new array with the same elements as the original array.

Cloning an array in JavaScript is useful when you 
want to create a new array that has the same elements 
as an existing array, without modifying the original array.

If you want to perform some operations on an array, 
such as sorting, filtering, or mapping, but you don’t 
want to modify the original array, you can create a clone 
of the original array and perform the operations on the 
clone instead.

When passing an array to a function as an argument, 
you may want to ensure that the function does not 
modify the original array. In this case, you can 
pass a clone of the array instead.

If you want to preserve the original array for future 
reference, you can create a clone of the original array 
and use the clone for further processing or manipulation.

If you have an array that contains objects or arrays as 
elements, and you want to avoid modifying the original 
objects or arrays, you can create a clone of the array 
to work with, so that changes to the objects or arrays 
in the clone do not affect the original objects or arrays.

Thus, cloning an array in JavaScript is a useful technique 
for working with arrays in a way that preserves the 
integrity of the original array and its elements. --> */

/* <-- 1. Using the Array.slice() Method:
We use the slice method to create a shallow copy of an 
array. This method creates a new array with a subset of 
the elements from the original array.

Example: --> */

const originalArray = [1, 2, 3];
const clonedArray = originalArray.slice();
console.log(clonedArray);

/* Output
[ 1, 2, 3 ] */

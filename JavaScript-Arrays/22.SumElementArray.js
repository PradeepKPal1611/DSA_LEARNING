/* <== How to find the sum of all elements of a given array
 in JavaScript ?

In this article, we will learn how we can find the sum of 
all elements/numbers of the given array. There are many 
approaches to solving the problems using for loop, 
forEach() method, and reduce() method.

Below all the approaches are described with a proper 
example:

Using for loop
Using forEach() Method
Using forEach() Method
Using Recursion
Method 1: Using for loop
We are simply going to iterate over all the elements of 
the array using a Javascript for loop to find the sum.

Example: This example shows the above-explained approach. ==> */

// Creating array
let arr = [4, 8, 7, 13, 12]
 
// Creating variable to store the sum
let sum = 0;
 
// Running the for loop
for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
}
 
console.log("Sum is " + sum) // Prints: 44

/* Output
Sum is 44 */

/* <== Method 2: Using forEach() Method
We are going to use the Javascript forEach() method of the 
array to calculate the sum.

Example: This example shows the above-explained approach. ==> */

// Creating array
let arr1 = [4, 8, 7, 13, 12]
 
// Creating variable to store the sum
let sum1 = 0;
 
// Calculation the sum using forEach
arr1.forEach(x => {
    sum1 += x;
});
 
// Prints: 44
console.log("Sum is " + sum1);

/* Output
Sum is 44 */

/* <== Convert a negative number to positive in JavaScript

In this article, we will see how we can convert a negative 
number to a positive number in javascript by the methods 
described below. 

Method 1: This is a general method in which we will first 
check whether the number is already positive or negative, 
if the number is negative then we will multiply the number 
by -1 to make it positive. 

Syntax:

if (a < 0) {
    a = a * -1;
}
Example: Below is the implementation of the above approach: ==> */

// Javascript script to convert negative number
// to positive number
 
// Function to convert
// given number to
// positive number
function convert_positive(a) {
    // Check the number is negative
    if (a < 0) {
        // Multiply number with -1
        // to make it positive
        a = a * -1;
    }
    // Return the positive number
    return a;
}
 
//Driver code
let n = -10;
let m = 5;
 
// Call function
n = convert_positive(n);
 
// Print result
console.log(n);
 
// Call function
m = convert_positive(m);
 
// Print result
console.log(m);

/* Output:

10
5 */

/* <== Method 2: In this method, we will use Math.abs() function 
to convert negative numbers to positive numbers. 

Syntax:

Math.abs(value)
Example: Below is the implementation of the above 
approach: ==> */

// Javascript script to convert negative number
// to positive number
 
//Driver code
let n = -30;
let m = 15;
 
// Using Math.abs() function
n = Math.abs(n);
 
// Print result
console.log(n);
 
// Using Math.abs() function
m = Math.abs(m);
 
// Print result
console.log(m);

/* Output:

30
15 */

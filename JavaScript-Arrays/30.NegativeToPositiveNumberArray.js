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
let n1 = -10;
let m2 = 5;
 
// Call function
n = convert_positive(n1);
 
// Print result
console.log(n1);
 
// Call function
m = convert_positive(m2);
 
// Print result
console.log(m2);

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
let n3 = -30;
let m3 = 15;
 
// Using Math.abs() function
n = Math.abs(n3);
 
// Print result
console.log(n3);
 
// Using Math.abs() function
m = Math.abs(m3);
 
// Print result
console.log(m3);

/* Output:

30
15 */

/* <== Method 3: In this method, we will check whether the 
number is positive or negative, if the number is negative 
then we add a minus sign at the beginning of the number 
else return the same. 

Syntax:

a < 0 ? -(a) : a
Example: This example shows the above-explained approach. ==> */

// Javascript script
// to convert negative number
// to positive number
 
// Function to convert
// given number to
// positive number
function convert_positive(a) {
    return a < 0 ? -(a) : a;
}
 
//Driver code
let n4 = -10;
let m4 = 5;
 
// Call function
n = convert_positive(n4);
 
// Print result
console.log(n4);
 
// Call function
m = convert_positive(m4);
 
// Print result
console.log(m4);

/* Output:

10
5 */

/* <== Method 4: In this method, we will use a bit-wise 
not operator which flips all the bits of the number. 
Since the negative number is stored in a most significant 
bit it also flips which converts it to a positive number.

Syntax: 

a < 0 ? ( ~a + 1 ) : a
Example: ==> */

// Function to convert
// given number to
// positive number
function convert_positive(a) {
    return a < 0 ? (~a + 1) : a;
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
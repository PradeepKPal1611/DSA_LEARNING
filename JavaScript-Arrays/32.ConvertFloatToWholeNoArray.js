/* <==How to convert a float number to the whole number 
in JavaScript ?

In this article, we will convert a float number to a whole 
number in Javascript. There are various methods to convert 
float numbers to whole numbers in JavaScript.

Math.floor() method
Math.ceil() method
Math.round() method
Math.trunc() method
parseInt() method
double bitwise not (~~) method
bitwise OR (|) operator
Using shift (>>) operator
unsigned shift (>>>) operator
By subtracting the fractional part
XOR (^) operator
We will see these methods one by one now.

Math.floor (floating argument): Round off the number passed 
as a parameter to its nearest integer in the Downward 
direction. 

Syntax:


Math.floor(value)
Example: In this example, we are using the above-explained 
method. ==> */

//float value is 4.59;
let x = 4.59;
let z = Math.floor(x);
console.log("Converted value of " + x + " is " + z);

/* Output:

Converted value of 4.59 is 4 */
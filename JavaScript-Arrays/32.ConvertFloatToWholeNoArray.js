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

/* <== Math.ceil (floating argument): Return the smallest 
integer greater than or equal to a given number. 

Syntax:

Math.ceil(value)
Example: Here is the basic use of the Math.ceil() method. ==> */

//float value is 4.59;
let x1 = 4.59;
let z1 = Math.ceil(x1);
console.log("Converted value of " + x1 + " is " + z1);

/* Output:

Converted value of 4.59 is 5 */

/* <== Math.round (floating argument): Round a number to 
its nearest integer. 

Syntax:

Math.round(var);
Example: Here we are using the above-explained method to 
convert numbers. ==> */

//float value is 4.59;
let x2 = 4.59;
let z2 = Math.round(x2);
console.log("Converted value of " + x2 + " is " + z2);

/* Output:

Converted value of 4.59 is 5 */

/* <== Math.trunc (floating argument): Return the integer 
part of a floating-point number by removing the fractional 
digits. 

Syntax:

Math.trunc(value)
Example: Here we are using Math.trunc() method to remove 
the fractional digits. ==> */

//float value is 4.59;
let x3 = 4.59;
let z3 = Math.trunc(x3);
console.log("Converted value of " + x3 + " is " + z3);

/* Output:

Converted value of 4.59 is 4 */

/* <== parseInt (floating argument): Accept the string and 
convert it into an integer. 

Syntax:

parseInt(Value, radix)
Example: Here is basic example of above method. ==> */

//float value is 3.54;
let x4 = 3.54;
let z4 = parseInt(x4);
console.log("Converted value of " + x4 + " is " + z4);

/* Output:

Converted value of 3.54 is 3 */

/* <== double bitwise not (~~) operator: Round a number to 
zero. If an operand is a number and it’s not NaN or 
Infinity. 

Syntax:

~~value
Example: Here is the example of a not(~~) operator. ==> */

//float value is 4.59;
let x5 = 4.59;
let z5 = ~~x;
console.log("Converted value of " + x5 + " is " + z5);

/* Output:

Converted value of 4.59 is 4 */

/* <== JavaScript bitwise OR (|) Operator: Round a number 
towards zero. 

Syntax:

let = value | 0;
Example: Here is an example of the above-explained 
method. ==> */

//float value is 5.67;
let x6 = 5.67;
let z6 = x6 | 0;
console.log("Converted value of " + x6 + " is " + z6);

/* Output:

Converted value of 5.67 is 5 */

/* <== Using shift (>>) operator: Round a number to 
towards zero. 

Syntax:

let = value >> 0;
Example: Basic example of shift(>>) operator. ==> */

//float value is 5.63;
let x7 = 5.63;
let z7 = x7 >> 0;
//it is same as we are dividing the value by 1.
console.log("Converted value of " + x7 + " is " + z7);

/* Output:

Converted value of 5.63 is 5 */

/* <== Using unsigned shift (>>>) operator Round a number 
to towards zero. 

Syntax:

let = value >>> 0;
Example: Here is an example of the above-explained 
method. ==> */

//float value is 5.68;
let x8 = 5.68;
//it is same as we are dividing the value by 1.
let z8 = x8 >>> 0;
console.log("Converted value of " + x8 + " is " + z8);

/* Output:

Converted value of 5.68 is 5 */

/* <== By subtracting the fractional part Syntax:

let = val - val%1;
Example: In this example, we are using the above-explained 
method. ==> */
 
//float value is 5.48;
let x9 = 5.48;
let z9 = x9 - x9 % 1;
console.log("Converted value of " + x9 + " is " + z9);

/* Output:

Converted value of 5.48 is 5 */

/* <== Using XOR (^) operator Syntax:

let = value ^ 0;
Example: Here is the basic use of the XOR(^) operator. ==> */

//float value is 5.49;
let x10 = 5.49;
let z10 = x10 ^ 0;
console.log("Converted value of " + x10 + " is " + z10);

/* Output:

Converted value of 5.49 is 5 */
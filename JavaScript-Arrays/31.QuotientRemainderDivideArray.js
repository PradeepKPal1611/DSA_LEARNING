/* <== Find quotient and remainder by dividing an integer in JavaScript

In this article, we will find the quotient and remainder 
by dividing an integer in JavaScript. There are various 
methods to divide an integer number by another number and 
get its quotient and remainder. 

Using Math.floor() method
Using ~~ operator
right shift >> operator
Example 1: This example uses the Math.floor() function to 
calculate the divisor. ==> */

let a = 39;
let b = 5;
function Geeks() {
    console.log("quotient = " + Math.floor(a / b))
    console.log("remainder = " + a % b);
}
Geeks();

/* Output
quotient = 7
remainder = 4 */

/* <==Example 2: This example uses the binary ~~ operator 
to calculate the divisor. ==> */

let a1 = 39;
let b1 = 5;
function Geeks() {
    let num = ~~(a1 / b1);
    console.log("quotient = " + num)
    console.log("remainder = " + a1 % b1);
}
Geeks();

/* Output
quotient = 7
remainder = 4 */

/* <== Example 3:This example uses the right shift >> operator 
to calculate the divisor. ==> */

let a2 = 39;
let b2 = 5;
function Geeks() {
    let num = (a2 / b2) >> 0;
    console.log("quotient = " + num)
    console.log("remainder = " + a2 % b2);
}
Geeks();

/* Output
quotient = 7
remainder = 4 */
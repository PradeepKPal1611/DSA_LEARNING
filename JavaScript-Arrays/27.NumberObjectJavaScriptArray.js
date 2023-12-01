/* <== How to create a Number object using JavaScript ?
In this article, we will discuss how to create a Number 
object using JavaScript. A number object is used to represent 
integers, decimal or float point numbers, and many more. 
The primitive wrapper object Number is used to represent 
and handle numbers. examples: 20, 0.25.

We generally don’t need to worry about number objects. 
The Number() function can be used to convert values of 
different types to numbers. Generally, primitive values 
like integers don’t have methods associated with them.

Syntax:

let n=new Number(val);  
Parameter:  This method takes one parameter that is 
converted to any javascript variable.


Return Value: The number() function returns the number 
format for any type of javascript variable. If the given 
value cannot be converted to a number then it returns Nan. 
Nan represents “Not a number” but primitive values are 
treated as objects in javascript. 

Normally declaring a number:

<script>
    a = 10; // integer value
    b = 1.25; // float value
</script>
Example: Creating a number object. ==> */

// creating a number object
let num = Number("10");
console.log(num == 10);// true

/* Output : True */

/* <== Properties Of JavaScript Number:

Number.MAX_VALUE: It’s the maximum possible value a javascript 
number can have (2^53 – 1) OR 1.7976931348623157e+308.
Number.MIN_VALUE: It’s the maximum possible value a javascript 
number can have -(2^53 – 1) or 5e-324.
Number.NAN: It returns “undefined”.
Number.NEGATIVE_INFINITY: It’s a particular value that 
represents negative infinity. it has a lower value than 
MIN_VALUE.
Number.POSITIVE_INFINITY: It’s a particular value that 
represents positive infinity.  it has a greater value than 
MAX_VALUE.
Below are the example in order of the above mentioned 
properties of JavaScript Number:

Example 1:  It’s the maximum possible value a javascript 
number can have (2^53 – 1) OR 1.7976931348623157e+308. ==> */

let num1 = Number.MAX_VALUE;
console.log(num1);

/* Output:

1.7976931348623157e+308 */

/* ==> Example 2:  It’s the maximum possible value a javascript 
number can have -(2^53 – 1) or 5e-324. ==> */

let num2 = Number.MIN_VALUE;
console.log(num2);

/* Output:

5e-324 */

/* <== Example 3: It returns “undefined”. ==> */

let num3 = Number.NAN;
console.log(num3);

/* Output:

undefined */



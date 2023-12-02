/* <==Round off a number to the next multiple of 5 using JavaScript
In this article, we are given a positive integer n and the task is 
to round the number to the next whole number divisible by 5.  
There are various methods to Round off a number to the next multiple of 5 using JavaScript:

Using Math.ceil() method
Using Math.floor() method
Examples:

Input : 46 
Output : 50

Input : 21
Output : 25

Input : 30 
Output : 30
Approach 1:

Take the number in a variable.
Divide it by 5 and get the decimal value.
Take the ceil value of the decimal value by using math.ceil().
Multiply it by 5 to get the result.
Example: ==> */

function round(x) { 
    return Math.ceil(x / 5) * 5; 
} 
  
var n = 34; 
console.log(round(n));

/* Output:

35 */
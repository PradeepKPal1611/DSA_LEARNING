/* <== How to fill static values in an array in JavaScript ?

In this article, we will see the methods to fill an array 
with some static values. There are many ways to fill 
static values in an array in JavaScript such as:

Using Array fill() Method
Using for loop
Using push() method
Using from() method
Using spread operator ==> */

/* <== Method 1: Array fill() Method
We use the array fill() method to fill static values in an 
array in JavaScript. This JavaScript array fill() method 
is used to fill an array with a given static value from 
the specified start position to the specified end position. 
If we do not specify the start and end position then the 
whole array will be filled up with a given static value. 
This fill() method modifies the original array and returns 
it.

Syntax:

arr.fill(value, start, end)
Return value:  The arr.fill() method returns the modified 
array (does not return any new array), which is filled 
with a static value. 
Example 1: In the following example, we use the fill() method 
to fill the array. The whole array is filled with 50, 
replacing the previous values. Here we do not define the 
start and end index, so by default start index is 0, and 
the end index is arr.length-1. ==> */

let value = [4, 10, 5, 7, 6, 18];
 
// Whole array is filled with 50 
// and return the modified array 
let value2 = value.fill(50);
console.log(value);
console.log(value2);

/* Output:

[ 50, 50, 50, 50, 50, 50 ]
[ 50, 50, 50, 50, 50, 50 ] */

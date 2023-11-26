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
let value1 = value.fill(50);
console.log(value);
console.log(value2);

/* Output:

[ 50, 50, 50, 50, 50, 50 ]
[ 50, 50, 50, 50, 50, 50 ] */

/* <== Example 2: In the following example, we use the 
fill() method to fill the array with 45 from the start 
index is 1 to the end index is 4 (exclusive). ==> */

let value2 = [4, 10, 5, 7, 6, 18];
value2.fill(45, 1, 4);
console.log(value2);

/* Output:

[ 4, 45, 45, 45, 6, 18 ] */

/* <== Example 3: In the following example, we use the 
fill() method to fill the array with 15. The start index 
is 3 but the end index is not defined, so by default end 
index is arr.length-1. ==> */

let value3 = [4, 10, 5, 7, 6, 18];
value3.fill(15, 3); 
console.log(value3);

/* Output:

[ 4, 10, 5, 15, 15, 15 ] */

/* <== Example 4: In the following example, we use the 
fill() method to fill the array with 25. Here start 
index = -4 and end index = -1, so indexes are counted 
backward. ==> */

let value4 = [4, 10, 5, 7, 6, 18];
value4.fill(25, -4, -1);
console.log(value4);

/* Output:

[ 4, 10, 25, 25, 25, 18 ] */

/* <== Example 5: In the following example, If we give an 
invalid index then the array will never change. ==> */

let value5 = [4, 10, 5, 7, 6, 18];
value5.fill(25, 8, 10);
console.log(value5);

/* Output:

[ 4, 10, 5, 7, 6, 18 ] */

/* <== Method 2: Using for loop We use a simple for loop 
to fill static values in an array in JavaScript. But still 
arr.fill() method is best for this job. Let’s look at some 
examples. 

Example 1: In the following example, we use for loop to 
fill the array with 2. ==> */

let value6 = [5, 3, 9, 10, 50, 100];
let i;
 
for (i = 0; i < value6.length; i++) {
    value6[i] = 2;
}
console.log(value6);

/* Output:

[ 2, 2, 2, 2, 2, 2 ] */
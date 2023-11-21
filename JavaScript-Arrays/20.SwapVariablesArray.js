/* <== How to use arrays to swap variables in JavaScript ? 
The technique of swapping two variables in coding refers 
to the exchange of the variables’ values. In an array, 
we can swap variables from two different locations. 
There are innumerable ways to swap elements in an array. 
let’s demonstrate a few ways of swapping elements such as:

Using a Temporary Variable
One Line Swap
Using arithmetic operators
Using XOR Bitwise operator ==> */

/* <== Approach 1: Using a Temporary Variable
We introduce a new variable and let it hold one of the 
two array values(a) which are willing to swap. The array 
value which we let the temporary variable hold is reassigned 
by the second array value(b). Finally, b(second variable) 
is given the value of temp which is a. 

   Syntax ==> */

function swap (int x, int y){
    temp = x;
    x = y;
    y = temp;
 }

 /* Note: while dealing with arrays, x= a[i], y= a[j], 
 and i and j are two different indices. temp is a temporary 
 variable */

 // Swapping array using temporary variable
let array = [10, 2, 5, 12, 7];
temp = array[1];
array[1] = array[0];
array[0] = temp;
 
console.log("Array after swapping : " + array);

/* Output
Array after swapping : 2,10,5,12,7 */

/* <== Approach 2: One-Line Swap
 In the one-line swap, we take the array values we want 
 to swap in a list according to indices and we directly 
 assign the array values by changing the indices. Instead 
 of doing it the hard way, there’s a very simple approach 
 where we can swap variables directly, reassigning values 
 at the same time. 

Syntax:

[a[i], a[j]] = [a[j], a[i]]
Note: i and j are any two indices of the array. this is a 
direct assignment without using an alternative variable.

Example: In the below code were swapping values at indices 
0 and 1. ==> */

// Swapping first two elements of the array
let array1 = [10, 2, 5, 12, 7];
[array1[0], array1[1]] = [array1[1], array1[0]];
console.log("Array after swapping : " + array1);

/* Output
Array after swapping : 2,10,5,12,7 */

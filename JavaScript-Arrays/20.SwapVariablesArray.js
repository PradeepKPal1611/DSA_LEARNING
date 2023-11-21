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
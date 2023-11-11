/* <-- What is the most efficient way to concatenate N 
arrays in JavaScript ?
In this article, we will see how to concatenate N 
arrays in JavaScript. The efficient way to concatenate N 
arrays can depend on the number of arrays and the size of arrays.

To concatenate N arrays, we use the following methods:

Using push() Method
Using concat() Method
Using Spread Operator  --> */

/* <-- Method 1: Using push() Method
We create the N arrays and then concatenate the array 
by using the push() method. In this, we also use the 
spread operator(…) which iterates over each of the values. --> */

const arr1 = [11, 12, 13];
const arr2 = [14, 15, 16];
arr1.push(...arr2);
console.log(arr1);

// Output = [ 11, 12, 13, 14, 15, 16 ] //


/* <-- Method 2: Using concat() Method
First, we will create N arrays and then apply 
the concat() method to concatenate N arrays. The 
concat() method is used to merge N arrays together. 
This method does not alter the original arrays and 
returns the new Array.

Example: --> */

const arr3 = [11, 12, 13],
      arr4 = [14, 15, 16],
      arr5 = [17, 18, 19],
      arr6 = [1, 3, 7];
 
const arr = arr1.concat(arr2, arr3, arr4);
 
console.log(arr);

/*  Output
[
    11, 12, 13, 14, 15,
    16, 17, 18, 19,  1,
     3,  7
] */


/*  <-- How to merge two arrays and remove duplicate items in 
JavaScript ?

In this article, we will see how to merge two arrays and 
remove duplicate items from the merged array in JavaScript. 
While working with the arrays in Javascript, we often used 
to merge and also remove the duplication of items from the new array.

There are some methods to merge two arrays and remove 
duplicate items, which are given below: 

Using Spread Operator and Set() Object
Using concat() Method and Set() Object
Using concat() Method and Filter() Method --> */

/* <-- Method 1: Using Spread Operator and Set() 
Object
The Spread Operator is used to merge two arrays and 
then use the Set() object to remove the duplicate items 
from the merged array.

Example:  --> */

let arr1 = [1, 2, 3, 4, 5, 6];  
let arr2 = [3, 4, 5, 7]; 
let arr = [...arr1, ...arr2]; 
let mergedArr = [...new Set(arr)] 
console.log(mergedArr);

/* Output
[
  1, 2, 3, 4,
  5, 6, 7
] */

/*  <-- Method 2: Using concat() Method and Set() Object
The concat() method is used to merge two arrays and then use the Set() object to remove the duplicate items from the merged array.

Example: -->  */

let arr3 = [1, 2, 3, 4, 5, 6];  
let arr4 = [3, 4, 5, 7]; 
let arr0 = arr3.concat(arr4); 
let mergedArr0 = [...new Set(arr0)] 
console.log(mergedArr0);

/* Output
[
  1, 2, 3, 4,
  5, 6, 7
] */
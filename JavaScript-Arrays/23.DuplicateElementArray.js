/* <== Remove Duplicate Elements from JavaScript Array

JavaScript array is a single variable that is used to 
store the elements or a group of values. We can remove 
duplicate elements from the array. In this article, we 
will discuss various methods to remove duplicate elements 
from the array.

remove-duplicate-array-from-javascript

Methods to Remove Duplicate Elements from JavaScript 
Array:
Table of Content

Using Javascript filter()
Using Javascript set()
Using Javascript forEach() Method
Using Javascript reduce() Method
Using Javascript indexOf() Method
Using third-party library ==> */

/* <-- Method 1: Using Javascript filter()
The filter() method creates a new array of elements that 
pass the condition we provide. It will include only those 
elements for which true is returned. We can remove 
duplicate values from the array by simply adjusting our 
condition.

Example: In this example, we will see the use of the 
filter() method. --> */

let arr = ["apple", "mango", "apple",
          "orange", "mango", "mango"];
 
function removeDuplicates(arr) {
    return arr.filter((item,
        index) => arr.indexOf(item) === index);
}
console.log(removeDuplicates(arr));

/* Output:

["apple", "mango", "orange"] */

/* <-- Method 2: Using Javascript set()
This method sets a new object type with ES6 (ES2015) that allows 
you to create collections of unique values.

Example: In this example, we will see the use of the 
set() method. --> */

let arr1 = ["apple", "mango", "apple",
          "orange", "mango", "mango"];
 
function removeDuplicates(arr1) {
    return [...new Set(arr1)];
}
 
console.log(removeDuplicates(arr1));

/* Output:

["apple", "mango", "orange"] */
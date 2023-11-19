/* How to create an object from two arrays in JavaScript?

Given two arrays the task is to create an object from them where the first array contains the keys of the object and the second array contains the values of the object. Return null if the array lengths are not the same or if the arrays are empty.

We can create an object from two arrays in Javascript in the following ways:

Using for-each loop
Using Object.assign method
Using  reduce() method
Using loop
Using object.fromEntries() Method
Example:

Input:
Array 1 =>  [1, 2, 3, 4]
Array 2 =>  ["ram", "shyam", "sita", "gita"]

Output:
{
  1: "ram",
  2: "shyam",
  3: "sita",
  4: "gita"
} */

/* <== Method 1: Using for-each loop
The arr.forEach() method calls the provided function once 
for each element of the array. The provided function may 
perform any kind of operation on the elements of the given 
array. 

Example: In this example, we will be using Javascript`s 
for-each loop.
==> */

let a = [1, 2, 3, 4];
let b = ["ram", "shyam", "sita", "gita"]
 
// Checking if the array lengths are same 
// and none of the array is empty
function convertToObj(a, b) {
    if (a.length != b.length || 
        a.length == 0 || 
        b.length == 0) {
        return null;
    }
    let obj = {};
 
    // Using the foreach method
    a.forEach((k, i) => 
              { obj[k] = b[i] })
    return obj;
}
console.log(convertToObj(a, b));

/* Output
{ '1': 'ram', '2': 'shyam', '3': 'sita', '4': 'gita' } */


/* <== Method 2: Using Object.assign method
The Object.assign() method is used to copy the values and 
properties from one or more source objects to a target object.

Example: In this example, we will be using Javascript`s 
Object.assign method. ==> */

let a1 = [1, 2, 3, 4];
let b2 = ["ram", "shyam", "sita", "gita"]
 
// Checking if the array lengths are same 
// and none of the array is empty
function convertToObj(a1, b1) {
    if (a1.length != b1.length || 
        a1.length == 0 || 
        b1.length == 0) {
        return null;
    }
 
    // Using Object.assign method
    return Object.assign(...a1.map((k, i) =>({ 
                          [k]: b1[i] })))
}
console.log(convertToObj(a1, b1));

/* Output
{ '1': 'ram', '2': 'shyam', '3': 'sita', '4': 'gita' } */

/* <== Method 3: Using reduce() method
The Javascript arr.reduce() method in JavaScript is used to reduce the 
array to a single value and executes a provided function 
for each value of the array (from left to right) and the 
return value of the function is stored in an accumulator. 

Example: In this example, we will be using Javascript`s 
reduce() method. ==> */

let a2 = [1, 2, 3, 4];
let b2 = ["ram", "shyam", "sita", "gita"];
 
// Checking if the array lengths are same
// and none of the array is empty
function convertToObj(a2, b2) {
    if (a2.length != b2.length || 
        a2.length == 0 || 
        b2.length == 0) {
        return null;
    }
 
    // Using reduce() method
    let object = a2.reduce((acc, element, index) => {
        return {
            ...acc,
            [element]: b2[index],
        };
    }, {});
 
    return object;
}
console.log(convertToObj(a2, b2));

/* Output
{ '1': 'ram', '2': 'shyam', '3': 'sita', '4': 'gita' } */
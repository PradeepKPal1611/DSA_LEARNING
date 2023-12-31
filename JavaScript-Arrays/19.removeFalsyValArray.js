/*  <== How to remove falsy values from an array in 
JavaScript ?
Falsy/Falsey Values:  In JavaScript, there are 7 falsy 
values, which are given below

false
zero(0,-0)
empty string(“”, ‘ ‘ , ` `)
BigIntZero(0n,0x0n)
null
undefined
NaN
In JavaScript, the array accepts all types of falsy values. 
Let’s see some approaches on how we can remove falsy 
values from an array in JavaScript:

Using for-each loop
Using the Array.filter method
Using Array.reduce method
Using for…of loop

Example: 

Input: [23, 0, “gfg”, false, true, NaN, 12, “hi”, undefined, [], “”] 
Output: [23, “gfg”, true, 12, “hi”, []]
Input: [“”, 0, false, undefined, NaN, null] 
Output: []

Approach: There are many approaches to achieve this some of them are the following:

JavaScript for..each loop
JavaScript Array.filter() Method
ES6 way of Array.filter() Method
Passing Boolean Value
JavaScript Array.reduce() Method
JavaScript for…of loop ==> */

/* <== JavaScript for..each loop: In this approach, we 
will iterate the array using the for..each loop and at 
every iteration, we check if the value is truthy, if it 
is truthy then we push the value in a newly created array, 
and then we return the new array.

Example: In this example, we will be using Javascript 
forEach() loop to remove the falsy values. ==> */

let arr = [23, 0, "gfg", false, true, NaN, 12, "hi", undefined, [], ""];
 
function removeFalsey(arr) {
    // newly created array
    let newArr = [];
 
    // Iterate the array using the forEach loop
    arr.forEach((k) => {
        // check for the truthy value
        if (k) {
            newArr.push(k);
        }
    });
    // return the new array
    return newArr;
}
console.log(removeFalsey(arr));

/* Output:

[23, "gfg", true, 12, "hi", []] */

/* <== JavaScript Array.filter() Method: In this approach, 
we are using the array.filter method. The filter method 
checks the array and filters out the false values of the 
array and returns a new array.

Example: In this example, we will be using the Array.filter() 
method to remove the false values from the array. ==> */

let arr1 = ["", 0, false, undefined, NaN, null];
 
function removeFalsey(arr1) {
    // Applying the filter method on the array
    return arr1.filter((k) => {
        // Checking if the value is truthy
        if (k) {
            return k;
        }
    });
}
console.log(removeFalsey(arr1));

/* Output:

[] */

/* <== ES6 way of Array.filter() Method: If you can use 
this es6 sentence.

Example: In this example, we will use the Javascript 
Array.filter() method in ES6. ==> */

let arr2 = [23, 0, "gfg", false, true, NaN, 12, "hi", undefined, [], ""];
 
function removeFalsey(arr2) {
    // Return the first parameter of the callback function
    return arr2.filter((val) => val);
}
 
console.log(removeFalsey(arr2));

/* Output:

[23, "gfg", true, 12, "hi", []] */

/* <== Passing Boolean Value: You can also achieve this by 
passing the Boolean constructor as the argument of the 
filter method. 

Example: In this example, we will a boolean constructor in 
the argument of the filter method. ==> */

let arr3 = [23, 0, "gfg", false, true, NaN, 12, "hi", undefined, [], ""];
 
function removeFalsey(arr3) {
    // Passing Boolean constructor inside filter
    return arr3.filter(Boolean);
}
 
console.log(removeFalsey(arr3));

/* Output:

[23, "gfg", true, 12, "hi", []] */


/* <== JavaScript Array.reduce() Method: Using the 
Array.reduce method we iterate the array and initialize 
the accumulator with an empty array and if the current 
value is not a falsy value then we return a concatenated 
value of the accumulator else we return the accumulator 
only.

Example: In this example, we will use the Javascript 
Array.reduce() method to remove the falsy values from 
the array. ==> */

let arr4 = [23, 0, "gfg", false, true, NaN, 12, "hi", undefined, [], ""];
 
function removeFalsey(arr4) {
    return arr4.reduce((acc, curr) => {
        // Check if the truthy then return concatenated value acc with curr.
        // else return only acc.
        if (curr) {
            return [...acc, curr];
        } else {
            return acc;
        }
    }, []); // Initialize with an empty array
}
 
console.log(removeFalsey(arr4));

/* Output:

[23, "gfg", true, 12, "hi", []] */

/* <== JavaScript for…of loop: Using for…of loop iterate 
the array and check every item if it is falsy or truthy. 
If the item is truthy then push the item to a newly 
created array.

Example: In this example, we will use Javascript 
for..of loop to remove the falsy values from the array. ==> */

let arr5 = [23, 0, "gfg", false, true, NaN, 12, "hi", undefined, [], ""];
 
function removeFalsey(arr5) {
 
    // Create a new array
    let output = [];
    for (x of arr5) {
        if (x) {
 
            // Check if x is truthy
            output.push(x);
        }
    }
    return output;
}
 
console.log(removeFalsey(arr5));

/* Output:

[23, "gfg", true, 12, "hi", []] */


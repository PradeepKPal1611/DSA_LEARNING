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

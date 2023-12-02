/* <== How to add float numbers using JavaScript ?

Given two or more numbers and the task is to get the float 
addition in the desired format with the help of JavaScript. 
There are two methods to solve this problem which are discussed 
below:

 Approach 1:

Given two or more numbers to sum up the float numbers.
Use parseFloat() and toFixed() method to format the output accordingly.

Example: This example implements the above approach. ==> */

let val = parseFloat('2.3') + parseFloat('2.4');
console.log("2.3 + 2.4 = " + val);
 
function gfg_Run() {
    console.log("2.3 + 2.4 = "
        + (parseFloat('2.3') +
            parseFloat('2.4')).toFixed(2));
}
gfg_Run()

/* Output

2.3 + 2.4 = 4.699999999999999
2.3 + 2.4 = 4.70 */
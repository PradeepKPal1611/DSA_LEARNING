/* <== How to get n largest elements from array in JavaScript ?
Here in this article, we will see how we can find the n 
maximum element from the array using Javascript.

Example:

Input: arr = [1, 2, 3, 4, 5, 6], n = 3;
Output: 4, 5, 6
Explanation: Here we will see the 3 largest elements in 
the given array are 4, 5, 6.

Input: arr = [5, 76, 32, 98, 52, 57] n = 2;
Output: 98 , 76


There are two ways to find out the solution, we will learn 
both of them one by one:

Brute Force Approach: We will first make an array named 
largArr having a length equal to n. Then for each index 
of largArr, we will fill the element from the array one 
by one

Example: If we have n=3 then array largArr will be having 
a length equal to 3 then we will run for loop one by one 
to fill the element in the largArr. ==> */ 

let largArr = new Array();
let arr = new Array(93, 17, 56, 91,
                   98, 33, 9, 38, 55, 78, 29, 81, 60);
 
function largest() {
    largArr[0] = 0;
    largArr[1] = 0;
    largArr[2] = 0;
 
    for (i = 0; i < arr.length; i++) {
        if (arr[i] > largArr[0]) {
            largArr[0] = arr[i];
 
        }
    }
 
    for (i = 0; i < arr.length; i++) {
        if (arr[i] > largArr[1]
            && arr[i] < largArr[0]) {
            largArr[1] = arr[i];
 
        }
    }
 
    for (i = 0; i < arr.length; i++) {
        if (arr[i] > largArr[2]
            && arr[i] < largArr[1]) {
            largArr[2] = arr[i];
        }
    }
 
    console.log(largArr[0]);
    console.log(largArr[1]);
    console.log(largArr[2]);
}
 
largest();

/* Output:

98 
93 
91 */

/* <== Optimized Solution: We first sort the array in 
decreasing order and then we run the loop for the length 
equal to n and print the first n largest elements.

Example: ==> */

let largArr1 = new Array();
let arr1 = new Array(93, 17, 56, 91, 98,
          33, 9, 38, 55, 78, 29, 81, 60);
 
findLargest3();
 
function findLargest3() {
    arr1.sort((a, b) => a < b ?
        1 : a > b ? -1 : 0);
 
    console.log(arr1[0]);
    console.log(arr1[1]);
    console.log(arr1[2]);
 
    console.log(arr1.slice(0, 3));
}

/* Output:

 98
 93
 91
 [98,93,91] */
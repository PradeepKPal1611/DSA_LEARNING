/*<--- Given an array arr[] of n positive integers. 
Push all the zeros of the given array to the right end of 
the array while maintaining the order of non-zero elements.
 Do the mentioned change in the array in-place.---> */

 /* <-- Move all zeroes to end of array --> */

function moveZeroesToEnd(arr){
    let nonZeroCount =0;

for(let i =0; i<arr.length; i++){
    if(aa[i] !== 0){
        [arr[i], arr[nonZeroCount]] = [arr[nonZeroCount],arr[i]];
        nonZeroCount ++;
    }
}
return arr;
}
let arr = [1, 2, 3, 4, 5, 0 ,0 ,0 ,0 , 0];
let result = moveZeroesToEnd(arr);
console.log(result);

/* <== RMS Value Of Array in JavaScript

The RMS (Root mean square) value of a distribution is the 
square root of the mean of the squares of the elements. 

The formula to find RMS value is given below:

 RMS = \sqrt{\frac{{a_{1}}^{2} + {a_{2}}^{2} 
 + {a_{3}}^{2} + {a_{4}}^{2} + ... + {a_{N}}^{2}}{N}} 

To calculate the RMS value of an array, first need to 
square all the elements in the array. Then, take the mean 
of those squared values by summing it and dividing it by 
the number of the elements and finally take the square 
root of that number. 


Example: In this example, we will find out the root mean 
square value of the elements of an array. ==> */

let CalculateRMS = function (arr) {
     
    // Map will return another array with each
    // element corresponding to the elements of
    // the original array mapped according to
    // some relation
    let Squares = arr.map((val) => (val*val));
 
    // Function reduce the array to a value
    // Here, all the elements gets added to the first
    // element which acted as the accumulator initially.
    let Sum = Squares.reduce((acum, val) => (acum + val));
 
    Mean = Sum/arr.length;
    return Math.sqrt(Mean);
}
 
let arr = [5, 9, 3, -7, -4];
 
let Rms = CalculateRMS(arr);
 
console.log(Rms);

/* Output:

6 */
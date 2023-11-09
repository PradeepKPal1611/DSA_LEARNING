/* <--- How to get first N number of elements from an array in JavaScript ?
To get the first N number of elements from an array in JavaScript, 
there are several approaches that can be taken. Here are a few:

Using the slice() Method
Using a for loop
Using the splice() Method
Using the filter() Method ---> */

/* <---Method 1: Using the slice() method
The slice() method is used to extract a part of an array and
returns a new array containing the extracted elements. 
It does not change the original array.

Syntax:

array.slice(start, end);
Here, start is the starting index from where to begin extraction and
 end is the ending index from where to end extraction. 
 The end index is exclusive, i.e., the element at the end 
 index is not included in the extracted array.---> */

 

const arr = [1, 2, 3, 4, 5, 6]; 
const n = 3; 
const result = arr.slice(0, n); 
console.log(result); // Output: [1, 2, 3]

/* <--In the above example, we have an array arr and we want to extract 
the first 3 elements from it. So, we used the slice() method 
with a start index of 0 and an end index of 3, which extracts the first 3 elements. 

Example 2: ---> */


const arr1 = ['apple', 'banana', 'orange', 'grape', 'kiwi']; 
const n1 = 2; 
const result1 = arr1.slice(0, n1); 
console.log(result1); // Output: ['apple', 'banana'] 

/* <-- Method 2: Using a for loop
We can also use a for loop to iterate through the array and extract the first N elements.

Syntax:

for (let i = 0; i < n; i++) {
    // Access and store elements here
} 
 Example 1: ---> */

 const arr2 = [1, 2, 3, 4, 5, 6]; 
const n2 = 3; // Number of elements to extract 
const result2 = []; 
for (let i = 0; i < n2; i++) { 
    result2.push(arr2[i]); 
} 
console.log(result2); // Output: [1, 2, 3]

/* <-- Example 2: --> */


const arr3 = ['apple', 'banana', 'orange', 'grape', 'kiwi']; 
const n3 = 3; 
  
const result3 = []; 
  
for (let i = 0; i < n3 && i < arr3.length; i++) { 
      result3.push(arr3[i]); 
} 
  
console.log(result3); // Output: ['apple', 'banana', 'orange']

/* <-- Method 3: Using the splice() method
The splice() method can be used to add or 
remove elements from an array. We can use it to 
remove all elements after the first N elements.

Syntax:

array.splice(start, deleteCount);
Here, start is the starting index from where to begin deletion, and deleteCount is the number of elements to be deleted. We can set deleteCount to the length of the array to remove all elements after the first N elements.

Example 1: --> */



const arr4 = [1, 2, 3, 4, 5, 6]; 
const n4 = 3; 
arr4.splice(n4); 
console.log(arr4); // Output: [1, 2, 3]

/* <-- Example 2: --> */


const arr5 = ['apple', 'banana', 'orange', 'grape', 'kiwi']; 
const n5 = 3; 
arr5.splice(n5); 
console.log(arr5); // Output: ['apple', 'banana', 'orange']


/* <-- Method 4: Using the filter() method
We can also use the filter() method but this 
method is not much efficient because it iterates over the entire array.

Example: --> */


const arr6 = [1,2,3,4,5,6]; 
const n6 = 4; 
  
const newArray = arr6.filter((element, index) => index < n6); 
console.log(newArray);

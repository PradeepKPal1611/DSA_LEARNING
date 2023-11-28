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

/* <-- Method 3: Using Javascript forEach() Method
By using the forEach() method, we can iterate over the elements in the 
array, and we will push into the new array if it doesn’t 
exist in the array.

Example: In this example, we will see the use of the 
forEach() method. --> */

let arr2 = ["apple", "mango", "apple", "orange", "mango", "mango"];
 
function removeDuplicates(arr2) {
    let unique = [];
    arr1.forEach(element => {
        if (!unique.includes(element)) {
            unique.push(element);
        }
    });
    return unique;
}
console.log(removeDuplicates(arr2));

/* Output:

["apple", "mango", "orange"] */


/* <-- Method 4: Using Javascript reduce() Method
The reduce() method is used to reduce the elements of the array and 
combine them into a final array based on some reducer 
function that you pass.

Example: In this example, we will see the use of the 
reduce() method. --> */

let arr3 = ["apple", "mango",
          "apple", "orange", "mango", "mango"];
 
function removeDuplicates(arr3) {
    let unique = arr3.reduce(function (acc, curr) {
        if (!acc.includes(curr))
            acc.push(curr);
        return acc;
    }, []);
    return unique;
}
console.log(removeDuplicates(arr3));

/* Output:

["apple", "mango", "orange"] */

/* <-- Method 5: Using Javascript indexOf() Method
The indexOf() method is used to find the first index of occurrence of 
an array element. we can iterate over the elements in the 
array, and we will push into the new array if it doesn’t 
exist in the resultant array. 

Example: In this example, we will see the use of the indexOf() method. --> */

let arr4 = ["apple", "mango",
          "apple", "orange", "mango", "mango"];
 
function removeDuplicates(arr4) {
    let unique = [];
    for (i = 0; i < arr4 .length; i++) {
        if (unique.indexOf(arr4[i]) === -1) {
            unique.push(arr4[i]);
        }
    }
    return unique;
}
console.log(removeDuplicates(arr4));

/* Output:

["apple", "mango", "orange"] */

/* <== Method /5/: Using third-party library
We can also use a third-party library such as Lodash or 
Underscore.js to remove duplicate elements from a 
Javascript array. The _.uniq() function returns the 
array which does not contain duplicate elements.

Example: In this example, we will use 
the _.uniq() function. ==> */

<!DOCTYPE html>
<html>
 
<head>
    <script src=
"https://cdnjs.cloudflare.com/ajax/libs/underscore.js/1.9.1/underscore-min.js">
    </script>
</head>
 
<body>
    <script type="text/javascript">
        console.log(_.uniq([1, 2, 3, 4, 5, 4, 3, 2, 1]));
    </script>
</body>
 
</html>




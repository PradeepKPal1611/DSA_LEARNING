/*How to remove duplicate elements from JavaScript Array ?

In this article, we will discuss the methods to remove duplicate elements from a Javascript array.
There are various methods to remove duplicates in the array. 
We will discuss the four most common ways :

*Using filter() Method
*Using set() Method
*Using reduce() Method
*Using indexOf() Method
*Using forEach() Method
*Using Underscore.js _.uniq() Function */

/*Below all the methods are described with proper examples:

 ----Javascript filter() Method---
 The filter() method creates a new array of elements that pass the condition we provide.
 It will include only those elements for which true is returned. We can remove 
 duplicate values from the array by simply adjusting our condition. */

/* 1 <---Example: In this example, we will see the use of the filter() method.--->*/

let arr = ["Apple", "Mango", "Apple",
    "Orange", "Mango", "Mango"];

function removeDuplicates(arr) {

    return arr.filter((item,
        index) => arr.indexof(item) === index);

}
console.log(removeDuplicates(arr));


/* <---Javascript set() Method--->
This method sets a new object type with ES6 (ES2015) 
that allows you to create collections of unique values. */

/* 2 <---Example: In this example, 
we will see the use of the set() method.--->*/

let arr1 = ["apple", "mango", "apple",
    "orange", "mango", "mango"];

function removeDuplicates(arr1) {
    return [...new Set(arr1)];
}
console.log(removeDuplicates(arr1));


/* <---Javascript forEach() Method--->
By using the forEach() method, we can iterate over the elements in the array,
and we will push into the new array if it doesn’t exist in the array. */

/* 3 <---Example: In this example, 
we will see the use of the forEach() method.---> */

let arr3 = ["apple", "mango", "apple",
    "orange", "mango", "mango"];

function removeDuplicates(arr3) {
    let unique = [];
    arr3.forEach(element => {
        if (!unique.includes(element)) {
            unique.push(element);
        }
    });
    return unique;
}

console.log(removeDuplicates(arr3));


/* 4 <---Javascript reduce() Method--->
The reduce() method is used to reduce the elements of 
the array and combine them into a final array based on 
some reducer function that you pass.*/

/* <---Example: In this example, 
we will see the use of the reduce() method.--->*/

let arr4 = ["apple", "mango", "apple",
    "orange", "mango", "mango"];

function removeDuplicates(arr4) {
    let unique = arr4.reduce(function (acc, curr) {
        if (!acc.includes(curr))
            acc.push(curr);
        return acc;
    }, []);
    return unique;
}

console.log(removeDuplicates(arr4));


/* <---Javascript indexOf() Method--->
The indexOf() method is used to find the first index
of occurrence of an array element. we can iterate over 
the elements in the array, and we will push into the new 
array if it doesn’t exist in the resultant array. */

/* 5 <---Example: In this example,
we will see the use of the indexOf() method.--->*/

let arr5 = ["apple", "mango", "apple",
"orange", "mango", "mango"];

function removeDuplicates(arr5){
    let unique = [];
    for (let i = 0; i<arr5.length; i++){
        if(unique.indexof(arr5[i]) === -1){
            unique.push(arr5[i]);
        }
    }
    return unique;
}

console.log(removeDuplicates(arr5));





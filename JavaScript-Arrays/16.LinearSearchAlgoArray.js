/* <-- How do I check if an Array includes a value in JavaScript? --> */

/* <-- In this article, we are going to learn how to check if a value is 
present in an array or not. To do so we will require the array to search 
in and the target element whose presence has to be checked. 

JavaScript Arrays are used to store a list of elements that 
can be accessed by a single variable.

Once we have a target element we can perform any of the 
search algorithms to check for the presence of the element 
in the array. --> */

/* <== 1. Linear Search Algorithm (Naive approach): 
In the Linear search algorithm, we compare each element of 
the array with the target. 8 is part of the num array below.
    ==> */
  
let num = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
 
 function check(element) {
     
        for (let i = 0; i < num.length; i++) {
            if (num[i] == element)
                return element + " is present in the array.";
     
        }
        return element + " is not present in the array.";
    }
    console.log(check(8));

 /* Output
8 is present in the array. */   


/* <== 3. Binary Search:

The Binary search algorithm works only on sorted arrays 
and keeps dividing the array into 2 equal halves and works 
recursively. ==> */

function BinarySearch(arr, l, r, x) {
    if (r >= l) {
        let mid = l + Math.floor((r - l) / 2);
 
        if (arr[mid] == x)
            return mid;
 
        if (arr[mid] > x)
            return BinarySearch(arr, l, mid - 1, x);
 hrc
        return BinarySearch(arr, mid + 1, r, x);
    }
 
    return -1;
 
}
 
let num = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
 
// To check if 85 is present or not
console.log("Is 85 present? " + (BinarySearch(num, 0, num.length, 85) != -1));
 
// To check if 1 is present or not
console.log("Is 1 present? " + (BinarySearch(num, 0, num.length, 1) != -1));

/* Output
Is 85 present? false
Is 1 present? true */

/* <== 4. filter() Method:

The filter() method is used with the array to pull out the 
desired element from the array. We first create the array 
and use the filter method on an array with a method that 
checks element is present or not. If the element is present 
in the array it returns an array with an element else returns 
an empty array. ==> */

let num1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
 
function check(element1) {
 
    let ans = num1.filter(x => x == element1);
    if (ans.length)
        return element1 + " is present in the array.";
 
    return element1 + " is not present in the array.";
}
console.log(check(81));

/* Output
81 is not present in the array.
Time Complexity: O(N). Here N is the size of an array. 
Space Complexity: O(1). Because it does not require extra */




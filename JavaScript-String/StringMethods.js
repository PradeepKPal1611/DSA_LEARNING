/* <== JavaScript String Methods

JavaScript strings are the sequence of characters. In JavaScript, 
strings automatically convert the string to objects so 
that we can use string methods and properties also for 
primitive strings. It is used to represent and manipulate 
the sequence of characters.

In general, there are two ways to create a string in JavaScript. 
Either by using the new String() syntax or putting the 
value in quotes.

Example: This example, creates a string in JavaScript 
using the methods described above. ==> */

let str1 = "Welcome to GeesforGeeks";
let str2 = new String("Welcome Geeks");
 
console.log(str1);
console.log(str2);

/* Output

Welcome to GeesforGeeks
[String: 'Welcome Geeks'] */

/* <== JavaScript String Methods and Property
String methods and properties are important to perform any 
operation on the given string, String indexes start from 0. 
The first character is in position 0 and the second in 1 
and the same follows. We can call any of the pre-defined 
methods of JavaScript as it automatically converts from 
string primitive to objects.

Example:

 let gfg= "geeksforgeeks"
Property:
JavaScript String length Property
This property returns the number of characters present in 
the string. In the case of an array, this property returns 
the number of elements present in the array.

Example: This example describes the JavaScript String Length 
property. ==> */

// JavaScript to illustrate length property    
function func() {
    // length property for string
    console.log("GFG".length)
}
func();

/* Output
3 */

/* ==> Methods:
Table of Content

JavaScript slice(startIndex, endIndex) Method
JavaScript substring(startIndex, endIndex) Method
JavaScript substr(start, length) Method
JavaScript replace(replaceValue, replaceWithValue)
JavaScript replaceAll(regexp | substr , newSubstr | function)
JavaScript toUpperCase(stringVariable)
JavaScript toLowerCase(stringVariable)
JavaScript concat(objectOfString) Method
JavaScript trim() Method
JavaScript trimStart() Method
JavaScript trimEnd() Method
JavaScript padStart() Method
JavaScript padEnd() Method
JavaScript charAt(indexOfCharacter) Method:
JavaScript charCodeAt(indexOfCharacter) Method
JavaScript split(character) Method

********
Method 1: JavaScript slice(startIndex, endIndex) Method
This method extracts a part of the string based on the given stating-index and ending-index and returns a new string.

Example: This example describes the JavaScript String 
slice() method. ==> */

let A = 'Geeks for Geeks';
b = A.slice(0,5);
c = A.slice(6,9);
d = A.slice(10);
 
console.log(b);
console.log(c);
console.log(d);

/* Output

Geeks
for
Geeks */

/* ==> Method 2: JavaScript substring(startIndex, endIndex) Method
This method returns the part of the given string from the 
start index to the end index. Indexing starts from zero (0).

Example: This example shows the implementation of the 
above-explained approach. ==> */

let str = "Mind, Power, Soul";
let part = str.substring(6, 11);
console.log(part);

/* Output
Powe */
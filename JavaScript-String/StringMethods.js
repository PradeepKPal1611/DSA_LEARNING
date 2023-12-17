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

/* <== Method 3: JavaScript substr(start, length) Method
This method returns the specified number of characters from the 
specified index from the given string. It basically 
extracts a part of the original string.

Example: This example shows the implementation of the 
above-explained approach. ==> */

let str3 = "Mind, Power, Soul";
let part1 = str3.substr(6, 5);
console.log(part1);

/* Output
Powe */

/* <== Method 4: JavaScript replace(replaceValue, replaceWithValue)
This method replaces a part of the given string with another 
string or a regular expression. The original string will 
remain unchanged.

Example: This example shows the implementation of the above-explained 
approach. ==> */

let str4 = "Mind, Power, Soul";
let part2 = str4.replace("Power", "Space");
console.log(part2);

/* Output
Mind, Space, Soul */

/* <== Method 5: JavaScript replaceAll(regexp | substr , 
    newSubstr | function)
This method returns a new string after replacing all the 
matches of a string with a specified string or a regular 
expression. The original string is left unchanged after 
this operation.

Example: This example shows the implementation of the 
above-explained approach. ==> */

let str5 = "Mind, Power, Power,  Soul";
let part3 = str5.replaceAll("Power", "Space");
console.log(part3);

/* Output
Mind, Space, Space,  Soul */

/* <== Method 6: JavaScript toUpperCase(stringVariable)
This method converts all the characters present in the 
String to upper case and returns a new String with all 
characters in upper case. This method accepts single 
parameter stringVariable string that you want to convert 
in upper case.

Example: This example describes the JavaScript String 
toUpperCase() method. ==> */

let gfg = 'GFG '
let geeks = 'stands-for-GeeksforGeeks';
 
console.log(geeks.toUpperCase(geeks)) ;

/* Output
STANDS-FOR-GEEKSFORGEEKS */

/* <== Method 7: JavaScript toLowerCase(stringVariable)
This method converts all the characters present in the so 
lowercase and returns a new string with all the characters 
in lowercase.

Example: This example describes the JavaScript String 
toLowerCase() method. ==> */

let gfg1 = 'GFG ';
let geeks1 = 'stands-for-GeeksforGeeks';
 
console.log(geeks1.toLowerCase(geeks1));

/* Output
stands-for-geeksforgeeks */

/* <== Method 8: JavaScript concat(objectOfString) Method
This method combines the text of two strings and returns a 
new combined or joined string. To concatenate two strings, 
we use the concat() method on one object of string and 
send another object of string as a parameter. This method 
accepts one argument. The variable contains text in double 
quotes or single quotes.

Example: This example describes the JavaScript String 
concat() method. ==> */

let gfg2 = 'GFG ';
let geeks2 = 'stands for GeeksforGeeks';
 
// Accessing concat method on an object
// of String passing another object 
// as a parameter
console.log(gfg2.concat(geeks2));

/* Output
GFG stands for GeeksforGeeks */


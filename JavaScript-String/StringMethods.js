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

/* ==> Method 9: JavaScript trim() Method
This method is used to remove either white spaces from the 
given string. This method returns a new string with removed 
white spaces. This method is called on a String object. 
This method doesn’t accept any parameter.

Example: This example describes the JavaScript String trim() 
method. ==> */

let gfg3 = 'GFG    ';
let geeks3 = 'stands-for-GeeksforGeeks';
 
// Storing new object of string
// with removed white spaces
let newGfg = gfg3.trim();
 
// Old length
console.log(gfg3.length);
 
// New length
console.log(newGfg.length);

/* Output
7
3 */

/* <== Method 10: JavaScript trimStart() Method
This method removes whitespace from the beginning of a string. 
The value of the string is not modified in any manner, 
including any whitespace present after the string.

Example: This example shows the implementation of the 
above-explained approach. ==> */

let str6 = "  Soul";
console.log(str6)
let part4 = str6.trimStart();
console.log(part4);

/* Output
  Soul
Soul */

/* <== Method 11: JavaScript trimEnd() Method
This method removes white space from the end of a string. 
The value of the string is not modified in any manner, 
including any white-space present before the string.

Example: This example shows the implementation of the 
above-explained approach. ==> */

let str7 = "Soul  ";
console.log(str7)
let part5 = str75.trimEnd();
console.log(part5);

/* Output
  Soul
  Soul */ 

/* <== Method 12: JavaScript padStart() Method
This method pad a string with another string until it 
reaches the given length. The padding is applied from the 
left end of the string.

Example: This example shows the implementation of the 
above-explained approach. ==> */

let stone = "Soul";
stone = stone.padStart(9,"Mind ");
console.log(stone);

/* <==Output
Mind Soul ==> */

/* <== Method 13: JavaScript padEnd() Method
This method pad a string with another string until it 
reaches the given length. The padding is applied from 
the right end of the string.

Example: This example shows the implementation of the 
above-explained approach. ==> */

let stone1 = "Soul";
stone = stone1.padEnd(10," Power");
console.log(stone1);

/* Output
Soul Power */

/* <== Method 14: JavaScript charAt(indexOfCharacter) Method
This method returns the character at the specified index. 
String in JavaScript has zero-based indexing.

Example: This example describes the JavaScript string 
charAt() method. ==> */

let gfg4 = 'GeeksforGeeks';
let geeks4 = 'GfG is the best platform to learn and\n'+
'experience Computer Science.';
 
// Print the string as it is
console.log(gfg4); 
 
console.log(geeks4); 
 
// As string index starts from zero
// It will return first character of string
console.log(gfg.charAt(0)); 
 
console.log(geeks.charAt(5));

/* <== Output
GeeksforGeeks
GfG is the best platform to learn and
experience Computer Science.
G
s */

/* <== Method 15: JavaScript charCodeAt(indexOfCharacter) Method
This method returns a number that represents the Unicode 
value of the character at the specified index. This method 
accepts one argument.

Example: This example describes the JavaScript String 
charCodeAt() Method. ==> */

let gfg5 = 'GeeksforGeeks';
let geeks5 = 'GfG is the best platform\n\
to learn and experience\n\
Computer Science.';
 
// Return a number indicating Unicode
// value of character at index 0 ('G')
console.log(gfg5.charCodeAt(0));
console.log(geeks5.charCodeAt(5));

/* Output
71
115 */

/* <== Method 16: JavaScript split(character) Method
This method splits the string into an array of sub-strings. 
This method returns an array. This method accepts a single 
parameter character on which you want to split the string.

Example: This example describes the JavaScript String 
split() method. ==> */

let gfg6 = 'GFG '
let geeks6 = 'stands-for-GeeksforGeeks'
 
// Split string on '-'. 
console.log(geeks6.split('-'));

/* Output
[ 'stands', 'for', 'GeeksforGeeks' ] */
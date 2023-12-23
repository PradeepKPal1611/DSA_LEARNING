/* <== JavaScript String Reference

In this article, we will learn JavaScript Strings and their 
properties and methods with a brief description. JavaScript 
Strings are used for storing and manipulating text content. 
It can contain zero or more characters within single or double 
quotes, like “Geeksforgeeks” or ‘Geeksforgeeks’.

Syntax:

String(object)

Example: In this example, we will return the length of a 
string. ==> */

function stringLength() {
    const str = "GeeksforGeeks";
 
    console.log("String Length: " + str.length);
}
 
stringLength();

/* Output:
String Length: 13 */

/* <== Example: In this example, we will return the Date() 
object’s string value. ==> */

// Date Object having date and time
const currentDate = new Date()
 
// date object's string value
const currentDate_String = currentDate.toString()
 
console.log("Date Object's String Value: " + currentDate_String);

/* Output
Date Object's String Value: Wed Sep 06 2023 21:12:54 GMT+0000 
(Coordinated Universal Time) */
/* <== JavaScript String

What is JavaScript String?
JavaScript String Object is a sequence of characters. It 
contains zero or more characters within single or double 
quotes.

Syntax:

const string_name = "String Content"
or
const string_name = new String("String Content")
Example: In this example, we will create a string by using 
the native way and using String Constructor. ==> */

// Create a variable and assign String value 
const str1 = "First String Content"; 
console.log("String 1: " + str1); 
  
// Creating a String using String() Constructor 
const str2 = String("Second String Content"); 
console.log("String 2: " + str2);

/* Output

String 1: First String Content
String 2: Second String Content */
 
//Note: If we used String() Constructor then a number can be a string as well.


/* <== Example: We can write a string in both single and 
double quotes. ==> */

// String using dual quotes 
const str3 = "GeeksforGeeks"; 
  
// String using single quotes 
const str4 = 'GfG'; 
  
// Display the string 
console.log(str3); 
console.log(str4);

/* Output
GeeksforGeeks
GfG */

/* <== Example: We can also use single quotes inside double 
quotes and vice-versa. ==> */

const str5 = "'GeeksforGeeks' is learning portal"; 
const str6 = '"GfG" is a learning portal'; 
  
console.log(str5); 
console.log(str6);

/* Output
'GeeksforGeeks' is learning portal
"GfG" is a learning portal */

/* <== Escape Characters
We can use escape characters in string to add single quotes, 
dual quotes, and backslash.

Syntax:

\' - Inserts a single quote
\" - Inserts a double quote 
\\ - Inserts a backslash
Example: ==> */

const str7 = "\'GfG\' is a learning portal"
const str8 = "\"GfG\" is a learning portal"
const str9 = "\\GfG\\ is a learning portal"
  
console.log(str7); 
console.log(str8);
console.log(str9);

/* Output

'GfG' is a learning portal
"GfG" is a learning portal
\GfG\ is a learning portal */

/* <== Finding the length of a String
We can find the length of a string using the JavaScript 
built-in length property.

Example: ==> */

// Declare a string 
const str = "GeeksforGeeks"; 
  
// Display the length of String 
console.log("String Length: " + str.length);

/* Output
String Length: 13 */

/* <== Breaking Long Strings
We will use a backslash to break a long string in 
multiple lines of code. ==> */

const str10 = "'GeeksforGeeks' is \
a learning portal"
  
console.log(str10);

/* Output
'GeeksforGeeks' is a learning portal */

/* <== Note: This method might not be supported on all browsers.

So the better way to break a string is by using the string 
addition. ==> */

const str11 = "'GeeksforGeeks' is a"
    + " learning portal"; 
  
console.log(str11);

/* Output
'GeeksforGeeks' is a learning portal */

/* <== Output
'GeeksforGeeks' is a learning portal ==> */

const str12 = new String("GeeksforGeeks"); 
  
console.log(str12);

/* Output
[String: 'GeeksforGeeks'] */

/* <== Are the strings created by the new keyword is same as normal strings?
No, the string created by the new keyword is an object and 
is not the same as normal strings. ==> */

const str13 = new String("GeeksforGeeks"); 
const str14 = "GeeksforGeeks"; 
  
console.log(str13 == str14); 
console.log(str13 === str14);

/* Output
true
false */
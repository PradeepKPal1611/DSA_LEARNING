/* <== JavaScript Program to Generate Random Hex Codes of Color

What is hex code? 

A hex code is a six-digit, three-byte hexadecimal number 
used to represent colors in HTML, CSS, and SVG. The bytes 
represent the red, green, and blue components of the 
color. The hex codes are an integral part of HTML for web 
design and are a key way of representing colors digitally.

Methods to be used for generating hex codes: 

Math.random() method generates any number between 0 and 1 
including decimal. 
Math.random() * 16 generates no between 0 to 16 including 
decimal. 
Math.floor() method removes the decimal part. 
Example: In this example, we will generate a random hex 
color. ==> */

// Storing all letter and digit combinations 
// for html color code 
let letters = "0123456789ABCDEF"; 
  
// HTML color code starts with # 
let color = '#'; 
  
// Generating 6 times as HTML color code  
// consist of 6 letter or digits 
for (let i = 0; i < 6; i++) 
    color += letters[(Math.floor(Math.random() * 16))]; 
  
console.log(color);

/* Output
#9B0945 */
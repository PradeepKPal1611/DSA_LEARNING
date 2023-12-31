/* <== How to create HTML list from JavaScript array ?
In this article, we will be creating an HTML list from a 
JavaScript array. This is needed sometimes when we fetch 
JSON from any source and display the data in the front end 
and in many other cases also. 

Below are the ways for creating the list from the Javascript 
array.

Using the for loop
Using forEach() loop
Using join() Method
Method 1: Using the for loop
We can iterate in the list using a simple for loop and 
then append the list item using appendChild.

Example: ==> */

/* <!DOCTYPE html>
<html lang="en">
 
<body>
    <center>
        <h1>GeeksforGeeks</h1>
    </center>
    <ul id="myList"></ul>
    <script>
        let data = ["Ram", "Shyam", "Sita", "Gita"];
        let list = document.getElementById("myList");
        for (i = 0; i < data.length; ++i) {
            let li = document.createElement('li');
            li.innerText = data[i];
            list.appendChild(li);
        }
    </script>
</body>
 
</html> */

/* Output: GeeksforGeeks
  Ram
  Shyam
  Site
  Gita */

/* Method 2: Using forEach() loop
The arr.forEach() method calls the provided function once 
for each element of the array. The provided function may 
perform any kind of operation on the elements of the given 
array. 

Syntax:

array.forEach(callback(element, index, arr), thisValue)
Example: */

  <!DOCTYPE html> 
<html lang="en">
 
<body>
    <center>
        <h1>GeeksforGeeks</h1>
    </center>
    <ul id="myList"></ul>
   
    <script>
        let data = ["Ram", "Shyam", 
                    "Sita", "Gita"];
        let list = 
            document.getElementById("myList");
 
        data.forEach((item) => {
            let li1 = 
                document.createElement("li");
            li.innerText = item;
            list.appendChild(li);
        });
    </script>
</body>
 
</html> 
 /* Output: GeeksforGeeks
  Ram
  Shyam
  Site
  Gita */

/* <== Method 3: Using join() Method
The JavaScript Array join() Method is used to join the elements of an array into a string. The elements of the string will be separated by a specified separator and its default value is a comma(, ).

Syntax:

array.join(separator)
Example: ==> */
 // JavaScript array
 let data = ["Ram", "Shyam", 
 "Sita", "Gita"];

// Get the list container element
let list = 
document.getElementById('myList');

// Create the unordered list element 
//and set its inner HTML using map() and join()
let ul = `<ul>${data.map(data => 
`<li>${data}</li>`).join('')}
</ul>`;

// Set the inner HTML of the list container
list.innerHTML = ul;

 /* Output: GeeksforGeeks
  Ram
  Shyam
  Site
  Gita */

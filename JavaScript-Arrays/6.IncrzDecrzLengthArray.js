// Increase and decrease the length of an array
// We can increase and decrease the 
//length of an array using the Javascript’s length property.

const courses = ["HTLM", "CSS", "JavaScript"];
courses.length = 5;

console.log("Array After Increased length: " , courses);

courses.length = 2;

console.log("Array After Decreased length: ", courses);

// Array after increased length:  [ 'HTML', 'CSS', 'Javascript', <2 empty items> ]
// Array after decreased length:  [ 'HTML', 'CSS' ]


//We can also update an array after initialization.

const courses = ["HTML", "CSS", "Javascript"];
courses.length = 5 // Increasing array length to 5
console.log("Array after increased length: " ,courses);
 
courses[3] = 'PhP'
courses[4] = 'React'
console.log("Array after initializing: ", courses);


// Array after increased length:  [ 'HTML', 'CSS', 'Javascript', <2 empty items> ]
// Array after initializing:  [ 'HTML', 'CSS', 'Javascript', 'PhP', 'React' ]

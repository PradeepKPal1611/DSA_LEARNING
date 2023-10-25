// for (let index = 0; index < 5; index++) {
//     console.log(index);

    
// }
// let index = 1;

// while (index < 5) {

// console.log(index);

// index++;
    
// }


//     let index = 1;

//   while (index <= 100) {
        
//         if (index % 3 === 0  && index % 5 ===0) {

//             console.log("fizzBizz");
            
//         }
//         else if  (index % 3 === 0) {

//             console.log("fizz");
         
//     }
    
//     else if ( index % 5 === 0) {
//         console.log("Bizz");
//     }

//     else {
//         console.log(index);
//     }


//   index++;

// }


     //  start       // end               // change
// for (let index = 0; index < array.length; index++) {
//     // do something 
    
// // }





// where every number is the sum of two previous ones.


const number = prompt("enter the series to check whether it is fibonacci series or not ???")

let num1 = 0 ,num2 = 1, output; 

console.log("fibonnacci series");


for (let index = 0; index < number; index++) {
    output = num1 + num2;

    num1 = num2;

    num2 = output;
    
}


0,1,1,2,3,4
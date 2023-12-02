/* <==How to convert a value to a safe integer using JavaScript ?
In this article, we will learn How to convert a value to 
a safe integer using JavaScript. We have given a number, 
and we have to convert it into a safe integer using JavaScript. 
Safe Integers are integers between -(253 – 1) and (253 – 1).

Approach: First, we take input using the prompt in JavaScript. 
And store that input in a variable called input. Now we 
make two variables, one called mini that contains the 
minimum of input and the MAX_SAFE_INTEGER[253-1], and the 
other is maxi that contains the maximum of mini and 
MIN_SAFE_INTEGER[-(253-1)]. Now we make another variable 
that contains our answer called safeInt which contains the 
round value of the maxi variable.  And this is the safe 
integer of the given value. Below is all syntax of the 
above-used JavaScript functions:

Syntax:

const input = prompt('Please enter unsafe integer:');
let mini = Math.min(input,Number.MAX_SAFE_INTEGER);
let maxi = Math.max(mini,Number.MIN_SAFE_INTEGER);
const safeInt = Math.round(maxi);
Example: ==> */

//<!DOCTYPE html>
<html>
<head>
    <style>
        .gfg1{
            font-size: 30px;
            color: green;
        }
        #gfg2{
            font-size: 30px;
            color: green;    
        }
        div{
            margin-left: 30%;
        }
        button{
            font-size: 20px;
        }
    </style>
</head>
<body>
    <div>
        <p class="gfg1">GeeksforGeeks</p>
 
        <button onclick="fun()">click me</button>
        <p id="gfg2"></p>
 
    </div>
    <script>
        function fun(){
            const input = prompt('Please enter unsafe integer:');
            let mini = Math.min(input,Number.MAX_SAFE_INTEGER);
            let maxi = Math.max(mini,Number.MIN_SAFE_INTEGER);
            const safeInt = Math.round(maxi);
            document.getElementById("gfg2").innerHTML = input + " => " + safeInt;
        }
    </script>
</body>
</html>

/* Output : GeeksforGeek
buttom: Click Me */
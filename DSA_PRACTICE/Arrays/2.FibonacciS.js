function fib(num) {
  
    let output = [];

    let x = 0;
    let y = 1;

    let sum;
    output.push(x);
    output.push(y);

    let i =2;
    while (i<num) {
        sum = x + y;
        x = y;
        y = sum;

        output.push(sum);
        i = i + 1;
    }    

    return output;
    
}

output = fib(50);

console.log("fibonacci series is ", output);

// 0,1,1,2,3,5,8,13,21
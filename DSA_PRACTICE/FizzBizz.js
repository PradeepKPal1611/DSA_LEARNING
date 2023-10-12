function fizzBizz(n) {

    let output = [];


    while (index <= 100) {

        if (index % 3 === 0 && index % 5 === 0) {

            output.push("fizzBizz");

        }
        else if (index % 3 === 0) {
            output.push("Fizz");
        }
        else if (index % 5 === 0) {
            output.push("Bizz");
        }
        else {
            output.push(index);
        }

    }

    return output;

}

let result = fizzBizz(100);

console.log(result);

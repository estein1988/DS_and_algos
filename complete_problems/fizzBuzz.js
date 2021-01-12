function fizzBuzz(n) {
    for (let i = 1; i <= n; i++) {
        if (i % 3 === 0 && i % 5 === 0) {
            console.log('fizzbuzz');
        } else if (i % 3 === 0) {
            console.log('fizz');
        } else if (i % 5 === 0) {
            console.log('buzz');
        } else {
            console.log(i);
        }
    }
}

function fizzBuzzRefactor(n) {
    for(let i = 1; i <= n; i++){
        let output = '';

        switch(true){
            case(i % 5 === 0 && i % 3 === 0):
                output += 'Fizzbuzz';
                break
        
            case(i % 3 === 0):
                output += 'Fizz';
                break

            case(i % 5 === 0):
                output += 'Buzz';
                break

            default:
                output = 1;
                break
        }
        console.log(i, output)
    }
}
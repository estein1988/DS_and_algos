//4! (4*3*2*1)

function factorialIterative(num){
    let total = 1;
    for(let i = num; i > 1; i--){
        total *= i
    }
    return total
}

// console.log(factorialIterative(4))

function factorialRecursive(num){
    if (num === 1) return 1
    return num * factorialRecursive(num - 1) //would never end, continues to negative numbers forever
}

console.log(factorialIterative(4))
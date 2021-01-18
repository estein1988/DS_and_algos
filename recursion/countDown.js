//iterative
function countDownIterative(num){
    for(let i = num; i > 0; i--){
        console.log(i)
    }
    console.log("All done!")
}

// console.log(countDownIterative(10))

//recursion
function countDownRecursion(num){
    if (num <= 0){
        console.log('All done!')
    } else {
    console.log(num);
    num--;
    countDownRecursion(num);
    }
}

console.log(countDownRecursion(10))
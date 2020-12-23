const {performance} = require('perf_hooks');

function addUpTo(n){
    let array = []
    for(let i=1; i <= n; i++){
        array.push(i)
    }
    let sum = array.reduce((acc, item) => {
        return acc + item
    })
    return sum
}

var t1 = performance.now();
addUpTo(100000000);
var t2 = performance.now();
console.log(`Time Elapsed: ${(t2 - t1) / 1000} seconds.`)
const {performance} = require('perf_hooks');

function addUpTo(n) {
    let total = 0; //1 assignment
    for (let i = 1; i <= n; i++) {
        total += i;
        //n additions PLUS n assignments
    }
    return total;
}

var t1 = performance.now();
addUpTo(1000000000);
var t2 = performance.now();
console.log(`Time Elapsed: ${(t2 - t1) / 1000} seconds.`)

//Big O of n: O(n); doesn't really matter what n is, just increases it by an order of magnitude
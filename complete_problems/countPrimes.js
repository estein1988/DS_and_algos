function countPrimes(n) {
    const ans = Array(n).fill(true);
    let count = 0;
    for(let i = 2; i < n; i++){
        if(ans[i]){
            count++;
        for(let j = 2; i * j < n; j++){
            ans[i * j] = false;
        }}
    }
    return count; 
};

console.log(countPrimes(10))


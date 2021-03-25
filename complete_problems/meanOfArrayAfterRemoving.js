var trimMean = function(arr) {
    arr.sort((a, b) => a - b)
    let remove = arr.length / 20
    for(let i = 0; i < remove; i++){
        arr.pop()
        arr.shift()
    }
    let sum = 0
    for(let el of arr){
        sum += el
    }
    return sum / arr.length
};

console.log(trimMean([1,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,3]))
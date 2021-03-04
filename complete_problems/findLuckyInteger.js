var findLucky = function(arr) {
    let intObj = {};
    let result = [];
    
    for(let int of arr){
        intObj[int] ? intObj[int]++ : intObj[int] = 1
    }

    for (let int in intObj) {
        if (+int === intObj[int]) {
            result.push(int)
        }
    }
    let finalResult = 0
    result.length === 0 
        ? finalResult = -1 
        : finalResult = Math.max(...result)
    return finalResult
};

console.log(findLucky[2,2,2,3,3])
console.log(findLucky[1,2,2,3,3,3])
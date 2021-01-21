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
    let finalResult = +result.sort((a,b) => b-a)[0]
    if (result.length === 0){
        return -1
    } else return finalResult
};
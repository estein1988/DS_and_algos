function missingNumber(arr){
    let sortedArray = arr.sort();
    for(let i = 0; i < sortedArray.length; i++){
        if(sortedArray[i + 1] - 1 !== sortedArray[i]){
            return sortedArray[i + 1] - 1
        }
    }
}

console.log(missingNumber([3,7,5,2,8,4,1]))
function maxSubArraySum1(array, n){
    if(n < array.length){
        return null;
    }

    let max = -Infinity;
    for(let i = 0; i < array.length - n; i++){
        temp = 0;
        for(let j = 0; j < n; j++){
            temp += array[i + j];
        }
        if (temp > max){
            max = temp
        }
    }
    return max
}

function maxSubArraySum2(array, n){
    maxSum = 0;
    tempSum = 0;
    if(array.length < n) return null;
    for(let i = 0; i < n; i++){
        maxSum += array[i]
    }
    tempSum = maxSum;
    for(let i = n; i < array.length; i++){
        tempSum = tempSum - array[i - n] + array[i];
        maxSum = Math.max(maxSum, tempSum);
    }
    return maxSum;
}
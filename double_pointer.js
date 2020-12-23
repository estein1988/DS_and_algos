//o^2
function sumZero1(array){
    for(let i = 0; i < array.length; i++){
        for(let j = i + 1; j < array.length; j++){
            if(array[i] + array[j] === 0){
                return [array[i], array[j]]
            }
        }
    }
}

console.log(sumZero1([-3, -2, -1, 0, 1, 2, 3]))

/////////////////////////////////////////////////////////////////
//o(n0)
function sumZero2(array){
    let left = 0;
    let right = array.length - 1;
    while(left < right){
        let sum = array[left] + array[right];
        if(sum === 0){
            return [array[left], array[right]]
        } else if (sum > 0){
            right--;
        } else {
            left++
        }
    }
}

console.log(sumZero2([-3, -2, -1, 0, 1, 2, 3]))
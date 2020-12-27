//o^2
function averagePair(array, target){
    for(let i = 0; i < array.length; i++){
        for(let j = i + 1; j < array.length; j++){
            if((array[i] + array[j]) / 2 === target){
                return true
            }
        }
    }
    return false
}

//o(n)
function averagePair(array, target){
    let start = 0;
    let end = array.length - 1;
    while (start < end) {
        let average = (array[start] + array[end]) / 2
        if(average === target){
            return true
        } else if (average < target) {
            start++
        } else {
            end--
        }
    }
    return false
}
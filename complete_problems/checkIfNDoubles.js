var checkIfExist = function(arr) {
    for(let i = 0; i < arr.length; i++){
        for(let j = i + 1; j < arr.length; j++){
            if(arr[j] * 2 === arr[i] || arr[i] * 2 === arr[j]){
                return true
            }
        }
    }
    return false
};

var checkIfExist = function(arr) {
    const seen = {};
    
    for (let num of arr) {
        if (seen[num / 2] || seen[num * 2]) return true;
        seen[num] = 1;
    }
    
    return false;
    
};
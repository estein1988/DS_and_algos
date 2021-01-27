var frequencySort = function(nums) {
    const intMap = {};
    for(let int of nums){
        intMap[int] ? intMap[int]++ : intMap[int] = 1
    }
    return nums.sort((a, b) => intMap[a] - intMap[b] || b - a)
};

//alternate
var frequencySort = function(nums) {
    const map = {};
    for(let n of nums){
        map[n] = map[n] +1 | 1;
    }
    return nums.sort((a,b)=>{
        if(map[a] === map[b]){
            return b-a
        } else {
            return map[a] - map[b]
        }
    })
};
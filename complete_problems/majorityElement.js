var majorityElement = function(nums) {
    let intMap = {};
    let max = 0;
    let maxInt = '';

    for(let int of nums){
        intMap[int] ? intMap[int]++ : intMap[int] = 1
    }

    for(let int in intMap){
        if(intMap[int] > max){
            max = intMap[int]
            maxInt = int
        }
    }

    return +maxInt
};

//alternate - O(n log n)
var majorityElement = function(nums) {
    return nums.sort()[Math.floor(nums.sort().length / 2)]
};
var smallerNumbersThanCurrent = function(nums) {
    const sortedArray = [...nums].sort((a, b) => a - b);
    let result = [];
    
    for (let i = 0; i < nums.length; i++) {
        result.push(sortedArray.indexOf(nums[i]))
    }
    return result
};
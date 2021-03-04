var smallerNumbersThanCurrent = function(nums) {
    const sortedArray = [...nums].sort((a, b) => a - b);
    let result = [];
    
    for (let i = 0; i < nums.length; i++) {
        result.push(sortedArray.indexOf(nums[i]))
    }
    return result
};

console.log(smallerNumbersThanCurrent([8,1,2,2,3]))
console.log(smallerNumbersThanCurrent([6,5,4,8]))
console.log(smallerNumbersThanCurrent([7,7,7,7]))


//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
var smallerNumbersThanCurrentAlt = function(nums) {
    let result = [];
    let count = 0;

    for(let i = 0; i < nums.length; i++){
        let currentValue = nums[i];
        
        for(let j = 0; j < nums.length; j++){
            let currentNumber = nums[j];

            if(currentValue > currentNumber) count++
        }
        result.push(count);
        count = 0;
    }
    return result
};
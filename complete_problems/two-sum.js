var twoSum = function(nums, target) {
    let result = [];
    for(let i = 0; i < nums.length - 1; i++){
        for(let j = i + 1; j < nums.length; j++){
            if(nums[i] + nums[j] === target){
                result.push(i);
                result.push(j);
            }
        }
    }
    return result;
};

function twoSum(nums, target){
    let numberObj = {};
    for(let i = 0; i < nums.length; i++){
        let diff = target - nums[i];
        if(diff in numberObj){
            return [numberObj[diff], i]
        }
        numberObj[nums[i]]  = i;
    }
}
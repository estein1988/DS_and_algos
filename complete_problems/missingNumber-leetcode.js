var missingNumber = function(nums) {
    let sortedNumbersArray = nums.sort((a, b) => a - b);
    for (let i = 0; i <= sortedNumbersArray.length; i++) {
        if (sortedNumbersArray[i] !== i) {
            return i;
        }
    }
};


//bettor O(n)
var missingNumber = function(nums) {
    let length = nums.length;
    let actualSum = 0;
    let expectSum = 0;
    for (let i = 0; i < length; i++) {
        actualSum += nums[i];
        expectSum += i + 1;
    }
    return expectSum - actualSum;
};

var missingNumber = function(nums) {
    let n = nums.length;
    let Sum = n * ((n+1) / 2);
    for(let i=0;i<n;i++){
        Sum = Sum - nums[i];
    }
    return Sum;
};
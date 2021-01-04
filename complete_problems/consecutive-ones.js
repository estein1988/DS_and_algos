function consecutiveOnes(nums){
    let maxCount = 0;
    let currCount = 0;

    for (let i = 0; i < nums.length; i++) {
        if (nums[i] === 1) {
            currCount++;
            if (currCount > maxCount) {
                maxCount = currCount;
            }
        } else {
            currCount = 0;
        }
    }
    return maxCount;
}

console.log(consecutiveOnes([1,1,0,1,1,1]))
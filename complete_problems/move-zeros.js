function moveZeros(nums) {
    let placeNonZero = 0;
    for(let i = 0; i<nums.length; i++){
        if(nums[i] !== 0){
            nums[placeNonZero] = nums[i];
            placeNonZero++
        }
    }
    for(let i = placeNonZero; i<nums.length; i++){
        nums[i] = 0
    }
    return nums
};

console.log(moveZeros([0,1,0,3,12]))


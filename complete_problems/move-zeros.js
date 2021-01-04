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

function moveZeros(nums) {
    let i = 0;
    for(let j = 0; j<nums.length; j++){
        if(nums[j] !== 0){
            nums[i] = nums[j];
            i++
        }
    }
    for(let j = i; j<nums.length; j++){
        nums[j] = 0
    }
    return nums
};

//i
//[0,      0,     1,     0,    2,    0,    7,    0,      8]
//^j

//[1, 2, 7, 8, 0, 0, 0, 0]
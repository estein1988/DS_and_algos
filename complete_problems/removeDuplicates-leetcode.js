function removeDuplicates(nums) {
    let i = 0;
    while (i < nums.length) {
        if (nums[i] === nums[i + 1]) {
            nums.splice(i, 1);
        } else {
            i++;
        }
    }
    return nums.length;
};

var removeDuplicates = function(nums) {
    return nums.filter((value, index) => nums.indexOf(value) !== index)
};

var removeDuplicates = function(nums) {
    let i = 0;
    for(let j = 1; j < nums.length; j++){
        if(nums[j] !== nums[i]){
            i++
            nums[i] = nums[j]
        }
    }
    return i + 1
};
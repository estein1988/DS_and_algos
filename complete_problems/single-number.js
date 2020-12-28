function singleNumber(nums) {
    let integerMap = {};
    
    for(let integer of nums){
        integerMap[integer] ? integerMap[integer]++ : integerMap[integer] = 1
    }
    
    for(let integer in integerMap){
        if(integerMap[integer] === 1){
            return integer
        }
    }
};

console.log(singleNumber([4,1,2,1,2]))
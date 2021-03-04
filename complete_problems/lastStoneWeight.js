var lastStoneWeight = function(stones) {
    stones.sort((a, b) => a - b);
    for(let i = stones.length - 1 ; i > 0 ; i--) {
        stones[i - 1] = stones[i] - stones[i - 1];
        stones.splice(i);
        stones.sort((a, b) => a - b);
    }
    return stones[0]
};

console.log(lastStoneWeight([2,7,4,1,8,1]));


/////////////////////////
var lastStoneWeight = function(stones) {
    while(stones.length > 1){
        stones.sort((a,b) => a-b); // Sort array asc
        let x = stones.pop(); // Get and remove last element (heaviest)
        let y = stones.pop(); // Get and remove last element (heaviest)
        if(x != y) stones.push(Math.abs(x-y)) //Push new stone with non-zero weight
    }
        
    return stones
};
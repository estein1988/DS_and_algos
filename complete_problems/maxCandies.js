var kidsWithCandies = function(candies, extraCandies) {
    const maxCandies = Math.max(...candies)
    for(let i = 0; i < candies.length; i++){
        let candies = candies[i]
        (candies + extraCandies) >= maxCandies
            ? candies = true
            : candies = false
    }
    return candies
};

console.log(kidsWithCandies([[2,3,5,1,3], 3]))

//alternate
var kidsWithCandies = function(candies, extraCandies) {
    let results = [];
    for (let i = 0; i < candies.length; i++) {
        results.push(candies[i] + extraCandies >= Math.max(...candies)); 
    }
    return results;
};
function maxProfit(prices) {
    let profit = 0;
    for(let i = 0; i < prices.length; i++){
        if(prices[i + 1] - prices[i] > 0){
            profit += prices[i + 1] - prices[i];
        }
    }
    
    return profit;
};

console.log(maxProfit([7,80,500,3,2,1]));


/////////////////////////////////////////////////////////////

//1 trade - maximmize profit
var maxProfitBruteForce = function(prices) {
    let maxProfit  = 0;

    for (let i = 0; i < prices.length - 1; i++) {
        for(let j = i + 1; j < prices.length; j++) {
            let profit = prices[j] - prices[i];
            maxProfit = profit > maxProfit ? profit : maxProfit;
        }
    }
    
    return maxProfit;
}

var maxProfitAlternate = function(prices) {
    let lowestPrice = prices[0];
    let maxProfit = 0;
    
    for (let i = 0; i < prices.length; i++) {
        let currentPrice = prices[i];
        let profit = currentPrice - lowestPrice;
        lowestPrice = Math.min(currentPrice, lowestPrice);
        maxProfit = Math.max(profit, maxProfit);
    }
    
    return maxProfit;
};
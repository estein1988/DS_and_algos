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
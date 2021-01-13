function maxWealth(accounts) {
    let max = 0;
    for(let i = 0; i < accounts.length; i++){
        let sum = 0;
        for(let j = 0; j < accounts[0].length; j++){
            sum += accounts[i][j]
            if(sum > max){
                max = sum
            }
        }
    }
    return max
};

console.log(maxWealth([[1,2,3],[3,2,1]]))

var maximumWealth = function(accounts){
    let maxWealth = 0;
    for (let i = 0; i < accounts.length; i++){
        let wealth = 0; 
        let account = accounts[i];
        for (let j = 0; j < account.length; j++){
            wealth += account[j];
        }
        maxWealth = Math.max(wealth, maxWealth);
    }
    return maxWealth;
};

var maximumWealth = function(accounts) {
    const arr = accounts
    .map((item) =>
        item.reduce((accumulator, currentValue) => accumulator + currentValue)
    )
    .sort((a, b) => b - a);

    return arr[0];
};
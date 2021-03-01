var countMatches = function(items, ruleKey, ruleValue) {
    let count = 0;
    for (let element of items) {
        if (ruleKey === 'type' && element[0] === ruleValue) {
            count++;
        } else if (ruleKey === 'color' && element[1] === ruleValue) {
            count++;
        } else if (ruleKey === 'name' && element[2] === ruleValue) {
            count++;
        }
    }
    return count;
};


items = [["phone","blue","pixel"],["computer","silver","lenovo"],["phone","gold","iphone"]]
ruleKey = "color"
ruleValue = "silver"
console.log(countMatches(items, ruleKey, ruleValue))
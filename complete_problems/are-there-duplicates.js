function areThereDuplicates() {
    let frequencyObj = {};
    
    for(let element in arguments){
        frequencyObj[arguments[element]] = (frequencyObj[arguments[element]] || 0) + 1
    }
    
    for(let element in frequencyObj){
        if(frequencyObj[element] > 1){
            return true
        }
    }
    return false
}
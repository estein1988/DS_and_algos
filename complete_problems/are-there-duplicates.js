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

//multiple pointers
function areThereDuplicates(...args) {
    args.sort((a,b) => a > b);
    let start = 0;
    let next = 1;
    while(next < args.length){
        if(args[start] === args[next]){
            return true
        }
        start++
        next++
    }
    return false
}
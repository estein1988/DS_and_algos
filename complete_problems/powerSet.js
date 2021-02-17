function PowerSet(inputStr) {
    let result = [];
    
    for(let i = 0; i < inputStr.length; i++){
        result.push(inputStr[i])
    }
    for(let i = 0; i < inputStr.length - 1; i++){
        result.push(inputStr[i].concat(inputStr[i + 1]))
    }
    
    for(let i = 0; i < inputStr.length - 2; i++){
        result.push(inputStr[i].concat(inputStr[i + 2]))
    }
    
    for(let i = 0; i < inputStr.length - 2; i++){
        result.push(''.concat(inputStr[i], inputStr[i+1], inputStr[i+2]))
    }
    return result.sort()
}
var reverseOnlyLetters = function(S) {
    let strippedString = S.replace(/\W/g, '').split('')
    let result = '';
    for(let i = 0; i < S.length; i++){
        if((S[i] >= 'a' && S[i] <= 'z') || (S[i] >= 'A' && S[i] <= 'Z')){
            result += strippedString.pop()
        } else {
            result += S[i]
        }
    }
    return result
};

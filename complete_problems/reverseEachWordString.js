var reverseWords = function(s) {
    let split = s.split(' ')
    let result = []
    for(let word of split){
        let reversed = word.split('').reverse().join('')
        result.push(reversed)
    }
    return result.join(' ')
};
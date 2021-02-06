function reverseWords(array){
    let result = [];
    let splitSentence = array[0].split(' ');
    for(let i = splitSentence.length - 1; i >= 0; i--){
        result.push(splitSentence[i])
    }
    return result;
}

console.log(reverseWords(['Hello my name is Elliott Stein']))
// console.log(reverseWords(reverseWords[0]))
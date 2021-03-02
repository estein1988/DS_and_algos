var isPrefixOfWord = function(sentence, searchWord) {
    let sentenceSplit = sentence.split(' ');
    for(let word of sentenceSplit){
        if(word.startsWith(searchWord)){
            return (sentenceSplit.indexOf(word) + 1)
        }
    }
    return -1
};

sentence1 = "i love eating burger"
searchWord1 = "burg"
console.log(isPrefixOfWord(sentence1, searchWord1))

//alternate
var isPrefixOfWord = function(sentence, searchWord) {
    sentence = sentence.split(' ');
    for (let i = 0; i < sentence.length; i++) {
        if (sentence[i].substr(0, searchWord.length) == searchWord) {
            return i + 1;
        }
    }
    return -1;
};
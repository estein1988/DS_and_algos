function countCharacters(words, chars){
    let count = 0;
    for(let word of words){
        if(word.length > chars.length) continue;
        if(isGoodString(word, chars)) count += word.length;
    }
    return count
}

function isGoodString(word, chars){
    let array = chars.split('');
    for(let char of word){
        if(array.indexOf(char) === -1) return false;
        else array[array.indexOf(char)] = '';
    }
    return true
}

words1 = ["cat","bt","hat","tree"]; 
chars1 = "atach";
console.log(countCharacters(words1, chars1))

words2 = ["hello","world","leetcode"];
chars2 = "welldonehoneyr"
console.log(countCharacters(words2, chars2))

////////////////////////////////////////////////////////////////
var countCharacters = function(words, chars) {
    let res = 0;
    for (let word of words) {
        if (word.length > chars.length) continue;
        if (isGoodString(word, chars)) res += word.length;
    }
    return res;
};
    
var isGoodString = function(word, chars) {
    let arr = chars.split("");
    for (let char of word) {
        let idx = arr.indexOf(char);
        if (idx === -1) return false;
        else arr[idx] = "";
    }      
    return true;
}
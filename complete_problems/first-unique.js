function firstUniqChar(str) {
    let charMap = {};
    
    for(let char of str){
        charMap[char] ? charMap[char]++ : charMap[char] = 1
    }
    
    for (let i = 0; i < s.length; i++) {
        if (charMap[s[i]] === 1) {
            return i;
        }
    }
    return -1
};

console.log(firstUniqChar('leetcode')) //0
console.log(firstUniqChar('loveleetcode')) //2

/////////////////////////////////////////////
var firstUniqCharAlt = function(s) {
    let charMap = {};
    
    for(let char of s){
        charMap[char] ? charMap[char]++ : charMap[char] = 1
    }
    
    for(let char in charMap){
        if(charMap[char] === 1){
            return s.indexOf(char)
        }
    }
    return -1
};
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
var uniqueMorseRepresentations = function(words) {
    let morse = [".-","-...","-.-.","-..",".","..-.","--.","....","..",".---","-.-",".-..","--","-.","---",".--.","--.-",".-.","...","-","..-","...-",".--","-..-","-.--","--.."];
    let map = {};
    for(let i = 0; i < words.length; i++) {
        let str = ''
        for(let j = 0; j < words[i].length; j++) {
            str = str + morse[words[i][j].charCodeAt() - 97]
        }
        map[str] ? map[str]++ : map[str] = 1;
    }
    return Object.keys(map).length
};

var uniqueMorseRepresentations = function(words) {
    if(words.length === 0) return 0;
    const alpha = [".-","-...","-.-.","-..",".","..-.","--.","....","..",".---","-.-",".-..","--","-.","---",".--.","--.-",".-.","...","-","..-","...-",".--","-..-","-.--","--.."];
    let count = {};
    let str = words.join(' ')
    let fullCode = '';
    for(char in str){
        if(str[char] !== ' ') fullCode += alpha[(str.charCodeAt(char) - 97)]
        else fullCode += ' '
    }
    fullCode.split(' ').forEach(phrase => count[phrase] = count[phrase] ? ++count[phrase] : 1)

    return Object.values(count).length
};
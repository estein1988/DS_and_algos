function validAnagrams(string1, string2){
    const charMap1 = {}
    const charMap2 = {}

    for(let char of string1){
        charMap1[char]
            ? charMap1[char]++
            : charMap1[char] = 1
    }

    for(let char of string2){
        charMap2[char]
            ? charMap2[char]++
            : charMap2[char] = 1
    }

    for(let char in charMap1){
        if(charMap1[char] !== charMap2[char]){
            return false
        }
    }
    return true
}

console.log(validAnagrams('cinema', 'iceman'))

function validAnagramsTwo(string1, string2){
    if(string1.length !== string2.length){
        return false
    }

    const lookup = {};

    for(let i = 0; i < string1.length; i++){
        let letter = string1[i];
        lookup[letter] ? lookup[letter] += 1 : lookup[letter] = 1;
    }

    for(let i = 0; i < string2.length; i++){
        let letter = string2[i];
        if (!lookup[letter]){
            return false  //because ZERO is falsey. if we ever encounter zero there's a problem
        } else {
            lookup[letter] -= 1
        }
    }
    return true
}

console.log(validAnagrams('cinema', 'iceman'))
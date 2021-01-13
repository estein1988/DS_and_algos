function romanToInteger(str){
    const romanValues = {
        "I": 1,
        "V": 5,
        "X": 10,
        "L": 50,
        "C": 100,
        "D": 500,
        "M": 1000,
    }

    let count = 0;
    for(let i = 0; i < s.length; i++){
        let character = s[i]
        if(romanValues[character] < romanValues[s[i + 1]]){
            count -= romanValues[character]
        } else {
            count += romanValues[character]
        }
    }
    return count
}
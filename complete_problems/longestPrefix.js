function longestCommonPrefix(strs){
    let longestPrefix = ""
    if(strs.length === 0) return longestPrefix

    for (let i=0; i < strs[0].length; i++){ 
        const char = strs[0][i]

        for (let j = 1; j < strs.length; j++){ 
            if(strs[j][i] !== char) return longestPrefix
        }
        longestPrefix = longestPrefix + char
    }

    return longestPrefix
}

console.log(longestCommonPrefix(["flower","flow","flight"]))
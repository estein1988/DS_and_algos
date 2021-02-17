function reverseVowels(word) {
    let result = '';
    let wordSplit = word.replace(/[bcdfghjklmnpqrstvwxyz\W' ']/gi, '').split('')
    let vowels = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U']
    for (let i = 0; i < word.length; i++) {
        if (vowels.includes(word[i])) {
            result += wordSplit.pop()
        } else {
            result += word[i]
        }
    }
    return result
}
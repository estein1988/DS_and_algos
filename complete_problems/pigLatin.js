function pigIt(str){
    //split string on space
    //map the words
    //word with the first letter at the end of ay
    //join on space

    return str.split(' ').map(word => {
        return word.slice(1) + word[0] + 'ay'
    }).join(' ')
}

console.log(pigIt('hello how are you doing?'))
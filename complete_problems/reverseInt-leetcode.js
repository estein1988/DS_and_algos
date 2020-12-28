function reverseInt(x) {
    let reversed = parseInt(x.toString().split('').reverse().join(''));
    if (reversed > Math.pow(2, 31)){
        return 0
    } else if(x < 0) {
        return reversed * -1        
    } else {
        return reversed
    }
};
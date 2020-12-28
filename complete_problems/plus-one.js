function plusOne(digits){
    for(let i = digits.length - 1; i >= 0; i--){
        if(digits[i] === 9){
            digits[i] = 0
        } else {
            digits[i]++
            return digits
        }
    }
    digits.unshift(1);
    return digits;
}

function plusOne(digits) {
    for (let i = digits.length - 1; i != -1; i--) {
        if (digits[i] != 9) {
            digits[i]++
            return digits
        }
        digits[i] = 0
    }
    digits.unshift(1)
    return digits
};
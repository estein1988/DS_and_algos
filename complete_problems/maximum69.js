var maximum69Number  = function(num) {
    let numStr = num.toString();
    for (let i = 0; i < numStr.length; i++) {
        if(numStr[i] === "6"){
            return parseInt(numStr.replace(numStr[i], "9"));
        }
    }
    return +numString; //returning num also works?? doesn't make sense that returning the input num would work, because the replace isn't on that input?
};

console.log(maximum69Number(9669))
console.log(maximum69Number(9996))
console.log(maximum69Number(9999))

//alternate
var maximum69Number  = function(num) {
    return Number(num.toString().replace('6', '9'))
};
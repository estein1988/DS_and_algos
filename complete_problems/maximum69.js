var maximum69Number  = function(num) {
    let numStr = num.toString();
    for (let i = 0; i < numStr.length; i++) {
        if(numStr[i] === "6"){
            return parseInt(numStr.replace(numStr[i], "9"));
        }
    }
    return num;
};

//alternate
var maximum69Number  = function(num) {
    return Number(num.toString().replace('6', '9'))
};
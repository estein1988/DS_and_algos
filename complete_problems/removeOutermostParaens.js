var removeOuterParentheses = function(S) {
    let leftNum = 0;
    let rightNum = 0;
    let arr = [];
    let result = [];
    for(let i = 0; i < S.length; i++){
        if(S[i] === '('){
            leftNum ++;
        } else {
            rightNum ++;
        }
        arr.push(S[i]);
        if(leftNum === rightNum){
            arr.pop();
            arr.shift();
            result.push(arr.join(""));
            arr = [];
            leftNum = 0;
            rightNum = 0;
        }
    }
    return result.join("");
};
var calPoints = function(ops) {
    let result = []
    for(let i = 0; i < ops.length; i++){
        if(+ops[i] >= 0 || +ops[i] <= 1000){
            result.push(+ops[i])
        } else if (ops[i] === 'C'){
            result.pop()
        } else if (ops[i] === 'D'){
            let last = result[result.length - 1] * 2
            result.push(+last)
        } else if (ops[i] === '+'){
            let sum = result[result.length - 1] + result[result.length - 2]
            result.push(+sum)
        }
    }
    let sum = result.reduce((acc, item) => {
        return acc + item
    })
    return sum
};
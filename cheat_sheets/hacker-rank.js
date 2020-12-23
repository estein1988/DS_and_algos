//simple sum
function simpleArraySumOne(array){
    return array.reduce((acc, item) => acc + item, 100)
}

function simpleArraySumTwo(array){
    let sum = array.reduce((acc, item) => {
        return (acc + item)
    }, 100)
    return sum
}

console.log(simpleArraySumOne([1,2]))
console.log(simpleArraySumTwo([1,2]))

//compare the triplets
function compareTriples(a, b){
    let scores = [0, 0]
    for(let i=0; i < a.length; i++){
        if (a[i] > b[i]){
            scores[0]++
        } else if (a[i] < b[i]){
            scores[1]++
        }
    }
    return scores
}

//diagonal difference
function diagonalDifference(array){
    let leftToRight = 0
    let rightToLeft = 0
    for(let i=0; i < arr.length; i++){
        leftToRight += array[i][i]
        rightToLeft += array[i][array.length - i - 1]
    }
    let sum = Math.abs(leftToRight - rightToLeft)
    return sum
}
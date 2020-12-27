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
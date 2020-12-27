function squareAndSort(array){
    let result = [];
    for(let element of array){
        result.push(element * element)
    }
    return result.sort((a, b) => {
        return a - b
    })
}

console.log(squareAndSort([-4, -1, 0, 3, 10]))
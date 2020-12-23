//o(n) - linear
function linearSearch(array, value){
    for(let i = 0; i < array.length; i++) {
        if(array[i] === value){
            return i
            // return array.indexOf(value)
        }
    }
    return -1
}

console.log(linearSearch([34, 56, 100, 2], 1))
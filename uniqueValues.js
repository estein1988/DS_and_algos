// function countUniqueValues(array){
//     let count = 0
//     for(let i = 0; i < array.length; i++){
//         for(let j = i + 1; j < array.length; j++){
//             if(array[i] === array[j]){
//                 count += 1
//             }
//         }
//     }
//     return count
// }

// console.log(countUniqueValues([1, 1, 1, 1, 1, 2]))

function countUniqueValues(array){
    if (array.length === 0) {
        return 0
    }
    let i = 0;
    for(let j = 1; j < array.length; j++){
        if(array[i] !== array[j]){
            i++;
            array[i] = array[j]
        }
    }
    return i + 1;
}

console.log(countUniqueValues([1, 1, 2, 2, 3, 3]))
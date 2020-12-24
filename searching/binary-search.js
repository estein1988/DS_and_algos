// function binarySearch(array, value){
//     for(let i=0; i<array.length; i++){
//         for(let j=array.length - 1; j > 0; j--){
//             while(i > j){
//                 let middle = Math.floor((i + j) / 2)
//                 if(middle === value){
//                     value.indexOf(array)
//                 } else if (middle < value){
//                     i++
//                 } else if(middle > value){
//                     j--
//                 }
//             }
//         }
//     }
//     return -1
// }

// console.log(binarySearch([2, 5, 6, 9, 13, 15, 28], 15))

//O(log n) or O(1)
function binarySearch(array, value){
    let start = 0;
    let end = array.length - 1
    let middle = Math.floor((start + end) / 2)
    while(array[middle] !== value && start <= end){
        if (element < array[middle]){
            end = middle - 1
        } else {
            start = middle + 1
        }
        middle = Math.floor((start + end) / 2)
    }
    if(array[middle] === value){
        return middle;
    }
    return -1
}

console.log(binarySearch([2, 5, 6, 9, 13, 15, 28], 15))
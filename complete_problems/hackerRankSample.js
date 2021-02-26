function oddNumbers(l, r) {
    let result = [];
    for(let i = l; i <= r; i++){
        if(i % 2 !== 0){
            result.push(i)
        }
    }
    return result
}

// console.log(oddNumbers(2, 99))

// ({
//     oddNumbersTwo:function(l, r){
//         let result = [];
//         for(let i = l; i <= r; i++){
//             if(i % 2 !== 0){
//                 result.push(i)
//             }
//         }
//         return result
//     }
// })
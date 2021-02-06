// function sortByNumber(words){
//     var array = words.split(' ');
//     var sortedArray = [];
//     for(i = 0; i <= array.length; i++) {
//         for(j = 0; j < array.length; j++) {
//             if(array[j].indexOf(i) >= 0) {
//                 sortedArray.push(array[j]);
//             }
//         }
//     }
//     return sortedArray.join(' ');
// }

// console.log(sortByNumber("is2 Thi1s T4est 3a"))

// function sortByNumber(words){
//     var array = words.split(' ');
//     var sortedArray = [];
//     for(i = 0; i <= array.length; i++) {
//         for(j = 0; j < array.length; j++) {
//             if(array[j].includes(i)) {
//                 sortedArray.push(array[j]);
//             }
//         }
//     }
//     return sortedArray.join(' ');
// }

// console.log(sortByNumber("is2 Thi1s T4est 3a"))


// function sortByNumber(words){
//     let array = words.split(' ');
//     let sortedArray = [];
//     for(i = 0; i <= array.length; i++) {
//         if(array[i].includes(i + 1)){
//             sortedArray.push(array[i])
//         }
//     }
//     return sortedArray.join(' ');
// }

// console.log(sortByNumber("is2 Thi1s T4est 3a"))

function sortByNumber(words){
        let array = words.split(' ');
        let sortedArray = [];
        for(let i = 1; i < words.length; i++){
            for(let word of array){
                if(word.includes(i)){
                    sortedArray.push(word)
                }
            }
        }
        return sortedArray.join(' ');
    }
    
console.log(sortByNumber("is2 Thi1s T4est 3a"))
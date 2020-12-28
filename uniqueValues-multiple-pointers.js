function countUniqueValues(array){
    let newObj = {};                  
    for (let i=0; i<arr.length; i++){ 

        let char = arr[i];

        if ( newObj[char] > 0 ) {      
            newObj[char]++            
        } else {
            newObj[char] = 1          
        }
    }
    return Object.keys(newObj).length;   
}

function countUniqueValues(array){
    let integerObj = {};
    
    for(let integer of array){
        integerObj[integer] = integerObj[integer] + 1 || 1
    }
    
    return Object.keys(integerObj).length
}

// console.log(countUniqueValues([1, 1, 1, 1, 1, 2]))

function countUniqueValues(array){
    if (array.length === 0) return 0
    
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
//[1,1,2,3,3,4,5,6,6,7] to // [1,2,3,4,5,6,7,6,6,7]
// o(n^2)

function same(array1, array2){
    if(array1.length !== array2.length) {
        return false
    }
    for(let i = 0; i < array1.length; i++) {
        let correctIndex = array2.indexOf(array1[i] ** 2) //asking what is the index of 1^2 essentially; then 2^2; then 2^2
        if(correctIndex === -1){ //-1 means we have a mismatch then we're done, returns false
            return false
        }
        array2.splice(correctIndex,1) //if true, removes the 1, 2, 3, or 4 from the array
    }
    return true; //never hit a false so returns a true
}

console.log(same([1,2,2,4], [1,4,4,16]))

////////////////////////////////////////////////////////////
//o(n)

function sameBetter(array1, array2){
    if(array1.length !== array2.length) {
        return false
    }

    let frequencyCounter1 = {}
    let frequencyCounter2 = {}
    
    for(let val of array1){
        frequencyCounter1[val] = (frequencyCounter1[val] || 0) + 1 //that 0 there initializes value to 1, because it's saying either set it to whatever value you need to on the left side if you've seen it before, or, set it to zero and add 1 if you've never seen it before
    }

    for(let val of array2){
        frequencyCounter2[val] = (frequencyCounter2[val] || 0) + 1 //that 0 there initializes value to 1, or adds 1
    }

    for(let key in frequencyCounter1){
        if(!(key ** 2 in frequencyCounter2)){
            return false
        }
        if((frequencyCounter2[key ** 2] !== frequencyCounter1[key])){
            return false
        }
    }
    return true
}

console.log(sameBetter([1,2,2,4], [1,4,4,16]))
function findLongest(array){
    let num = '0';
    for(let i=0; i<array.length; i++) {
        let string = array[i].toString();
        if(string.length > num.length) {
        num = string;
        }
    }
    return parseInt(num);
}


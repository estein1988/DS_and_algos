var defangIPaddr = function(address) {
    let addressSplit = address.split('')
    for(let i = 0; i < addressSplit.length; i++){
        if(addressSplit[i] === '.'){
            addressSplit[i] = '[.]'
        }
    } 
    return addressSplit.join('')
};

//alternate
function defangIPaddr (address) { //"255.100.50.0"
    let defanged = '';
    for (let i = 0; i < address.length; i++) {
        if(address[i] === '.') {
        defanged += '[.]';
        } else {
        defanged += address[i];
        }
    }
    return defanged;
};
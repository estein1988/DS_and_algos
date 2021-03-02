var defangIPaddr = function(address) {
    let addressSplit = address.split('')
    for(let i = 0; i < addressSplit.length; i++){
        if(addressSplit[i] === '.'){
            addressSplit[i] = '[.]'
        }
    } 
    return addressSplit.join('')
};

console.log(defangIPaddrAlt('1.1.1.1'))

//alternate
function defangIPaddrAlt (address) { //"255.100.50.0"
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

console.log(defangIPaddrAlt('255.100.50.0'))
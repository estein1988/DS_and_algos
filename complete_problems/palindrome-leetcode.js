function isPalindrome(s) {
    const regex = /[!"#$%&'()*+,-./:;<=> ?@[\]^_`{|}~]/g;
    const result = s.toLowerCase().replace(regex, '');
    
    return result === result.split('').reverse().join('')
};
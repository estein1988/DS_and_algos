var strStr = function(haystack, needle) {
    if(haystack === '' && needle === '') return 0;
    if(needle === '') return 0
    if (haystack.includes(needle)){
        return haystack.indexOf(needle)
    }
    return -1
};

var strStr = function(haystack, needle) {
    
    if(haystack === '' && needle === '') return 0;
    if(needle === '') return 0

    for(let i = 0; i < haystack.length; i++) {
        if(haystack.substring(i, i + needle.length) === needle) {
            return i;
        } 
    }
    return -1;
};
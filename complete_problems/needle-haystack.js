var strStr = function(haystack, needle) {
    if(haystack === '' && needle === '') return 0;
    if(needle === '') return 0
    if (haystack.includes(needle)){
        return haystack.indexOf(needle)
    }
    return -1
};
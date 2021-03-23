var commonChars = function(A) {
    return A.reduce(findCommon, A[0].split(''))
};

const findCommon = (prev, curr) => {
    curr = curr.split('');
    return prev.filter(p => {
        const i = curr.indexOf(p);
        if(i !== -1) {
            curr.splice(i, 1);
            return true;
        }
        return false;
    });
}

console.log(commonChars(["bella","label","roller"]))
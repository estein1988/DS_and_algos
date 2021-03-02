function atoi(s) {
    const match = s.match(/^ *([+-]?\d+)/);
    if (!match) return 0;
    const num = Number(match[1]);
    return Math.max(Math.min(2 ** 31 - 1, num), -(2 ** 31));
};

console.log(atoi("words and 987"))
console.log(atoi("-91283472332"))
console.log(atoi("   -42"))
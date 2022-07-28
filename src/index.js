module.exports = function reverse (n) {
    const str = n.toString();
    const arr = [];
    for (let i=0; i<str.length; i++) {
        if (str[i] !== '-') {
            arr.push(str[i]);
    }}        
    const rev = arr.reverse();
    const res = rev.map(Number);
    const newStr = res.join('');
        return Number(newStr);
}


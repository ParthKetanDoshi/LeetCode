/**
 * @param {string} s
 * @return {number}
 */
var minOperations = function(s) {
    let c1 = 0, c2 = 0, len = s.length;
    for(let i = 0; i < len; i += 2) {
        if(s[i] === '0') c1++;
        else c2++;
        if(s[i + 1] === '1') c1++;
        else if(s[i + 1] === '0') c2++;
    }
    if(c1 < c2) return c1;
    else return c2;
};
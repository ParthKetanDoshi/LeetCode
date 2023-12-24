/**
 * @param {string} s
 * @return {number}
 */
var minOperations = function(s) {
    let c1 = 0, c2 = 0, i, len = s.length;
    for(i = 0; i < len; i += 2) {
        if(s[i] === '0') c1++;
        else c2++;
    }
    for(i = 1; i < len; i += 2) {
        if(s[i] === '1') c1++;
        else c2++;
    }
    if(c1 < c2) return c1;
    else return c2;
};
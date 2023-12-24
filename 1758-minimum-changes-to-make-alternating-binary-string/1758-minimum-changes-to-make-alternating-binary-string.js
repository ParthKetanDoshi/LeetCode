/**
 * @param {string} s
 * @return {number}
 */
var minOperations = function(s) {
    let s1 = "", s2 = "", i, c1 = 0, c2 = 0;
    for(i = 0; i < s.length; i++) {
        if(i % 2 === 0) {
            s1 += '0';
            s2 += '1';
        }
        else {
            s1 += '1';
            s2 += '0';
        }
    }
    for(i = 0; i < s.length; i++) {
        if(s1[i] !== s[i]) c1++;
        if(s2[i] !== s[i]) c2++;
    }
    return c1 < c2 ? c1 : c2;
};
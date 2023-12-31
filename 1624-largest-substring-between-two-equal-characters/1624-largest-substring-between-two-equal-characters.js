/**
 * @param {string} s
 * @return {number}
 */
var maxLengthBetweenEqualCharacters = function(s) {
    let i, len = s.length, res = -1;
    let cache = {};
    for(i = 0; i < len; i++) {
        cache[s[i]] = i;
    }
    for(i = 0; i < len; i++) {
        if(cache[s[i]] !== i) res = res > (cache[s[i]] - i - 1) ? res : (cache[s[i]] - i - 1);
    }
    return res;
};
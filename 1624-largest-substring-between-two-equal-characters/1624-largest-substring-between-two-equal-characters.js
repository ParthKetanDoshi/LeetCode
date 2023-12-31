/**
 * @param {string} s
 * @return {number}
 */
var maxLengthBetweenEqualCharacters = function(s) {
    let res = -1, i = 0;
    let sArray = [];
    for(i = 0; i < s.length; i++) {
        sArray = s.split(s[i]);
        if(sArray.length > 2) {
            sArray.splice(0, 1);
            sArray.splice(-1, 1);
            sArray = sArray.join(s[i]);
            res = res > sArray.length ? res : sArray.length;
        }
    }
    return res;
};
/**
 * @param {string} s
 * @return {number}
 */
var maxScore = function(s) {
    let trailingOnes = s.length - s.split("").slice(1).join("").split("1").join("").length - 1;
    let leadingZeroes = 0;
    let maxScore = 0;
    for(let firstPointer = 0, secondPointer = 1; secondPointer < s.length; firstPointer++, secondPointer++) {
        if(s[firstPointer] === '0') leadingZeroes++;
        maxScore = maxScore > (leadingZeroes + trailingOnes) ? maxScore : (leadingZeroes + trailingOnes);
        if(s[secondPointer] === '1') trailingOnes--;
    }
    return maxScore;
};
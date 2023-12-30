/**
 * @param {string[]} words
 * @return {boolean}
 */
var makeEqual = function(words) {
    const len = words.length;
    if(len === 1) return true;
    words = words.join("").split("").sort();
    let currCharCount = 0, currChar = words[0];
    for(let i = 0; i < words.length; i++) {
        if(words[i] === currChar) {
            currCharCount += 1;
        }
        else {
            if (currCharCount % len !== 0) return false;
            currCharCount = 0;
            currChar = words[i];
            i--;
        }
    }
    if(currCharCount % len !== 0) return false;
    else return true;
};
/**
 * @param {string[]} words
 * @return {boolean}
 */
var makeEqual = function(words) {
    let len = words.length;
    words = words.join("");
    const frequencyMap = {};
    for(let i = 0; i < words.length; i++) {
        if(frequencyMap[words[i]]) {
            frequencyMap[words[i]]++;
        }
        else {
            frequencyMap[words[i]] = 1;
        }
    }
    for(let item in frequencyMap) if(frequencyMap[item] % len !== 0) return false;
    return true;
};
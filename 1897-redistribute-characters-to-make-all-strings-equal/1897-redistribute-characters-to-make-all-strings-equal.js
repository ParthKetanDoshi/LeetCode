/**
 * @param {string[]} words
 * @return {boolean}
 */
var makeEqual = function(words) {
    const len = words.length;
    words = words.join("");
    const frequencyMap = new Map();
    let i;
    for(i = 0; i < words.length; i++) {
        if(frequencyMap.has(words[i])) {
            frequencyMap.set(words[i], frequencyMap.get(words[i]) + 1)
        }
        else {
            frequencyMap.set(words[i], 1)
        }
    }
    for(const [key, value] of frequencyMap.entries()) {
        if(value % len !== 0) return false;
    }
    return true;
};
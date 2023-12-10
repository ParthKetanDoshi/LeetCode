/**
 * @param {string} s
 * @param {string[]} words
 * @return {number[]}
 */
var findSubstring = function(s, words) {
    let result = [];
    const regex = new RegExp(".{" + words[0].length + "}", 'g');
    words = words.sort();
    for(let i = 0, j = words[0].length * words.length; j <= s.length; i++, j++) {
        let checkWords = s.substring(i, j).match(regex).sort();
        let wordsChecked = false;
        for(let k = 0; k < words.length; k++) {
            if(words[k] === checkWords[k]) wordsChecked = true;
            else {
                wordsChecked = false;
                break;
            }
        }
        if(wordsChecked) result.push(i);
    }
    return result;
};
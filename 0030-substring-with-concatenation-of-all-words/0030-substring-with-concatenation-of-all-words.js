/**
 * @param {string} s
 * @param {string[]} words
 * @return {number[]}
 */
var findSubstring = function(s, words) {
    let result = [];
    const wordsLength = words.length;
    const wordLength = words[0].length;
    const regex = new RegExp(".{" + wordLength + "}", 'g');
    words = words.sort();
    for(let i = 0, j = wordLength * wordsLength; j <= s.length; i++, j++) {
        let checkString = s.substring(i, j);
        let checkWords = checkString.match(regex).sort();
        let wordsChecked = false;
        for(let k = 0; k < wordsLength; k++) {
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
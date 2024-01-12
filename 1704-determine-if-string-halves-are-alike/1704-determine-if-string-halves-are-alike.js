/**
 * @param {string} s
 * @return {boolean}
 */
var halvesAreAlike = function(s) {
    const vowels = new Set(['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U']);
    let a = 0, b = 0, i;
    for(i = 0; i < s.length / 2; i++) if(vowels.has(s[i])) a += 1;
    for(i = s.length / 2; i < s.length; i++) if(vowels.has(s[i])) b += 1;
    return a === b;
};
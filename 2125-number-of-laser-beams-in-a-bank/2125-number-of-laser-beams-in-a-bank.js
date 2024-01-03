/**
 * @param {string[]} bank
 * @return {number}
 */
var numberOfBeams = function(bank) {
    let prev = 0, beams = 0;
    for(let i = 0; i < bank.length; i++) {
        let curr = bank[i].split('0').join('').length;
        if(curr !== 0) {
            if(prev !== 0) {
                beams += curr * prev;
            }
            prev = curr;
        }
    }
    return beams;
};
/**
 * @param {string[]} bank
 * @return {number}
 */
var numberOfBeams = function(bank) {
    /*
    let lasers = [];
    let i, beams = 0;
    for(i = 0; i < bank.length; i++) {
        bank[i] = bank[i].split('0');
        bank[i] = bank[i].join('');
        if(bank[i].length > 0) lasers.push(bank[i].length);
    }
    for(i = 0; i < lasers.length - 1; i++) beams += (lasers[i] * lasers[i + 1]);
    return beams;
    */
    let i, curr = 0, prev = 0, beams = 0;
    for(i = 0; i < bank.length; i++) {
        curr = bank[i].split('0').join('').length;
        if(curr !== 0) {
            if(prev !== 0) {
                beams += curr * prev;
            }
            prev = curr;
        }
    }
    return beams;
};
/**
 * @param {string} n
 * @return {number}
 */
var minPartitions = function(n) {
    let nArray = n.split("");
    let max = 0;
    for(let i=0; i < nArray.length; i++) {
        if(+nArray[i] > max) max = +nArray[i];
    }
    return max;
};
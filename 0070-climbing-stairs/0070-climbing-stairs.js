/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function(n) {
    let res = [2, n > 3 ? 3 : n]
    while(n > 3) {
        [res[0], res[1]] = [res[1], res[0] + res[1]]
        n--;
    }
    return res[1];
};
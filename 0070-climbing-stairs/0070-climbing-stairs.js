/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function(n) {
    if(n <= 3) return n;
    else {
        let a = 2, b = 3, res = 0;
        while(n > 3) {
            res = a + b;
            a = b;
            b = res;
            n--;
        }
        return res;
    }
};
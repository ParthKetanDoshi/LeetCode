/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function(n) {
    if(n <= 3) return n;
    else {
        let a = 2, res = 3;
        while(n > 3) {
            let temp = a + res;
            a = res;
            res = temp;
            n--;
        }
        return res;
    }
};
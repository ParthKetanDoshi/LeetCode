/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function(n) {
    if(n <= 3) return n;
    else {
        let a = 2, b = 3, res = 0;
        let obj = {a: 2, b: 3, res: 0}
        while(n > 3) {
            obj.res = obj.a + obj.b;
            obj.a = obj.b;
            obj.b = obj.res;
            n--;
        }
        return obj.res;
    }
};
class Solution:
    def climbStairs(self, n: int) -> int:
        a = 2
        res = 3 if n > 3 else n
        while n > 3:
            a, res = res, res + a
            n -= 1
        return res
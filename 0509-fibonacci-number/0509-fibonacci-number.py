class Solution(object):
    def fib(self, n):
        """
        :type n: int
        :rtype: int
        """
        def fib_2(n):
            if n<=1: return n
            else: return fib_2(n-1) + fib_2(n-2)
        return fib_2(n)
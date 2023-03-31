class Solution(object):
    def fib(self, n):
        """
        :type n: int
        :rtype: int
        """
        def fib_2(n, ht):
            if n in ht: return ht[n]
            else:
                ht[n] = fib_2(n-1, ht) + fib_2(n-2, ht)
                return ht[n]
        return fib_2(n, {0:0, 1:1})
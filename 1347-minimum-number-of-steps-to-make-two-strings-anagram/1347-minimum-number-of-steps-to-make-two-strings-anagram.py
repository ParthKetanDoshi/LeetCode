class Solution:
    def minSteps(self, s: str, t: str) -> int:
        result = 0
        cache = {}
        for char in s:
            if char not in cache:
                cache[char] = 1
            else:
                cache[char] += 1
        for char in t:
            if char in cache:
                if cache[char] > 0:
                    cache[char] -= 1
        for key, val in cache.items():
            result += val
        return result
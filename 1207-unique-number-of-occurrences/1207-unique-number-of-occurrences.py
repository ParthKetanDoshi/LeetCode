class Solution:
    def uniqueOccurrences(self, arr: List[int]) -> bool:
        cache = {}
        for item in arr:
            if item not in cache:
                cache[item] = 1
            else:
                cache[item] += 1
        counts = [cache[a] for a in cache.keys()]
        return len(counts) == len(set(counts))
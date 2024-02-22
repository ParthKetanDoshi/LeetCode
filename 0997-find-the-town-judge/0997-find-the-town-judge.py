class Solution:
    def findJudge(self, n: int, trust: List[List[int]]) -> int:
        trusted = defaultdict(int)
        trusting = defaultdict(int)
        for src, dst in trust:
            trusting[src] += 1
            trusted[dst] += 1
        for i in range(1, n + 1):
            if trusted[i] == n - 1 and trusting[i] == 0:
                return i
        return -1
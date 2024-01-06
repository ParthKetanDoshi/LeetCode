class Solution:
    def jobScheduling(self, startTime: List[int], endTime: List[int], profit: List[int]) -> int:
        intervals = sorted(zip(startTime, endTime, profit))
        cache = {}   
        def dt(i):
            if i == len(intervals):
                return 0
            if i in cache:
                return cache[i]
            res = dt(i + 1)
            j = bisect.bisect(intervals, (intervals[i][1], -1, -1))
            cache[i] = res = max(res, intervals[i][2] + dt(j))
            return res
        return dt(0)
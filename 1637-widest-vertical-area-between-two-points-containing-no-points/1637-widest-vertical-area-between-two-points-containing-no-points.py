class Solution:
    def maxWidthOfVerticalArea(self, points: List[List[int]]) -> int:
        x = [points[i][0] for i in range(len(points))]
        x.sort()
        return max(x[i] - x[i - 1] for i in range(1, len(x)))
class Solution:
    def maxWidthOfVerticalArea(self, points: List[List[int]]) -> int:
        res = 0
        x_coordinates = [points[i][0] for i in range(len(points))]
        x_coordinates.sort()
        for i in range(1, len(x_coordinates)):
            if x_coordinates[i] - x_coordinates[i - 1] > res:
                res = x_coordinates[i] - x_coordinates[i - 1]
        return res
class Solution:
    def maxWidthOfVerticalArea(self, points: List[List[int]]) -> int:
        x_coordinates = [points[i][0] for i in range(len(points))]
        x_coordinates.sort()
        res = x_coordinates[1] - x_coordinates[0]
        for i in range(2, len(x_coordinates)):
            if x_coordinates[i] - x_coordinates[i - 1] > res:
                res = x_coordinates[i] - x_coordinates[i - 1]
        return res
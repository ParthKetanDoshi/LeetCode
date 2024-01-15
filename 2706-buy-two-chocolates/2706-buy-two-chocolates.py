class Solution:
    def buyChoco(self, prices: List[int], money: int) -> int:
        diff = money - sorted(prices)[0] - sorted(prices)[1]
        if diff >= 0:
            return diff
        else:
            return money
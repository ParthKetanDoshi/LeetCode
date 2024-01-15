class Solution:
    def buyChoco(self, prices: List[int], money: int) -> int:
        prices = sorted(prices)
        diff = money - prices[0] - prices[1]
        if diff >= 0:
            return diff
        else:
            return money
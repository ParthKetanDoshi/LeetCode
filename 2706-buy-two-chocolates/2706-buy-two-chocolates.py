class Solution:
    def buyChoco(self, prices: List[int], money: int) -> int:
        return money - sorted(prices)[0] - sorted(prices)[1] if money - sorted(prices)[0] - sorted(prices)[1] >= 0 else money
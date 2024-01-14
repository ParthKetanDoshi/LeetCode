class Solution:
    def closeStrings(self, word1: str, word2: str) -> bool:
        if len(word1) != len(word2):
            return False
        Counter1 = Counter(word1)
        Counter2 = Counter(word2)
        return set(Counter1.keys()) == set(Counter2.keys()) and sorted(list(Counter1.values())) == sorted(list(Counter2.values()))
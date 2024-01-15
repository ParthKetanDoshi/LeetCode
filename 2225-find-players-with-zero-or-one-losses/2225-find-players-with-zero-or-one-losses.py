class Solution:
    def findWinners(self, matches: List[List[int]]) -> List[List[int]]:
        players = {}
        for match in matches:
            if match[0] not in players:
                players[match[0]] = 0
            if match[1] not in players:
                players[match[1]] = 1
            else:
                players[match[1]] += 1
        result = [[], []]
        for k, v in players.items():
            if v == 0:
                result[0].append(k)
            if v == 1:
                result[1].append(k)
        result[0].sort()
        result[1].sort()
        return result
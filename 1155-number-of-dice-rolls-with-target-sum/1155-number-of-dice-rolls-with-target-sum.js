/**
 * @param {number} n
 * @param {number} k
 * @param {number} target
 * @return {number}
 */
var numRollsToTarget = function(n, k, target) {
    const MOD = 10**9 + 7;
    const dp = new Array(n + 1).fill(null).map(() => new Array(target + 1).fill(0));
    dp[0][0] = 1;

    for (let i = 1; i <= n; i++) {
        for (let j = 1; j <= k; j++) {
            for (let t = j; t <= target; t++) {
                dp[i][t] = (dp[i][t] + dp[i - 1][t - j]) % MOD;
            }
        }
    }

    return dp[n][target];
};
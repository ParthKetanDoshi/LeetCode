/**
 * @param {string} colors
 * @param {number[]} neededTime
 * @return {number}
 */
var minCost = function(colors, neededTime) {
    if(colors === null || colors.length === 0 || neededTime === null || neededTime.length === 0) return 0;
    let res = 0, maxCost = neededTime[0];
    for(let i = 1; i < colors.length; i++)
    {
        if(colors[i] === colors[i-1])
        {
            res += Math.min(maxCost, neededTime[i]);
            maxCost = Math.max(maxCost, neededTime[i]);
        }
        else
        {
            maxCost = neededTime[i];
        }
    }
    return res;
};
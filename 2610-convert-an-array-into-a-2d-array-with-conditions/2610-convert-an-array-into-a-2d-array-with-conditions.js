/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var findMatrix = function(nums) {
    let numsObj = {};
    let i;
    for(i = 0; i < nums.length; i++){
        if(numsObj[nums[i]] === undefined) numsObj[nums[i]] = 1;
        else numsObj[nums[i]] += 1;
    }
    let res = [];
    for(const [key, value] of Object.entries(numsObj)) {
        i = 0;
        while(i < value) {
            if(!res[i]) res[i] = [];
            res[i].push(+key);
            i++;
        }
    }
    return res;
};
/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
    const numset = new Set();
    for(const num of nums) {
        if(numset.has(num)) return true;
        numset.add(num);
    }
    return false;
};
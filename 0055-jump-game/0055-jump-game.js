/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canJump = function(nums) {
    /*
    let i = 0;
    while(i < nums.length) {
        i += nums[i];
    }
    return i >= nums.length - 1;
    */
    let goal = nums.length - 1;
    for(let i = nums.length - 1; i > -1; i--) if(i + nums[i] >= goal) goal = i;
    return goal === 0;
};
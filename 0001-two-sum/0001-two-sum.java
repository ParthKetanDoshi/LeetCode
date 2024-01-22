class Solution {
    public int[] twoSum(int[] nums, int target) {
        int[] res = new int[2];
        HashMap<Integer, Integer> diffMap = new HashMap<>();
        for(int i = 0; i < nums.length; i++) {
            if(diffMap.get(nums[i]) != null){
                res[0] = diffMap.get(nums[i]);
                res[1] = i;
                break;
            }
            else diffMap.put(target - nums[i], i);
        }
        return res;
    }
}
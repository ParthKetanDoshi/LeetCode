class Solution {
    public int[] twoSum(int[] nums, int target) {
        HashMap<Integer, Integer> diffMap = new HashMap<>();
        for(int i = 0; i < nums.length; i++) {
            if(diffMap.get(nums[i]) != null) return new int[]{diffMap.get(nums[i]), i};
            else diffMap.put(target - nums[i], i);
        }
        return new int[]{0, 0};
    }
}
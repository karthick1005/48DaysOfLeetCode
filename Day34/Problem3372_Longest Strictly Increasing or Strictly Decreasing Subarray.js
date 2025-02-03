/**
 * @param {number[]} nums
 * @return {number}
 */
var longestMonotonicSubarray = function(nums) {
      let incLength = 1, decLength = 1, maxLength = 1;

    for (let i = 0; i < nums.length - 1; i++) {
        if (nums[i + 1] > nums[i]) {
            incLength++;
            decLength = 1;
        } else if (nums[i + 1] < nums[i]) {
            decLength++;
            incLength = 1;
        } else {
            incLength = 1;
            decLength = 1;
        }
        maxLength = Math.max(maxLength, incLength, decLength);
    }
    
    return maxLength;
};
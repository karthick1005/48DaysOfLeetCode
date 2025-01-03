/**
 * @param {number[]} nums
 * @return {number}
 */
var waysToSplitArray = function(nums) {
    let count=0;
    let prefixsum=Array(nums.length).fill(0);
    prefixsum[0]=nums[0]
    for(let i=1;i<nums.length;i++)
    {
        prefixsum[i]=prefixsum[i-1]+nums[i]
    }
    for(let i=0;i<nums.length-1;i++)
    {
        if(prefixsum[i]>=(prefixsum[nums.length-1]-prefixsum[i]))
        {
            
            count++;
        }
    }
    return count;
};
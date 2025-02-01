/**
 * @param {number[]} nums
 * @return {boolean}
 */
var isArraySpecial = function(nums) {
    let parity=nums[0] % 2 === 0 ? 0 : 1; //0 means even 1 means odd
    for(let i=1;i<nums.length;i++)
    {
        const state=nums[i] % 2 === 0 ? 0 : 1;
        if(parity===state)return false;
        parity=state; 
    }
    return true
};
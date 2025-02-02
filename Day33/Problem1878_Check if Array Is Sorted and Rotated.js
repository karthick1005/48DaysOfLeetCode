/**
 * @param {number[]} nums
 * @return {boolean}
 */
var check = function(nums) {
    const arr=Array.from(nums).sort((a,b)=>a-b)
    let i=nums.length-1
    while(i>=0)
    {
        const element=nums.pop();
        nums.unshift(element);
        i--
        if(nums.join(',')===arr.join(','))
        {
            return true
        }
    }
    return false
};
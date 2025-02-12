/**
 * @param {number[]} nums
 * @return {number}
 */
var maximumSum = function(nums) {
    let max=-1;
    const hash=new Map()
    for(let i=0;i<nums.length;i++)
    {
        const sum=(nums[i].toString().split('').reduce((sum,a)=>sum+Number(a),0))
        console.log(sum)
        if(hash.has(sum))
        {
            max=Math.max(max,nums[i]+Math.max(...hash.get(sum)))
            const arr=hash.get(sum);
            arr.push(nums[i]);
            hash.set(sum,arr)
        }
        else
        {
            const arr=[nums[i]]
            hash.set(sum,arr)
        }
    }
    return max
};
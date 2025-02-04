/**
 * @param {number[]} nums
 * @return {number}
 */
var maxAscendingSum = function(nums) {
    const arr=[];
      let x=0
    arr[x]=[]
    arr[x].push(nums[0])
  
    for(let i=1;i<nums.length;i++)
    {
        let len=arr[x].length-1
        if(arr[x][len]<nums[i])
        {
            arr[x].push(nums[i])
        }
        else
        {
            x++
             arr[x]=[]
            arr[x].push(nums[i])
        }
    }
   const Sum=arr.map((val)=>val.reduce((acc,target)=>acc+target,0))
   return Math.max(...Sum)
};
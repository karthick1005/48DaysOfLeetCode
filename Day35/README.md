
# Day 35: 1927 - Maximum Ascending Subarray Sum

**Difficulty**: Easy

## Problem Description
<p>Given an array of positive integers <code>nums</code>, return the <em>maximum possible sum of an <strong>ascending</strong> subarray in </em><code>nums</code>.</p>

<p>A subarray is defined as a contiguous sequence of numbers in an array.</p>

<p>A subarray <code>[nums<sub>l</sub>, nums<sub>l+1</sub>, ..., nums<sub>r-1</sub>, nums<sub>r</sub>]</code> is <strong>ascending</strong> if for all <code>i</code> where <code>l &lt;= i &lt; r</code>, <code>nums<sub>i </sub> &lt; nums<sub>i+1</sub></code>. Note that a subarray of size <code>1</code> is <strong>ascending</strong>.</p>

<p>&nbsp;</p>
<p><strong class="example">Example 1:</strong></p>

<pre>
<strong>Input:</strong> nums = [10,20,30,5,10,50]
<strong>Output:</strong> 65
<strong>Explanation: </strong>[5,10,50] is the ascending subarray with the maximum sum of 65.
</pre>

<p><strong class="example">Example 2:</strong></p>

<pre>
<strong>Input:</strong> nums = [10,20,30,40,50]
<strong>Output:</strong> 150
<strong>Explanation: </strong>[10,20,30,40,50] is the ascending subarray with the maximum sum of 150.
</pre>

<p><strong class="example">Example 3:</strong></p>

<pre>
<strong>Input:</strong> nums = [12,17,15,13,10,11,12]
<strong>Output:</strong> 33
<strong>Explanation: </strong>[10,11,12] is the ascending subarray with the maximum sum of 33.
</pre>

<p>&nbsp;</p>
<p><strong>Constraints:</strong></p>

<ul>
	<li><code>1 &lt;= nums.length &lt;= 100</code></li>
	<li><code>1 &lt;= nums[i] &lt;= 100</code></li>
</ul>



## Solution
```javascript
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
```


## Next Steps
- Add optimization or improvements.


# Day 46: 1819 - Construct the Lexicographically Largest Valid Sequence

**Difficulty**: Medium

## Problem Description
<p>Given an integer <code>n</code>, find a sequence that satisfies all of the following:</p>

<ul>
	<li>The integer <code>1</code> occurs once in the sequence.</li>
	<li>Each integer between <code>2</code> and <code>n</code> occurs twice in the sequence.</li>
	<li>For every integer <code>i</code> between <code>2</code> and <code>n</code>, the <strong>distance</strong> between the two occurrences of <code>i</code> is exactly <code>i</code>.</li>
</ul>

<p>The <strong>distance</strong> between two numbers on the sequence, <code>a[i]</code> and <code>a[j]</code>, is the absolute difference of their indices, <code>|j - i|</code>.</p>

<p>Return <em>the <strong>lexicographically largest</strong> sequence</em><em>. It is guaranteed that under the given constraints, there is always a solution. </em></p>

<p>A sequence <code>a</code> is lexicographically larger than a sequence <code>b</code> (of the same length) if in the first position where <code>a</code> and <code>b</code> differ, sequence <code>a</code> has a number greater than the corresponding number in <code>b</code>. For example, <code>[0,1,9,0]</code> is lexicographically larger than <code>[0,1,5,6]</code> because the first position they differ is at the third number, and <code>9</code> is greater than <code>5</code>.</p>

<p>&nbsp;</p>
<p><strong class="example">Example 1:</strong></p>

<pre>
<strong>Input:</strong> n = 3
<strong>Output:</strong> [3,1,2,3,2]
<strong>Explanation:</strong> [2,3,2,1,3] is also a valid sequence, but [3,1,2,3,2] is the lexicographically largest valid sequence.
</pre>

<p><strong class="example">Example 2:</strong></p>

<pre>
<strong>Input:</strong> n = 5
<strong>Output:</strong> [5,3,1,4,3,5,2,4,2]
</pre>

<p>&nbsp;</p>
<p><strong>Constraints:</strong></p>

<ul>
	<li><code>1 &lt;= n &lt;= 20</code></li>
</ul>



## Solution
```javascript
/**
 * @param {number} n
 * @return {number[]}
 */
var constructDistancedSequence = function(n) {
    let result = Array(2 * n - 1).fill(0);
    let used = Array(n + 1).fill(false);
    backtrack(result, used, n, 0);
    return result;
};

function backtrack(result, used, n, index) {
    while (index < result.length && result[index] !== 0) {
        index++;
    }
    if (index === result.length) {
        return true;
    }

    for (let i = n; i >= 1; i--) {
        if (used[i]) continue;

        if (i === 1) {
            result[index] = 1;
            used[1] = true;
            if (backtrack(result, used, n, index + 1)) return true;
            result[index] = 0;
            used[1] = false;
        } else if (index + i < result.length && result[index + i] === 0) {
            result[index] = i;
            result[index + i] = i;
            used[i] = true;
            if (backtrack(result, used, n, index + 1)) return true;
            result[index] = 0;
            result[index + i] = 0;
            used[i] = false;
        }
    }
    return false;
}
```


## Next Steps
- Add optimization or improvements.

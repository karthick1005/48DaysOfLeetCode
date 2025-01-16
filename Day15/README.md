
# Day 15: 2533 - Bitwise XOR of All Pairings

**Difficulty**: Medium

## Problem Description
<p>You are given two <strong>0-indexed</strong> arrays, <code>nums1</code> and <code>nums2</code>, consisting of non-negative integers. There exists another array, <code>nums3</code>, which contains the bitwise XOR of <strong>all pairings</strong> of integers between <code>nums1</code> and <code>nums2</code> (every integer in <code>nums1</code> is paired with every integer in <code>nums2</code> <strong>exactly once</strong>).</p>

<p>Return<em> the <strong>bitwise XOR</strong> of all integers in </em><code>nums3</code>.</p>

<p>&nbsp;</p>
<p><strong class="example">Example 1:</strong></p>

<pre>
<strong>Input:</strong> nums1 = [2,1,3], nums2 = [10,2,5,0]
<strong>Output:</strong> 13
<strong>Explanation:</strong>
A possible nums3 array is [8,0,7,2,11,3,4,1,9,1,6,3].
The bitwise XOR of all these numbers is 13, so we return 13.
</pre>

<p><strong class="example">Example 2:</strong></p>

<pre>
<strong>Input:</strong> nums1 = [1,2], nums2 = [3,4]
<strong>Output:</strong> 0
<strong>Explanation:</strong>
All possible pairs of bitwise XORs are nums1[0] ^ nums2[0], nums1[0] ^ nums2[1], nums1[1] ^ nums2[0],
and nums1[1] ^ nums2[1].
Thus, one possible nums3 array is [2,5,1,6].
2 ^ 5 ^ 1 ^ 6 = 0, so we return 0.
</pre>

<p>&nbsp;</p>
<p><strong>Constraints:</strong></p>

<ul>
	<li><code>1 &lt;= nums1.length, nums2.length &lt;= 10<sup>5</sup></code></li>
	<li><code>0 &lt;= nums1[i], nums2[j] &lt;= 10<sup>9</sup></code></li>
</ul>



## Solution
```javascript
/**
 * @param {string} s
 * @param {string} p
 * @return {boolean}
 */

var isMatch = function(s, p) {
   const m = s.length;
    const n = p.length;

    // Create a DP table with dimensions (m+1) x (n+1)
    const dp = Array.from({ length: m + 1 }, () => Array(n + 1).fill(false));

    // Base case: Empty string matches empty pattern
    dp[0][0] = true;

    // Fill the table for patterns that can match an empty string
    for (let j = 1; j <= n; j++) {
        if (p[j - 1] === '*') {
            dp[0][j] = dp[0][j - 2]; // '*' can remove the preceding character
        }
    }

    // Fill the DP table
    for (let i = 1; i <= m; i++) {
        for (let j = 1; j <= n; j++) {
            if (p[j - 1] === s[i - 1] || p[j - 1] === '.') {
                // Characters match or '.' matches any character
                dp[i][j] = dp[i - 1][j - 1];
            } else if (p[j - 1] === '*') {
                // '*' matches zero occurrences of the preceding character
                dp[i][j] = dp[i][j - 2];

                // '*' matches one or more occurrences of the preceding character
                if (p[j - 2] === s[i - 1] || p[j - 2] === '.') {
                    dp[i][j] = dp[i][j] || dp[i - 1][j];
                }
            }
        }
    }
    // console.log(dp)
    // Return whether the full string matches the full pattern
    return dp[m][n];
};
```


## Next Steps
- Add optimization or improvements.

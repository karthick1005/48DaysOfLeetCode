# Day 1: Maximum Score After Splitting a String

**Problem**: [LeetCode 1422 - Maximum Score After Splitting a String](https://leetcode.com/problems/maximum-score-after-splitting-a-string)  
**Difficulty**: Easy

---

## Problem Description

Given a string `s` of zeros and ones, split the string into two non-empty parts such that the score is maximized.

The score is calculated as:

- The number of `0`s in the left part **+** the number of `1`s in the right part.

---

## Approach

1. **Brute-Force Approach**:

   - Iterate through every possible split of the string.
   - Count the `0`s in the left part and `1`s in the right part for each split.
   - Track the maximum score.

2. **Optimization Plan**:
   - Use a single traversal with counters or prefix sums to improve time complexity to O(n).

---

## Solution

```javascript
/**
 * @param {string} s
 * @return {number}
 */
var maxScore = function (s) {
  let max_score = 0;
  for (let i = 1; i < s.length; i++) {
    let left = s
      .substring(0, i)
      .split("")
      .reduce((acc, str) => {
        if (str === "0") acc++;
        return acc;
      }, 0);
    let right = s
      .substring(i, s.length)
      .split("")
      .reduce((acc, str) => {
        if (str === "1") acc++;
        return acc;
      }, 0);
    max_score = Math.max(max_score, left + right);
  }
  return max_score;
};
```

---

## Key Learnings

- **String Manipulation**: Efficiently handle substrings and count specific characters.
- **Edge Cases**: Consider scenarios such as:
  - `s = "10"`
  - `s = "01"`
  - Strings with all `0`s or all `1`s.
- **Optimization**: While brute force works, it highlights the importance of optimizing for better performance.

---

## Result

- **Time Complexity**: O(n²) (Brute-Force)
- **Space Complexity**: O(n)
  

---

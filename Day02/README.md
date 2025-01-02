# Day 02: 2691 - Count Vowel Strings in Ranges

**Difficulty**: Medium

## Problem Description

<p>You are given a <strong>0-indexed</strong> array of strings <code>words</code> and a 2D array of integers <code>queries</code>.</p>

<p>Each query <code>queries[i] = [l<sub>i</sub>, r<sub>i</sub>]</code> asks us to find the number of strings present in the range <code>l<sub>i</sub></code> to <code>r<sub>i</sub></code> (both <strong>inclusive</strong>) of <code>words</code> that start and end with a vowel.</p>

<p>Return <em>an array </em><code>ans</code><em> of size </em><code>queries.length</code><em>, where </em><code>ans[i]</code><em> is the answer to the </em><code>i</code><sup>th</sup><em> query</em>.</p>

<p><strong>Note</strong> that the vowel letters are <code>&#39;a&#39;</code>, <code>&#39;e&#39;</code>, <code>&#39;i&#39;</code>, <code>&#39;o&#39;</code>, and <code>&#39;u&#39;</code>.</p>

<p>&nbsp;</p>
<p><strong class="example">Example 1:</strong></p>

<pre>
<strong>Input:</strong> words = [&quot;aba&quot;,&quot;bcb&quot;,&quot;ece&quot;,&quot;aa&quot;,&quot;e&quot;], queries = [[0,2],[1,4],[1,1]]
<strong>Output:</strong> [2,3,0]
<strong>Explanation:</strong> The strings starting and ending with a vowel are &quot;aba&quot;, &quot;ece&quot;, &quot;aa&quot; and &quot;e&quot;.
The answer to the query [0,2] is 2 (strings &quot;aba&quot; and &quot;ece&quot;).
to query [1,4] is 3 (strings &quot;ece&quot;, &quot;aa&quot;, &quot;e&quot;).
to query [1,1] is 0.
We return [2,3,0].
</pre>

<p><strong class="example">Example 2:</strong></p>

<pre>
<strong>Input:</strong> words = [&quot;a&quot;,&quot;e&quot;,&quot;i&quot;], queries = [[0,2],[0,1],[2,2]]
<strong>Output:</strong> [3,2,1]
<strong>Explanation:</strong> Every string satisfies the conditions, so we return [3,2,1].</pre>

<p>&nbsp;</p>
<p><strong>Constraints:</strong></p>

<ul>
	<li><code>1 &lt;= words.length &lt;= 10<sup>5</sup></code></li>
	<li><code>1 &lt;= words[i].length &lt;= 40</code></li>
	<li><code>words[i]</code> consists only of lowercase English letters.</li>
	<li><code>sum(words[i].length) &lt;= 3 * 10<sup>5</sup></code></li>
	<li><code>1 &lt;= queries.length &lt;= 10<sup>5</sup></code></li>
	<li><code>0 &lt;= l<sub>i</sub> &lt;= r<sub>i</sub> &lt;&nbsp;words.length</code></li>
</ul>

---

---

## Solution

```javascript
/**
 * @param {string[]} words
 * @param {number[][]} queries
 * @return {number[]}
 */
var vowelStrings = function (words, queries) {
  let vowel_set = new Set(["a", "e", "i", "o", "u"]);
  let prefixSum = Array(words.length).fill(0);
  console.log(prefixSum);

  for (let i = 0; i < words.length; i++) {
    const firstChar = words[i][0];
    const lastChar = words[i][words[i].length - 1];
    prefixSum[i + 1] =
      prefixSum[i] +
      (vowel_set.has(firstChar) && vowel_set.has(lastChar) ? 1 : 0);
  }
  const ans = [];
  for (const [l, r] of queries) {
    ans.push(prefixSum[r + 1] - prefixSum[l]);
  }
  return ans;
};
```

## Next Steps

- Add optimization or improvements.


# Day 01: 952 - Word Subsets

**Difficulty**: Medium

## Problem Description
<p>You are given two string arrays <code>words1</code> and <code>words2</code>.</p>

<p>A string <code>b</code> is a <strong>subset</strong> of string <code>a</code> if every letter in <code>b</code> occurs in <code>a</code> including multiplicity.</p>

<ul>
	<li>For example, <code>&quot;wrr&quot;</code> is a subset of <code>&quot;warrior&quot;</code> but is not a subset of <code>&quot;world&quot;</code>.</li>
</ul>

<p>A string <code>a</code> from <code>words1</code> is <strong>universal</strong> if for every string <code>b</code> in <code>words2</code>, <code>b</code> is a subset of <code>a</code>.</p>

<p>Return an array of all the <strong>universal</strong> strings in <code>words1</code>. You may return the answer in <strong>any order</strong>.</p>

<p>&nbsp;</p>
<p><strong class="example">Example 1:</strong></p>

<pre>
<strong>Input:</strong> words1 = [&quot;amazon&quot;,&quot;apple&quot;,&quot;facebook&quot;,&quot;google&quot;,&quot;leetcode&quot;], words2 = [&quot;e&quot;,&quot;o&quot;]
<strong>Output:</strong> [&quot;facebook&quot;,&quot;google&quot;,&quot;leetcode&quot;]
</pre>

<p><strong class="example">Example 2:</strong></p>

<pre>
<strong>Input:</strong> words1 = [&quot;amazon&quot;,&quot;apple&quot;,&quot;facebook&quot;,&quot;google&quot;,&quot;leetcode&quot;], words2 = [&quot;l&quot;,&quot;e&quot;]
<strong>Output:</strong> [&quot;apple&quot;,&quot;google&quot;,&quot;leetcode&quot;]
</pre>

<p>&nbsp;</p>
<p><strong>Constraints:</strong></p>

<ul>
	<li><code>1 &lt;= words1.length, words2.length &lt;= 10<sup>4</sup></code></li>
	<li><code>1 &lt;= words1[i].length, words2[i].length &lt;= 10</code></li>
	<li><code>words1[i]</code> and <code>words2[i]</code> consist only of lowercase English letters.</li>
	<li>All the strings of <code>words1</code> are <strong>unique</strong>.</li>
</ul>



## Solution
```javascript
/**
 * @param {string[]} words1
 * @param {string[]} words2
 * @return {string[]}
 */
var wordSubsets = function(words1, words2) {
    const maxCharFreq = new Array(26).fill(0);
    
    for (const word of words2) {
        const tempCharFreq = new Array(26).fill(0);
        
        for (const char of word) {
            tempCharFreq[char.charCodeAt(0) - 'a'.charCodeAt(0)]++;
        }
        
        for (let i = 0; i < 26; i++) {
            maxCharFreq[i] = Math.max(maxCharFreq[i], tempCharFreq[i]);
        }
    }
    
    const result = [];
    
    for (const word of words1) {
        const tempCharFreq = new Array(26).fill(0);
        
        for (const char of word) {
            tempCharFreq[char.charCodeAt(0) - 'a'.charCodeAt(0)]++;
        }
        
        let isUniversal = true;
        
        for (let i = 0; i < 26; i++) {
            if (maxCharFreq[i] > tempCharFreq[i]) {
                isUniversal = false;
                break;
            }
        }
        
        if (isUniversal) {
            result.push(word);
        }
    }
    
    return result;
};
```


## Next Steps
- Add optimization or improvements.

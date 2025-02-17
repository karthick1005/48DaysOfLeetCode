
# Day 47: 1160 - Letter Tile Possibilities

**Difficulty**: Medium

## Problem Description
<p>You have <code>n</code>&nbsp;&nbsp;<code>tiles</code>, where each tile has one letter <code>tiles[i]</code> printed on it.</p>

<p>Return <em>the number of possible non-empty sequences of letters</em> you can make using the letters printed on those <code>tiles</code>.</p>

<p>&nbsp;</p>
<p><strong class="example">Example 1:</strong></p>

<pre>
<strong>Input:</strong> tiles = &quot;AAB&quot;
<strong>Output:</strong> 8
<strong>Explanation: </strong>The possible sequences are &quot;A&quot;, &quot;B&quot;, &quot;AA&quot;, &quot;AB&quot;, &quot;BA&quot;, &quot;AAB&quot;, &quot;ABA&quot;, &quot;BAA&quot;.
</pre>

<p><strong class="example">Example 2:</strong></p>

<pre>
<strong>Input:</strong> tiles = &quot;AAABBC&quot;
<strong>Output:</strong> 188
</pre>

<p><strong class="example">Example 3:</strong></p>

<pre>
<strong>Input:</strong> tiles = &quot;V&quot;
<strong>Output:</strong> 1
</pre>

<p>&nbsp;</p>
<p><strong>Constraints:</strong></p>

<ul>
	<li><code>1 &lt;= tiles.length &lt;= 7</code></li>
	<li><code>tiles</code> consists of uppercase English letters.</li>
</ul>



## Solution
```javascript
/**
 * @param {string} tiles
 * @return {number}
 */
var numTilePossibilities = function (tiles) {

    const N = tiles.length;
        
    const sequences = new Set(); // to store unique sequences

    const backtrack = function (str, indexes) {

        // Base case: If sequence length reaches N, stop further recursion
        if (str.length == N) {
            return 0;
        }

        let count = 0;

        for (let i = 0; i < N; i++) {
            
            if (indexes.has(i)) { continue; }   // Skip if this index is already used in the current sequence
            
            const char = tiles[i];  
            const sequence = `${str}${char}`;
            
            if (sequences.has(sequence)) { continue; }  // Skip if this sequence was already counted
            
            sequences.add(sequence);

            indexes.add(i);
            count += (backtrack(sequence, indexes) + 1);
            indexes.delete(i);
        }

        return count;
    }

    const indexes = new Set(); // Keeps track of used indices to ensure characters are used uniquely
    return backtrack('', indexes);
};
```


## Next Steps
- Add optimization or improvements.


# Day 31: 854 - Making A Large Island

**Difficulty**: Hard

## Problem Description
<p>You are given an <code>n x n</code> binary matrix <code>grid</code>. You are allowed to change <strong>at most one</strong> <code>0</code> to be <code>1</code>.</p>

<p>Return <em>the size of the largest <strong>island</strong> in</em> <code>grid</code> <em>after applying this operation</em>.</p>

<p>An <strong>island</strong> is a 4-directionally connected group of <code>1</code>s.</p>

<p>&nbsp;</p>
<p><strong class="example">Example 1:</strong></p>

<pre>
<strong>Input:</strong> grid = [[1,0],[0,1]]
<strong>Output:</strong> 3
<strong>Explanation:</strong> Change one 0 to 1 and connect two 1s, then we get an island with area = 3.
</pre>

<p><strong class="example">Example 2:</strong></p>

<pre>
<strong>Input:</strong> grid = [[1,1],[1,0]]
<strong>Output:</strong> 4
<strong>Explanation: </strong>Change the 0 to 1 and make the island bigger, only one island with area = 4.</pre>

<p><strong class="example">Example 3:</strong></p>

<pre>
<strong>Input:</strong> grid = [[1,1],[1,1]]
<strong>Output:</strong> 4
<strong>Explanation:</strong> Can&#39;t change any 0 to 1, only one island with area = 4.
</pre>

<p>&nbsp;</p>
<p><strong>Constraints:</strong></p>

<ul>
	<li><code>n == grid.length</code></li>
	<li><code>n == grid[i].length</code></li>
	<li><code>1 &lt;= n &lt;= 500</code></li>
	<li><code>grid[i][j]</code> is either <code>0</code> or <code>1</code>.</li>
</ul>



## Solution
```javascript
/**
 * @param {number[][]} grid
 * @return {number}
 */
var largestIsland = function (grid) {
  const n = grid.length;
    const directions = [[0, 1], [0, -1], [1, 0], [-1, 0]];
    const islandSize = new Map();
    let islandId = 2;  // Start from 2 to differentiate from 0 and 1
    let maxIsland = 0;

    // Helper function for DFS to compute island size
    const dfs = (x, y, id) => {
        let size = 1;
        grid[x][y] = id;
        for (const [dx, dy] of directions) {
            const nx = x + dx, ny = y + dy;
            if (nx >= 0 && nx < n && ny >= 0 && ny < n && grid[nx][ny] === 1) {
                size += dfs(nx, ny, id);
            }
        }
        return size;
    };

    // Step 1: Label each island with a unique ID and store sizes
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n; j++) {
            if (grid[i][j] === 1) {
                const size = dfs(i, j, islandId);
                islandSize.set(islandId, size);
                maxIsland = Math.max(maxIsland, size);
                islandId++;
            }
        }
    }

    // Step 2: Try flipping each '0' and compute the largest possible island
    let result = maxIsland;
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n; j++) {
            if (grid[i][j] === 0) {
                let possibleSize = 1; // The flipped '0' itself
                const seenIslands = new Set();

                for (const [dx, dy] of directions) {
                    const nx = i + dx, ny = j + dy;
                    if (nx >= 0 && nx < n && ny >= 0 && ny < n && grid[nx][ny] > 1) {
                        const id = grid[nx][ny];
                        if (!seenIslands.has(id)) {
                            possibleSize += islandSize.get(id);
                            seenIslands.add(id);
                        }
                    }
                }

                result = Math.max(result, possibleSize);
            }
        }
    }

    return result;
};
```


## Next Steps
- Add optimization or improvements.

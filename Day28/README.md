
# Day 28: 2764 - Maximum Number of Fish in a Grid

**Difficulty**: Medium

## Problem Description
<p>You are given a <strong>0-indexed</strong> 2D matrix <code>grid</code> of size <code>m x n</code>, where <code>(r, c)</code> represents:</p>

<ul>
	<li>A <strong>land</strong> cell if <code>grid[r][c] = 0</code>, or</li>
	<li>A <strong>water</strong> cell containing <code>grid[r][c]</code> fish, if <code>grid[r][c] &gt; 0</code>.</li>
</ul>

<p>A fisher can start at any <strong>water</strong> cell <code>(r, c)</code> and can do the following operations any number of times:</p>

<ul>
	<li>Catch all the fish at cell <code>(r, c)</code>, or</li>
	<li>Move to any adjacent <strong>water</strong> cell.</li>
</ul>

<p>Return <em>the <strong>maximum</strong> number of fish the fisher can catch if he chooses his starting cell optimally, or </em><code>0</code> if no water cell exists.</p>

<p>An <strong>adjacent</strong> cell of the cell <code>(r, c)</code>, is one of the cells <code>(r, c + 1)</code>, <code>(r, c - 1)</code>, <code>(r + 1, c)</code> or <code>(r - 1, c)</code> if it exists.</p>

<p>&nbsp;</p>
<p><strong class="example">Example 1:</strong></p>
<img alt="" src="https://assets.leetcode.com/uploads/2023/03/29/example.png" style="width: 241px; height: 161px;" />
<pre>
<strong>Input:</strong> grid = [[0,2,1,0],[4,0,0,3],[1,0,0,4],[0,3,2,0]]
<strong>Output:</strong> 7
<strong>Explanation:</strong> The fisher can start at cell <code>(1,3)</code> and collect 3 fish, then move to cell <code>(2,3)</code>&nbsp;and collect 4 fish.
</pre>

<p><strong class="example">Example 2:</strong></p>
<img alt="" src="https://assets.leetcode.com/uploads/2023/03/29/example2.png" />
<pre>
<strong>Input:</strong> grid = [[1,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,1]]
<strong>Output:</strong> 1
<strong>Explanation:</strong> The fisher can start at cells (0,0) or (3,3) and collect a single fish. 
</pre>

<p>&nbsp;</p>
<p><strong>Constraints:</strong></p>

<ul>
	<li><code>m == grid.length</code></li>
	<li><code>n == grid[i].length</code></li>
	<li><code>1 &lt;= m, n &lt;= 10</code></li>
	<li><code>0 &lt;= grid[i][j] &lt;= 10</code></li>
</ul>



## Solution
```javascript
var findMaxFish = function (grid) {
    const directions = [[0, 1], [0, -1], [1, 0], [-1, 0]];
    const visited = Array.from({ length: grid.length }, () =>
        Array(grid[0].length).fill(false)
    );

    const dfs = (x, y) => {
        let stack = [[x, y]];
        let fishCount = 0;

        while (stack.length > 0) {
            const [currX, currY] = stack.pop();
            if (visited[currX][currY]) continue;

            visited[currX][currY] = true;
            fishCount += grid[currX][currY];

            for (const [dx, dy] of directions) {
                const newX = currX + dx;
                const newY = currY + dy;
                if (
                    newX >= 0 &&
                    newX < grid.length &&
                    newY >= 0 &&
                    newY < grid[0].length &&
                    grid[newX][newY] > 0 &&
                    !visited[newX][newY]
                ) {
                    stack.push([newX, newY]);
                }
            }
        }

        return fishCount;
    };

    let maxFish = 0;

    for (let i = 0; i < grid.length; i++) {
        for (let j = 0; j < grid[0].length; j++) {
            if (grid[i][j] > 0 && !visited[i][j]) {
                maxFish = Math.max(maxFish, dfs(i, j));
            }
        }
    }

    return maxFish;
};

```


## Next Steps
- Add optimization or improvements.

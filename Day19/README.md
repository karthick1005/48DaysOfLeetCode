
# Day 19: 407 - Trapping Rain Water II

**Difficulty**: Hard

## Problem Description
<p>Given an <code>m x n</code> integer matrix <code>heightMap</code> representing the height of each unit cell in a 2D elevation map, return <em>the volume of water it can trap after raining</em>.</p>

<p>&nbsp;</p>
<p><strong class="example">Example 1:</strong></p>
<img alt="" src="https://assets.leetcode.com/uploads/2021/04/08/trap1-3d.jpg" style="width: 361px; height: 321px;" />
<pre>
<strong>Input:</strong> heightMap = [[1,4,3,1,3,2],[3,2,1,3,2,4],[2,3,3,2,3,1]]
<strong>Output:</strong> 4
<strong>Explanation:</strong> After the rain, water is trapped between the blocks.
We have two small ponds 1 and 3 units trapped.
The total volume of water trapped is 4.
</pre>

<p><strong class="example">Example 2:</strong></p>
<img alt="" src="https://assets.leetcode.com/uploads/2021/04/08/trap2-3d.jpg" style="width: 401px; height: 321px;" />
<pre>
<strong>Input:</strong> heightMap = [[3,3,3,3,3],[3,2,2,2,3],[3,2,1,2,3],[3,2,2,2,3],[3,3,3,3,3]]
<strong>Output:</strong> 10
</pre>

<p>&nbsp;</p>
<p><strong>Constraints:</strong></p>

<ul>
	<li><code>m == heightMap.length</code></li>
	<li><code>n == heightMap[i].length</code></li>
	<li><code>1 &lt;= m, n &lt;= 200</code></li>
	<li><code>0 &lt;= heightMap[i][j] &lt;= 2 * 10<sup>4</sup></code></li>
</ul>



## Solution
```javascript
/**
 * @param {number[][]} heightMap
 * @return {number}
 */
var trapRainWater = function(heightMap) {
    // Check if the elevation map is empty
    if (!heightMap || heightMap.length === 0 || heightMap[0].length === 0) {
        return 0;
    }

    // Get the dimensions of the elevation map
    const rows = heightMap.length;
    const cols = heightMap[0].length;

    // Initialize a visited matrix to keep track of visited cells
    const visited = Array.from({ length: rows }, () => Array(cols).fill(false));

    // Initialize a min-heap to process cells starting from the boundary
    const heap = new MinPriorityQueue({ priority: x => x[0] });

    // Push all boundary cells into the heap and mark them as visited
    for (let i = 0; i < rows; i++) {
        for (let j of [0, cols - 1]) {
            visited[i][j] = true;
            heap.enqueue([heightMap[i][j], i, j]);
        }
    }

    for (let i of [0, rows - 1]) {
        for (let j = 1; j < cols - 1; j++) {
            visited[i][j] = true;
            heap.enqueue([heightMap[i][j], i, j]);
        }
    }

    // Initialize the result to store the total trapped water
    let trappedWater = 0;

    // Process cells from the heap
    while (!heap.isEmpty()) {
        // Pop the cell with the smallest height from the heap
        const [currentHeight, x, y] = heap.dequeue().element;

        // Check all four possible directions (up, down, left, right)
        for (let [dx, dy] of [[1, 0], [-1, 0], [0, 1], [0, -1]]) {
            const newX = x + dx;
            const newY = y + dy;

            // Check if the new cell is within bounds and not visited
            if (newX >= 0 && newX < rows && newY >= 0 && newY < cols && !visited[newX][newY]) {
                // Calculate the water that can be trapped at the new cell
                if (heightMap[newX][newY] < currentHeight) {
                    trappedWater += currentHeight - heightMap[newX][newY];
                    // Update the height to the current height
                    heightMap[newX][newY] = currentHeight;
                }

                // Mark the new cell as visited and push it into the heap
                visited[newX][newY] = true;
                heap.enqueue([heightMap[newX][newY], newX, newY]);
            }
        }
    }

    return trappedWater;
};
```


## Next Steps
- Add optimization or improvements.

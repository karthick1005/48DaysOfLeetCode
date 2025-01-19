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
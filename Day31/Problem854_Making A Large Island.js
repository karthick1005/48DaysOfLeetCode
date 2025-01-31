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
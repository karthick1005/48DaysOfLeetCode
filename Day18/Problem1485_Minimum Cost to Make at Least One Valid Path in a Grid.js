var minCost = function(grid) {
    const m = grid.length;
    const n = grid[0].length;
    const directions = [[0, 1], [0, -1], [1, 0], [-1, 0]];
    const queue = [];
    const cost = Array.from({length: m}, () => Array(n).fill(Infinity));
    
    const isValid = (x, y) => x >= 0 && x < m && y >= 0 && y < n;
    
    queue.push([0, 0]);
    cost[0][0] = 0;
    
    while (queue.length > 0) {
        const [x, y] = queue.shift();
        for (let i = 0; i < 4; i++) {
            const newX = x + directions[i][0];
            const newY = y + directions[i][1];
            const newCost = cost[x][y] + (grid[x][y] === i + 1 ? 0 : 1);
            
            if (isValid(newX, newY) && newCost < cost[newX][newY]) {
                cost[newX][newY] = newCost;
                if (grid[x][y] === i + 1) {
                    queue.unshift([newX, newY]);
                } else {
                    queue.push([newX, newY]);
                }
            }
        }
    }
    
    return cost[m - 1][n - 1];
};
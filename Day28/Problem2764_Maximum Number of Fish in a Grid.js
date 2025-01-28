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

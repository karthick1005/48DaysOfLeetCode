/**
 * @param {number[][]} grid
 * @return {number}
 */
var countServers = function(grid) {
    const m=grid.length;
    const n=grid[0].length;
    const rowCounts = new Array(m).fill(0);
    const colCounts = new Array(n).fill(0);
    for(let i=0;i<m;i++)
    {
        for(let j=0;j<n;j++)
        {
            if(grid[i][j]===1)
            {
                rowCounts[i]++;
                colCounts[j]++;
            }
        }
    }
    let communicatingServers = 0;
    
    // Count servers that can communicate with another server
    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            if (grid[i][j] === 1 && (rowCounts[i] > 1 || colCounts[j] > 1)) {
                communicatingServers++;
            }
        }
    }
    
    return communicatingServers;
};
/**
 * @param {number[][]} isWater
 * @return {number[][]}
 */
var highestPeak = function(isWater) {
    //0 means land and 1 means water
    const queue=[]
    const rows=isWater.length ;
    const cols=isWater[0].length 
    const direction=[[1, 0], [-1, 0], [0, 1], [0, -1]]
    const arr = Array.from({ length: rows }, () => Array(cols).fill(-1));
    for(let i=0;i<rows;i++)
    {
        for(let j=0;j<cols;j++)
        {
            if(isWater[i][j]===1)
            {
                queue.push([i,j])
                arr[i][j]=0;
            }
        }
    }
    let head=0
    while(head<queue.length)
    {
        const [x,y]=queue[head++]

        for(let [dx,dy] of direction)
        {
            const newX=x+dx;
            const newY=y+dy;
            if (newX >= 0 && newX < rows && newY >= 0 && newY < cols && arr[newX][newY] === -1){
                  arr[newX][newY] = arr[x][y] + 1;
                queue.push([newX, newY]);
            }
        }
    }

   return arr
};
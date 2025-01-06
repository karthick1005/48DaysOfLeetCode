/**
 * @param {string} boxes
 * @return {number[]}
 */
var minOperations = function(boxes) {
   let count=0;
   let cost=0;
   let prefixsum=Array(boxes.length).fill(0)
   for(let i=0;i<boxes.length;i++)
   {
        prefixsum[i]+=cost
        if(boxes[i]==='1')
        {
             count++;
        }
        cost+=count;    
   }
   count=0;
   cost=0;
    for(let i=boxes.length-1;i>=0;i--)
   {
        prefixsum[i]+=cost
        if(boxes[i]==='1')
        {
                count++;
        }
        cost+=count;
   }
   return prefixsum
};
/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function(intervals) {
  intervals=intervals.sort((a,b)=>{return a[0]-b[0]})
 let newarr=[]
 let count=0;
 for(let element of intervals)
 {
    if(newarr.length===0)
    {
        newarr.push(element);
    }
    else
    {   
        if(newarr[count][1]  >= element[0] && (newarr[count][1] <= element[1] || newarr[count][1] >= element[1] ))
        {
            newarr[count]=[newarr[count][0],Math.max(newarr[count][1],element[1])]
        }
        else
        {
            newarr.push(element)
            count++;
        }
    }
    
 }
 return newarr
};
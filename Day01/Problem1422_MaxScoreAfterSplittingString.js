/**
 * @param {string} s
 * @return {number}
 */
var maxScore = function(s) {
    let max_score=0;
    for(let i=1;i<s.length;i++)
    {
        let left=s.substring(0,i).split("").reduce((acc,str)=>{
            if(str==='0')
            {
                acc++
            }
            return acc
        },0);
        let right=s.substring(i,s.length).split("").reduce((acc,str)=>{
            if(str==='1')
            {
                acc++
            }
            return acc
        },0);
        let res=left+right;
        if(res>max_score){
            max_score=res;
        }
    }
    return max_score
};

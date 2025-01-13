/**
 * @param {string} s
 * @return {number}
 */
var minimumLength = function(s) {
   let hash = Array.from({ length: 26 }, () => []);
    for(let i=0;i<s.length;i++)
    {
        hash[s[i].charCodeAt(0)-97].push(i)
    }
    let count=0;
    for(let i=0;i<26;i++)
    {
        if(hash[i]===0)continue
        let value=hash[i];
        count+= value.length>=3 ? (value.length%2==0 ? 2 : 1) :value.length
 
    }
    return count
};
/**
 * @param {string} s
 * @return {number}
 */
var countPalindromicSubsequence = function(s) {
   let hash=new Map()
   let lefthash=new Map()
   for(let i=0;i<s.length;i++)
   {
       hash.set(s[i], (hash.get(s[i]) || 0) + 1);
   }
   let uniqueset=new Set();
   for(let i=0;i<s.length;i++)
   {
        let middle=s[i];
        hash.set(middle,(hash.get(middle)|| 0)-1)
        for(let leftchar of lefthash.keys())
        {
            if(hash.get(leftchar)>0)
            {
                uniqueset.add(leftchar+middle+leftchar);

            }
        }
        lefthash.set(middle,(lefthash.get(middle)||0)+1)
   }
   return uniqueset.size
};
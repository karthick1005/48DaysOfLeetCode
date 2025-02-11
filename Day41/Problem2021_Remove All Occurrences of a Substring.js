/**
 * @param {string} s
 * @param {string} part
 * @return {string}
 */
var removeOccurrences = function(s, part) {
    const arr=[]
    for(const c of s)
    {
      
        arr.push(c)
         if(arr.join('').endsWith(part))
       {
        arr.splice(arr.length-part.length,arr.length)
       }
    }
   return arr.join('')
};
/**
 * @param {string} s
 * @param {number} k
 * @return {boolean}
 */
var canConstruct = function(s, k) {
    if (k > s.length) return false; 
    let charCount=Array(26).fill(0)
    // let charCount = new Map();
    for (let char of s) {
        // charCount.set(char, (charCount.get(char) || 0) + 1);
        charCount[char.charCodeAt(0)-97]+=1
    }
    console.log(charCount)
    let oddCount = 0;
    for (let count of charCount) {
        if (count % 2 !== 0) {
            oddCount++;
        }
    }
    return k >= oddCount;
};
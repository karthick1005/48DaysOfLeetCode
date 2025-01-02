/**
 * @param {string[]} words
 * @param {number[][]} queries
 * @return {number[]}
 */
var vowelStrings = function(words, queries) {
    let vowel_set = new Set(['a', 'e', 'i', 'o', 'u']);
    let prefixSum=Array(words.length).fill(0);
    console.log(prefixSum)

   for (let i = 0; i < words.length; i++) {
        const firstChar = words[i][0];
        const lastChar = words[i][words[i].length - 1];
        prefixSum[i + 1] = prefixSum[i] + (vowel_set.has(firstChar) && vowel_set.has(lastChar) ? 1 : 0);
    }
   const ans = [];
    for (const [l, r] of queries) {
        ans.push(prefixSum[r + 1] - prefixSum[l]);
    }
    return ans
};
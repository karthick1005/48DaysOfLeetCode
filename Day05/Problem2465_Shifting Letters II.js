/**
 * @param {string} s
 * @param {number[][]} shifts
 * @return {string}
 */
var shiftingLetters = function(s, shifts) {
    const n = s.length;
    const diff = Array(n + 1).fill(0); // Difference array for cumulative shifts
    
    // Apply shifts to the difference array
    for (const [start, end, direction] of shifts) {
        if (direction === 1) {
            diff[start] += 1;
            diff[end + 1] -= 1;
        } else {
            diff[start] -= 1;
            diff[end + 1] += 1;
        }
    }
    
    // Compute the cumulative shifts
    let cumulativeShift = 0;
    const result = s.split('');
    for (let i = 0; i < n; i++) {
        cumulativeShift += diff[i];
        // Normalize the shift to stay within [0, 25] range (for 26 letters)
        const normalizedShift = (cumulativeShift % 26 + 26) % 26;
        result[i] = String.fromCharCode(((s.charCodeAt(i) - 97 + normalizedShift) % 26) + 97);
    }
    
    return result.join('');
};

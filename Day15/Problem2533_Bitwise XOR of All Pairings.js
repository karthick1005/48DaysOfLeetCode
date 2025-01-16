/**
 * @param {string} s
 * @param {string} p
 * @return {boolean}
 */

var isMatch = function(s, p) {
   const m = s.length;
    const n = p.length;

    // Create a DP table with dimensions (m+1) x (n+1)
    const dp = Array.from({ length: m + 1 }, () => Array(n + 1).fill(false));

    // Base case: Empty string matches empty pattern
    dp[0][0] = true;

    // Fill the table for patterns that can match an empty string
    for (let j = 1; j <= n; j++) {
        if (p[j - 1] === '*') {
            dp[0][j] = dp[0][j - 2]; // '*' can remove the preceding character
        }
    }

    // Fill the DP table
    for (let i = 1; i <= m; i++) {
        for (let j = 1; j <= n; j++) {
            if (p[j - 1] === s[i - 1] || p[j - 1] === '.') {
                // Characters match or '.' matches any character
                dp[i][j] = dp[i - 1][j - 1];
            } else if (p[j - 1] === '*') {
                // '*' matches zero occurrences of the preceding character
                dp[i][j] = dp[i][j - 2];

                // '*' matches one or more occurrences of the preceding character
                if (p[j - 2] === s[i - 1] || p[j - 2] === '.') {
                    dp[i][j] = dp[i][j] || dp[i - 1][j];
                }
            }
        }
    }
    // console.log(dp)
    // Return whether the full string matches the full pattern
    return dp[m][n];
};
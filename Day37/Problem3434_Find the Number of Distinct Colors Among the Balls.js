/**
 * @param {number} limit
 * @param {number[][]} queries
 * @return {number[]}
 */
var queryResults = function(limit, queries) {
  const ballColor = new Map();  // Tracks the color of each ball
    const colorCount = new Map(); // Tracks how many times each color appears
    const result = [];            // Stores the result after each query
    let distinctCount = 0;      // Tracks number of distinct colors

    for (const [ball, color] of queries) {
        // If the ball already has a color, we need to update it
        if (ballColor.has(ball)) {
            const oldColor = ballColor.get(ball);
            
            // Reduce count of oldColor
            colorCount.set(oldColor, (colorCount.get(oldColor) || 0) - 1);
            
            // If oldColor count becomes 0, remove it from distinct colors
            if (colorCount.get(oldColor) === 0) {
                colorCount.delete(oldColor);
                distinctCount--; // Decrease distinct color count
            }
        }

        // Assign new color to the ball
        ballColor.set(ball, color);

        // Increase count of new color
        if (!colorCount.has(color)) {
            distinctCount++; // New color added
        }
        colorCount.set(color, (colorCount.get(color) || 0) + 1);

        // Store the number of distinct colors after this query
        result.push(distinctCount);
    }

    return result;
};
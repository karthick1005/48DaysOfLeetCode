/**
 * @param {number[][]} edges
 * @return {number[]}
 */
var findRedundantConnection = function (edges) {
    const hash = new Map();

    // Helper function to perform DFS
    const dfs = (node, target, visited) => {
        if (node === target) return true; // If we find the target, return true (cycle detected)

        visited.add(node); // Mark the node as visited
        const neighbors = hash.get(node) || [];

        // Explore all neighbors
        for (const neighbor of neighbors) {
            if (!visited.has(neighbor)) {
                if (dfs(neighbor, target, visited)) {
                    return true; // If we find the target in any neighbor's path, return true
                }
            }
        }
        return false; // No path found to the target
    };

    // Process each edge
    for (const [u, v] of edges) {
        // Before adding the edge, check if u and v are already connected
        const visited = new Set(); // Set to keep track of visited nodes
        if (dfs(u, v, visited)) {
            // If they are already connected, the edge is redundant (cycle detected)
            return [u, v]; // This is the redundant edge
        }

        // Otherwise, add the edge to the adjacency list
        if (!hash.has(u)) hash.set(u, []);
        if (!hash.has(v)) hash.set(v, []);
        hash.get(u).push(v);
        hash.get(v).push(u);
    }
};

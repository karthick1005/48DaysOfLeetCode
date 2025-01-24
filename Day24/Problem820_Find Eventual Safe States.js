/**
 * @param {number[][]} graph
 * @return {number[]}
 */
var eventualSafeNodes = function (graph) {
   const n = graph.length;
    const outdegree = new Array(n).fill(0); // Count of outgoing edges for each node
    const reverseGraph = Array.from({ length: n }, () => []); // Reversed graph representation

    // Step 1: Build reverse graph and calculate outdegrees
    for (let i = 0; i < n; i++) {
        for (const neighbor of graph[i]) {
            reverseGraph[neighbor].push(i); // Add reverse edge
        }
        outdegree[i] = graph[i].length; // Track outdegree for each node
    }
    console.log(reverseGraph)

    // Step 2: Use a queue to perform topological sorting (start with terminal nodes)
    const queue = [];
    for (let i = 0; i < n; i++) {
        if (outdegree[i] === 0) queue.push(i); // Terminal nodes
    }

    const safeNodes = new Set();
    let head=0
    while (head<queue.length) {
        const node = queue[head++];
        safeNodes.add(node); // Mark the node as safe

        for (const neighbor of reverseGraph[node]) {
            outdegree[neighbor]--; // Reduce outdegree for the neighbor
            if (outdegree[neighbor] === 0) queue.push(neighbor); // If no outgoing edges, add to queue
        }
    }

    // Step 3: Return the sorted list of safe nodes
    return Array.from(safeNodes).sort((a, b) => a - b);
};
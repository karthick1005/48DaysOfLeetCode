/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @param {number[][]} queries
 * @return {boolean[]}
 */
var checkIfPrerequisite = function(numCourses, prerequisites, queries) {
    const reachable = Array.from({ length: numCourses }, () => Array(numCourses).fill(false));
    for(const [u,v] of prerequisites)
    {
        console.log(u,v)
         reachable[u][v] = true;
    }
    // Step 3: Apply Floyd-Warshall to compute transitive closure
    for (let k = 0; k < numCourses; k++) {
        for (let i = 0; i < numCourses; i++) {
            for (let j = 0; j < numCourses; j++) {
                if (reachable[i][k] && reachable[k][j]) {
                    reachable[i][j] = true;
                }
            }
        }
    }

    // Step 4: Answer each query in O(1)
    return queries.map(([u, v]) => reachable[u][v]);
};
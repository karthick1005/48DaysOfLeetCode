/**
 * @param {number[]} nums
 * @param {number} limit
 * @return {number[]}
 */
var lexicographicallySmallestArray = function (nums, limit) {

    const N = nums.length;

    // Step 1: Maintain a sorted array with element values and their indices
    const sortedArray = nums.map((num, index) => [num, index]);
    sortedArray.sort(([num1, index1], [num2, index2]) => num1 - num2);

    // Step 2: Group elements whose absolute differences are within the limit
    const groupedElements = [];
    let group = [sortedArray[0]];
    for (let i = 1; i < N; i++) {
        const element1 = group[group.length - 1], // Last element in the current group
            element2 = sortedArray[i]; // Current element to consider

        // Check if the absolute difference is within the limit
        if (Math.abs(element1[0] - element2[0]) <= limit) {
            group.push(element2);
        } else {
            // Push the completed group and start a new group
            groupedElements.push(group);
            group = [element2];
        }
    }

    // Add the last group if it contains elements
    if (group.length) {
        groupedElements.push(group);
    }

    // Step 3: Process each group to rearrange elements in the original array
    for (const groupedElement of groupedElements) {
        // Extract indices from the current group
        const indicesInCurrentGroup = [], M = groupedElement.length;
        for (const [, index] of groupedElement) {
            indicesInCurrentGroup.push(index);
        }

        // Sort the indices to maintain relative order
        indicesInCurrentGroup.sort((a, b) => a - b);

        // Step 4: Update the `nums` array at the sorted indices
        for (let i = 0; i < M; i++) {
            const index = indicesInCurrentGroup[i];
            nums[index] = groupedElement[i][0]; // Assign the sorted values back to the original array
        }
    }

    // Step 5: Return the modified array
    return nums;
};
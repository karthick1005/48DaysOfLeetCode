/**
 * @param {number[]} A
 * @param {number[]} B
 * @return {number[]}
 */
var findThePrefixCommonArray = function (A, B) {
    const arr = [];
    const setA = new Map();
    const setB = new Map();
    let commonCount = 0;

    for (let i = 0; i < A.length; i++) {
        if (setB.has(A[i])) {
            commonCount++;
        }
        setA.set(A[i], 1);

        if (setA.has(B[i])) {
            commonCount++;
        }
        setB.set(B[i]);

        arr.push(commonCount);
    }

    return arr;
};  
/**
 * @param {number[]} arr
 * @param {number[][]} mat
 * @return {number}
 */
var firstCompleteIndex = function (arr, mat) {
    const mat_pos = new Map();
    const painted = new Map()
    for (let i = 0; i < mat.length; i++) {
        for (let j = 0; j < mat[0].length; j++) {
            const data = {
                row: i,
                col: j
            }
            mat_pos.set(mat[i][j], data)
            painted.set(`col${j}`, 0)

        }
        painted.set(`row${i}`, 0)
    }
    for (let i = 0; i < arr.length; i++) {
        const data = mat_pos.get(arr[i]);

        painted.set(`row${data.row}`, painted.get(`row${data.row}`) + 1)

        painted.set(`col${data.col}`, painted.get(`col${data.col}`) + 1)
        if (painted.get(`row${data.row}`) >= mat[0].length || painted.get(`col${data.col}`) >= mat.length) {
            return i
        }

    }
};
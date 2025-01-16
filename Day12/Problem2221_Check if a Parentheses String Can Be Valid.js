/**
 * @param {string} s
 * @param {string} locked
 * @return {boolean}
 */
var canBeValid = function (s, locked) {
    if (s.length % 2 !== 0) return false;
    let balanceLeft = 0;
    let balanceRight = 0;
    for (let i = 0; i < s.length; i++) {
        if (s[i] === '(' || locked[i] === '0') {
            balanceLeft++;
        } else if (s[i] === ')') {
            balanceLeft--;
        }
        if (balanceLeft < 0) return false;
    }

    for (let i = s.length - 1; i >= 0; i--) {
        if (s[i] === ')' || locked[i] === '0') {
            balanceRight++;
        } else if (s[i] === '(') {
            balanceRight--;
        }
        if (balanceRight < 0) return false;
    }
    return true;
};


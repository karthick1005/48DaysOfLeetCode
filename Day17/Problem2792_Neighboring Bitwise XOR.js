/**
 * @param {number[]} derived
 * @return {boolean}
 */
var doesValidArrayExist = function(derived) {
    let xor=0;
    for(let i=0;i<derived.length;i++)
    {
        xor^=derived[i]
    }
    return xor === 0 ?true :false
};
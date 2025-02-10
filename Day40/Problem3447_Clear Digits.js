/**
 * @param {string} s
 * @return {string}
 */
var clearDigits = function(s) {
    const stack=[]
    for(const e of s)
    {
        if(e>='0'&&e<='9')
        {
            stack.pop()
        }
        else
        {
            stack.push(e)
        }
    }
    return stack.join('')
};
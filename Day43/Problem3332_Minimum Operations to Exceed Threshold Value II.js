const minOperations = (a, k) => {
    a.sort((x, y) => x - y);
    const b = [];
    for(let i = 0, j = 0, count = 0, x, y; ; ++count) {
        if (i < a.length && !(a[i] > b[j])) x = a[i++];
        else x = b[j++];
        if (!(k > x)) return count;
        if (i < a.length && !(a[i] > b[j])) y = a[i++];
        else y = b[j++];
        b.push(x * 2 + y);
    }
    return -1;
};
var countBadPairs = function(nums) {
    const n = nums.length;
    let totalPairs = n * (n - 1) / 2;
    const diffCount = new Map();
    for (let i = 0; i < n; i++) {
        const diff = nums[i] - i;
        totalPairs -= diffCount.get(diff) || 0;
        diffCount.set(diff, (diffCount.get(diff) || 0) + 1);
    }
    return totalPairs;
};
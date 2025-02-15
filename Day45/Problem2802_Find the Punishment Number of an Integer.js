function canPartition(s, target) {
  if (s === "" && target === 0) return true;
  if (target < 0) return false;
  let ans = false;
  for (let i = 0; i < s.length; i++) {
    let left = s.substring(0, i + 1);
    let right = s.substring(i + 1);
    let leftNum = parseInt(left);

    let isPossible = canPartition(right, target - leftNum);
    if (isPossible) {
      ans = true;
      break;
    }
  }
  return ans;
}
function punishmentNumber(n) {
  let sum = 0;
  for (let num = 1; num <= n; num++) {
    let sqr = num * num;
    if (canPartition(sqr.toString(), num)) {
      sum += sqr;
    }
  }
  return sum;
}
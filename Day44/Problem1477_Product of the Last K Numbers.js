
var ProductOfNumbers = function() {
    this.stack = [1];
};

/** 
 * @param {number} num
 * @return {void}
 */
ProductOfNumbers.prototype.add = function(num) {
    if (num === 0) { this.stack = [1]; }
      else {
        const n = this.stack.length;
        const lastValue = this.stack[n-1];
        this.stack.push(lastValue * num);
      }
};

/** 
 * @param {number} k
 * @return {number}
 */
ProductOfNumbers.prototype.getProduct = function(k) {
    const n = this.stack.length;
    if (k >= n) { return 0; }
    return this.stack[n-1] / this.stack[n - 1 - k];
};

/** 
 * Your ProductOfNumbers object will be instantiated and called as such:
 * var obj = new ProductOfNumbers()
 * obj.add(num)
 * var param_2 = obj.getProduct(k)
 */
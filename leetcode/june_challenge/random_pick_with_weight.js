(function () {
  const Solution = function (w) {
    this.w = w;
    this.ranges = [];
    this.sum = this.w.reduce((p, c) => {
      this.ranges.push(p + c);
      return p + c;
    }, 0);
  };

  /**
   * @return {number}
   */
  Solution.prototype.pickIndex = function () {
    const ranges = [];
    if (this.w.length === 1) {
      return 0;
    }
    const random = Math.random() * this.sum;
    let answer = -1;
    for(let i = 0; i < this.ranges.length; i++) {
      if(random <= this.ranges[i] && answer === -1) {
        answer = i;
      }
    }

    return answer;
  };

  var obj = new Solution([ 2, 4, 1, 5, 3 ]);
  var param_1 = obj.pickIndex();
})();

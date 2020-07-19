(function () {
  /**
   * @param {number[]} nums
   * @return {number}
   */
  var singleNumber = function(nums) {
    const map = {};
    for(let i = 0; i < nums.length; i++) {
      map[nums[i]] = map[nums[i]] !== undefined ? map[nums[i]] + 1 : 1;
    }

    let answer = 0;

    for(let key in map) {
      if(map[key] === 1) {
        answer = key;
      }
    }

    return answer;

  };
})();

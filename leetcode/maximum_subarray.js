/**
 * KADANE'S Algorithm
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function (nums) {
  let sum = 0;
  let max = -Infinity;
  for (let i = 0; i < nums.length; i++) {
    sum = nums[i];
    if (sum > max) {
      max = sum;
    }
    for (let z = i + 1; z < nums.length; z++) {
      sum += nums[z];
      if (sum > max) {
        max = sum;
      }
    }
  }
  return max;
};

maxSubArray([-1,0,-2]);

var singleNumber = function(nums) {
  const obj = {};
  let answer;
  for(let i = 0; i < nums.length; i++) {
    obj[nums[i]] = obj[nums[i]] !== undefined ? obj[nums[i]] + 1 : 1;
  }

  for(let key in obj) {
    if(obj[key] === 1) {
      answer = key;
    }
  }

  return answer;
};

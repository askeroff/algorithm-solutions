var isHappy = function(n, obj) {
  let set = obj ? obj : {};
  const squareSum = String(n).split('').map(i => +i).reduce((p, c) => p + c*c, 0);

  if(set[n] === true) {
    return false;
  }
  set[n] = true;

  if(squareSum === 1) {
    return true;
  }
  return isHappy(squareSum, set);
};

console.log(isHappy(10));

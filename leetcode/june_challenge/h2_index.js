const hIndex = function (citations) {
  let maxHPossible = citations.length;

  let count = 0;
  let stop = false;
  while (!stop) {
    for (let i = citations.length - 1; i >= 0; i--) {
      if (citations[i] >= maxHPossible && count < maxHPossible) {
        count += 1;
      }
    }
    if (count === maxHPossible) {
      stop = true;
    } else {
      count = 0;
      maxHPossible -= 1;
    }
  }
  return maxHPossible;
};

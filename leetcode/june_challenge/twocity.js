/**
 * @param {number[][]} costs
 * @return {number}
 */

const twoCitySchedCost = function (costs) {
  let sorted = [...costs].sort(function (a, b) {
    let diff = a[0] - a[1];
    let diff1 = b[0] - b[1];
    if (diff < diff1) {
      return -1;
    }
    if (diff > diff1) {
      return 1;
    }

    return 0;
  });
  let sum = 0;
  for(let i = 0; i < sorted.length; i++) {
      if(i < sorted.length/2) {
        sum += sorted[i][0]
      } else {
        sum += sorted[i][1];
      }
  }
  return sum;
};


twoCitySchedCost([[259, 770], [448, 54], [926, 667], [184, 139], [840, 118], [577, 469]]); // 1859
twoCitySchedCost([[10, 20], [30, 200], [400, 50], [30, 20]]); // 110


twoCitySchedCost([
  [70,311], // x
  [74,927], // x
  [732,711], //x
  [126,583], // x
  [857,118], // x
  [97,928], // x
  [975,843],
  [175,221], // x
  [284,929], // x
  [816,602], //x
  [689,863], // x
  [721,888]
]);
// 4723

twoCitySchedCost([
  [20, 60],
  [10, 50],
  [40, 200],
  [30, 300]
]); // 180

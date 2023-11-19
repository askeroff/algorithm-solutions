function getRes(n, k, arr) {
    let i = 0;
    let j = 0;
    let res = 0;
  
    let sum = arr[0];

    // 17, 7, 10, 7, 10
    
    while (j < n) {
      if (sum < k) {
        j += 1;
        sum += j < n ? arr[j] : 0;
      } else if (sum === k) {
        res += 1;
        sum -= arr[i];
        j +=1;
        sum += j < n ? arr[j] : 0;
        i += 1;
      } else if (sum > k) {
        sum -= arr[i];
        i += 1;
      }
  
    }
    return res;
    
  }

  
  getRes(5, 17, [17, 7, 10, 7, 10]);

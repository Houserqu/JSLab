/**
 * 组合 https://leetcode.com/problems/combinations/description/
 * @param {number[]} nums
 * @return {number[][]}
 */
var combine = function (n, k) {
  if (n <= 0 || n < k) return [];
  let result = [];
  find([], n, 1, k, result);
  return result;
};

function find(cur, n, loop, k, result) {
  if (loop > k || cur.length >= n) {
    result.push(cur);
    return;
  }

  for (let i = cur[cur.length-1] || 1; i <= n; i ++){
    if(cur.indexOf(i) == -1){
      let newCur = [...cur, i];
      find(newCur, n, loop + 1, k, result);
    }
  };
}

console.log(combine(4, 2));

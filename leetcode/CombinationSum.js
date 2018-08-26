/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum = function (candidates, target) {
  if (candidates.length <= 0) return [];
  let result = [];
  find(candidates, [], 0, 0, target, result);
  return result;
};

function find(candidates, cur, curSum, start, target, result) {
  if (curSum == target) {
    result.push(cur);
    return;
  }

  if (curSum > target) {
    return;
  }

  for (let i = start; i < candidates.length; i++){
    if (cur.indexOf(candidates[i]) == -1){
      let newCur = [...cur, candidates[i]];
      find(candidates, newCur, curSum + candidates[i], i, target, result);
    }
  };
}

console.log(combinationSum([7, 2, 4, 1], 7))
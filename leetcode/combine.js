/**
 * https://leetcode.com/problems/subsets/description/
 * 求所有组合
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsets = function (nums) {
  let result = [];
  find(nums, [], 0, result);
  return result;
};

function find(nums, cur, start, result) {
  result.push(cur);

  for (let i = start; i < nums.length; i++) {
    if (cur.indexOf(nums[i]) == -1) {
      let newCur = [...cur, nums[i]];
      find(nums, newCur, i, result);
    }
  };
}
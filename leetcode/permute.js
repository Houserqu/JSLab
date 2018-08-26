/**
 * https://leetcode.com/problems/permutations/description/
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function (nums) {
  let result = [];
  find(nums, [], result);
  return result;
};

function find(items, cur, result) {
  if(items.length == 0) {
    result.push(cur);
    return;
  }

  let visited = [];

  items.forEach((element, index) => {
    if(visited.indexOf(element) == -1){
      let newItems = items.concat([]);
      newItems.splice(index, 1);

      find(newItems, [...cur, element], result);
      visited.push(element);
    }
  });
}

console.log(permute([1, 1, 2]))

var months = ['Jan', 'March', 'April', 'June'];

// console.log(months.splice(1,1))
// console.log(months);

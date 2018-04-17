/**
 * Given an array nums of n integers, are there elements a, b, c in nums such that a + b + c = 0? Find all unique triplets in the array which gives the sum of zero.

Note:

The solution set must not contain duplicate triplets.

Example:

Given array nums = [-1, 0, 1, 2, -1, -4],

A solution set is:
[
  [-1, 0, 1],
  [-1, -1, 2]
]
 */

 /**
 * @param {number[]} nums
 * @return {number[][]}
 */


var improve3num = function (nums) {
  nums.sort(function(a,b){
    return a-b;
  });
  console.log(nums)

  var result = [];

  for(var i = 0; i < nums.length-2; i++){

    if(i == 0 || (i > 0 && nums[i] != nums[i-1])){
      var sum = 0 - nums[i];

      var l = i + 1;
      var r = nums.length - 1;
  
      while(l < r){
        if(nums[l] + nums[r] == sum){
          result.push([nums[i], nums[l], nums[r]]);
          
          while(l < r && nums[l] == nums[l+1]){
            l++;
          }

          while(l < r && nums[r] == nums[r-1]){
            r--;
          }

          l++;
          r--;
        } else if(nums[l] + nums[r] < sum){
          l++
        } else {
          r--;
        }
      }
    }
  }

  console.log(result);
}


improve3num([-4,-2,-2,-2,0,1,2,2,2,3,3,4,4,6,6]);
//threeSum([0,-1,1,0,0])
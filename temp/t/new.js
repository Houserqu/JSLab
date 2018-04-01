/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
  
  var i = 0;
  while(i < nums.length){
      if(nums[i+1] == nums[i]){
          nums.splice(i+1, 1);
      } else {
        i++
      }
  }
  return nums;
};


console.log(removeDuplicates([1,2,2,4,4,4,5]));
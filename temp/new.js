var removeDuplicates = function(nums) {
  var result_arr = [];

for(var i = 0; i < nums.length; i++){
  if(result_arr.indexOf(nums[i]) < 0){
    result_arr.push(nums[i]);
  }
}
return result_arr.length;
};


console.log(removeDuplicates([1,1,2,3,4,3]))
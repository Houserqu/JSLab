/**
 * 小Q今天在上厕所时想到了这个问题：有n个数，两两组成二元组，差最小的有多少对呢？差最大呢？
 */

var n = 6;
var numbers = [45, 12, 45, 32, 5, 6, 2, 5, 45];

var min = numbers[0]; //当前最小值
var max = numbers[0]; // 当前最大值

var mins = 1; // 最小值个数
var maxs = 1;

for(var i = 1; i < numbers.length; i++){
  if(numbers[i] < min) {
    min = numbers[i];
    mins = 1;
  } else {
    if(numbers[i] == min) {
      mins++;
    }
  }

  if(numbers[i] > max) {
    max = numbers[i];
    maxs = 1;
  } else {
    if(numbers[i] == max) {
      maxs++;
    } 
  }
}

console.log(min, mins);
console.log(max, maxs);
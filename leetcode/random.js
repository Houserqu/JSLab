/**
 * 生成指定范围内的随机整数
 * @param {int} left 
 * @param {int} right 
 */
var rangeRandom = function(left, right) {
  var c = right - left;
  return Math.round(Math.random() * c + left);
}

console.log(rangeRandom(1,10));
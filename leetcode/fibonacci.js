/**
 * 返回指定长度的斐波拉切数列
 * @param {int} len 个数
 */
function fibonacci(len){
  var result = [1,1];

  for(var i = 2; i < len; i++){
    result.push(result[i-2]+result[i-1]);
  }

  return result;
}

console.log(fibonacci(5));
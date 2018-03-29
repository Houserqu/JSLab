/**
 * 阶乘
 * @param {int} n 
 */
var factorial = function(n) {

  if(n == 1){
    return 1
  }

  return n * factorial(n-1);
}

console.log(factorial(5));
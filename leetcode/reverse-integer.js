/**
 * Given a 32-bit signed integer, reverse digits of an integer.

    Example 1:

    Input: 123
    Output:  321
    Example 2:

    Input: -123
    Output: -321
    Example 3:

    Input: 120
    Output: 21
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
  let x_arr = x.toString().split('');
  let result = 0;
  if(x_arr[0] == '-'){
    x_arr.shift();
    result = parseInt('-' + x_arr.reverse().toString().replace(/,/g,''));
    if(result < -2147483648){
      return 0;
    } else {
      return result;
    }
  } else {
    result = parseInt( x_arr.reverse().toString().replace(/,/g,''));
    if(result > 2147483648){
      return 0;
    } else {
      return result;
    }
  }
};

console.log(reverse(1534236469));
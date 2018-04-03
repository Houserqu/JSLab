/**
 * @param {number} x
 * @return {boolean}
 */

var isPalindrome = function(x) {
  x = String(x);
  console.log(x);

  for( var i = 0; i < x.length / 2 ; i++){
   if(x.charAt(i) != x.charAt(x.length - i - 1)){
    return false;
   } 
  }

  return true;
};

console.log(isPalindrome(232));
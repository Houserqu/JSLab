/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
  if(strs.length == 0){
    return '';
  }

  if(strs.length ==1 ){
    return strs[0];
  }
  
  var result_str = [];

  var flag = true;
  var i = 0;

  while(flag){
    if(strs[0].charAt(i)) {
      var curChar = strs[0].charAt(i);
    } else {
      return result_str.join("");
    }
    
    for(var j = 1; j < strs.length; j++){
      if(strs[j].charAt(i) != curChar ){
        flag = false;
        break;
      }
    }
    if(flag){
      result_str.push(curChar);
    }
    i++;
  }

  return result_str.join("");
};

console.log(longestCommonPrefix([
  "aaaaa","aaad","aa","aaav"
]))
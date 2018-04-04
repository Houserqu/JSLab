/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
  
  var temp_arr = [];
  var result = 0;
  for(var i = 0; i < s.length; i++){

    for(var j = i; j < s.length; j++){
      if(temp_arr.indexOf(s.charAt(j)) == -1){
        temp_arr.push(s.charAt(j))
      }else{
        break;
      }
    }

    if(temp_arr.length > result){
      result = temp_arr.length;
    }
    temp_arr = []
  }

  return result;

};


console.log(lengthOfLongestSubstring('abcabcdfa'));
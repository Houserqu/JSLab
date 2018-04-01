/**
 * 小Q最近遇到了一个难题：把一个字符串的大写字母放到字符串的后面，各个字符的相对位置不变，且不能申请额外的空间。
   你能帮帮小Q吗？
 */
var str = "AkleBiCeilD";

var str_arr = str.split("");

var cur_index = str_arr.length - 1;

for(var i = str_arr.length-1; i >= 0; i--){
  if(str_arr[i] <= 'Z') {
      var temp = str_arr[i];
      for(var j = i; j < cur_index; j++){
        str_arr[j] = str_arr[j+1];
      }

      str_arr[cur_index] = temp;

      cur_index--;
  }
}

console.log(str_arr.join(""));
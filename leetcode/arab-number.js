/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
  var s_arr = s.split("");
  console.log(s_arr);

  var result = 0;
  
  var point = 0;
  while(point < s_arr.length) {
    switch(s_arr[point]){
      case 'I': 
        if(s_arr[point+1] == 'V'){
          result+=4;
          point+=2;
        } else if (s_arr[point+1] == 'X'){
          result+=9;
          point+=2;
        } else {
          result += 1;
          point++;
        }

        break;
      case 'X': 
        if(s_arr[point+1] == 'L'){
          result+=40;
          point+=2;
        } else if (s_arr[point+1] == 'C'){
          result+=90;
          point+=2;
        } else {
          result += 10;
          point++;
        }

        break;
      case 'C': 
        if(s_arr[point+1] == 'D'){
          result+=400;
          point+=2;
        } else if (s_arr[point+1] == 'M'){
          result+=900;
          point+=2;
        } else {
          result += 100;
          point++;
        }

        break;
      default : result += charToInt(s_arr[point]); point++; break;
    }
  }
  
  console.log(result);
};

var charToInt = function(arab) {
    var arabs = {
      'I':1,
      'V':5,
      'X':10,
      'L':50,
      'C':100,
      'D':500,
      'M':1000
    }

    return arabs[arab];
}

//console.log(charToInt('D'))
romanToInt('DCXXI')

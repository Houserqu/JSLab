var mostCharInStr = function (str) {
  var obj = {};

  for(var i = 0; i < str.length; i++){
    if(obj[str.charAt(i)]){
      obj[str.charAt(i)]++;
    }else{
      obj[str.charAt(i)] = 1;
    }
  }

  var max = 0;
  var most_char = null;
  for( key in obj ){
    if(obj[key] > max){
      max = obj[key];
      most_char = key;
    }
  }

  return most_char; 
}

console.log(mostCharInStr("aaccchaadccc"));
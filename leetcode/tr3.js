var lr = "3 6";
var lr_arr = lr.split(" ");
var l = parseInt(lr_arr[0]);
    var r = parseInt(lr_arr[1]);
  
    var f;
    if(l%3 == 0){
      f = l;
    } else {
      f = l + 3 - l%3
    }
    var e = r - r%3;
    
    var result = 1
    var result = (e - f)/3 * 2 + result;

    
    if(l%3 == 2){
        result++;
    }
    
    if(r%3 == 2){
        result++;
    }
    
    
    console.log(result);
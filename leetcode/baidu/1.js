var A = '1010101010001'
var B = '';
    
    //  将查找字符串转换成正则表达式
    B.replace('?', '\\d');
    console.log(B);
    var reg = new RegExp('0\\d', 'g');
    
    var result = [];
    var temp = A.match(reg);

    console.log(temp);

    for(var i = 0; i < temp.length; i++){
      if(result.indexOf(temp[i]) < 0){
        result.push(temp[i]);
      }
    }

    console.log(result);
    
    console.log(result.length);
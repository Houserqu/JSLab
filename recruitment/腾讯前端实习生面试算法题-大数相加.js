/*
大数相加
   实现大整数相加算法，两个数用字符串模拟
 函数原型：function add(a, b) {}
 */

function add(a,b) {
  // 字符串转单字符数组
  // 逆序
  // 循环同位相加，判断是否大于1，后续循环+1
  // 
  // 大数字符串切分成数组
  
  let a_number = a.split("");
  let b_number = b.split("");

  let result = [];
  let len = 0;

  a_number = a_number.reverse();
  b_number = b_number.reverse();

  // 对齐
  if( a_number.length > b_number.length ){
    len = a_number.length;
    b_number.length = len;
    b_number = arrayFill(b_number, len);
    
  } else {
    len = a_number.length;
    a_number.length = len;
    a_number = arrayFill(a_number, len);
  }

  let flag = false; //进一变量
  for(let i = 0; i < len; i++ ){
    let temp = parseInt(a_number[i]) +parseInt(b_number[i]);

    if(flag){
      // 判断进1
      temp > 9 ? flag = true : flag = false

      result[i] = (temp + 1) % 10;

    } else {

      temp > 9 ? flag = true : flag = false

      result[i] = temp % 10
    }
  }

  if(flag){
    result.push(1);
  }
  
  // 正序
  result = result.reverse();

  // 转字符串

  console.log("result:",result.toLocaleString().replace(/\,/g,''));

  // 数组转字符串
  //return arrayToStr(result);
}


// 数组末尾补齐0
function arrayFill(arr, len){
  let de_len = arr.length;
  for(let i = de_len - 1; i < len; i++){
    arr[i] = 0;
  }

  return arr;
}


add("798","12");

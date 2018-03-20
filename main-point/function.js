/*
  js function 特点
*/

// obj = { total: 3 }
var obj = new function(){ 
  var a = 1; 
  var b = 2; 
  this.total = a + b; 
  return a + b; // 被忽略 
}

console.log(obj); // { total: 3 }

function Person(){

  var a = 2

  this.bb=a;

  return {

     name:"李彦峰",
     a : a

  }

}
var p = new Person();

console.log(p)
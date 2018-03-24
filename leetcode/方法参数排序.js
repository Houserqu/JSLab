//请填充代码，使mySort()能使传入的参数按照从小到大的顺序显示出来。
function mySort() {
    var tags = new Array();//使用数组作为参数存储容器
    //请补充你的代码
    console.log(arguments);

    for(item in arguments){
      tags.push(arguments[item]);
    }

    return tags.sort(function(a,b){
      return a-b;
    });
}
 
var result = mySort(50,11,16,32,24,99,57,100);//传入参数个数不确定
console.info(result);//显示结果
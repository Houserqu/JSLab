// 单例模式

function People(name) {
  return name;
}

// 测试单体模式的实例
var a = new People("aa");
var b = new People("bb");

console.log(a);
console.log(b);
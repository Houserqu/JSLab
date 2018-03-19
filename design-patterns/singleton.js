// 单例模式

// 创建类
var Singleton = function(name){
  this.name = name;
};
Singleton.prototype.getName = function(){
  return this.name;
}

// 获取实例对象
var getInstance = (function() {
  var instance = null;
  return function(name) {
      if(!instance) {
          instance = new Singleton(name);
      }
      return instance;
  }
})();
// 测试单体模式的实例
var a = getInstance("aa");
var b = getInstance("bb");

console.log(a.getName());
console.log(b.getName());
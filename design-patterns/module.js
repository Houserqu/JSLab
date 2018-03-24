/*
模块模式
*/

function CustomType() {
  this.name = "tugenhua";
};
CustomType.prototype.getName = function(){
  return this.name;
}
var application = (function(){
  // 定义私有
  var privateA = "aa";
  // 定义私有函数
  function A(){};

  // 实例化一个对象后，返回该实例，然后为该实例增加一些公有属性和方法
  var object = {
    name: 'obejct',
    getName: function(){
      return this.name;
    }
  };

  // 添加公有属性
  object.A = "aa";
  // 添加公有方法
  object.B = function(){
      return privateA;
  }
  // 返回该对象
  return object;
})();

application.name == 'haha';
console.log(application);

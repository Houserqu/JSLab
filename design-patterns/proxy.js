// // 先申明一个奶茶妹对象
// var TeaAndMilkGirl = function(name) {
//   this.name = name;
// };
// // 这是京东ceo先生
// var Ceo = function(girl) {
//   this.girl = girl;
//   // 送结婚礼物 给奶茶妹
//   this.sendMarriageRing = function(ring) {
//       console.log("Hi " + this.girl.name + ", ceo送你一个礼物：" + ring);
//   }
// };
// // 京东ceo的经纪人是代理，来代替送
// var ProxyObj = function(girl){
//   this.girl = girl;
//   // 经纪人代理送礼物给奶茶妹
//   this.sendGift = function(gift) {
//       // 代理模式负责本体对象实例化
//       (new Ceo(this.girl)).sendMarriageRing(gift);
//   }
// };
// // 初始化
// var proxy = new ProxyObj(new TeaAndMilkGirl("奶茶妹"));
// proxy.sendGift("结婚戒"); // Hi 奶茶妹, ceo送你一个礼物：结婚戒

// 班长收作业给老师， 班长：代理

// 创建一个班长
var monitor = {
  homeworks: []
};

// 老师构造函数
function Teacher(name) {
  this.teacherName = name;
  this.homeworks = []
}

// 收一份作业
monitor.add = function(homework){
  this.homeworks.push(homework)
}

// 交作业
monitor.send = function(teacher) {
  teacher.homeworks = this.homeworks;
  this.homeworks = [];
  console.log('已经把作业交给 ' + teacher.teacherName + ' 老师');
}

monitor.add('张三的作业');
monitor.add('李四的作业');

var niu = new Teacher('牛老师')
monitor.send(niu);

console.log(niu.homeworks);
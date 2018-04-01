/**
 * 建造者模式
 */

var Car = function() {
  var _frame, _engine, _wheel;
  this.setFrame = function (val) {
    _frame = val;
  };
  this.setEngine = function (val) {
    _engine = val;
  };
  this.setWheel = function (val) {
    _wheel = val;
  };
  this.getFrame = function () {
    return _frame
  };
  this.getEngine = function () {
    return _engine
  };
  this.getWheel = function () {
    return _wheel
  };
  this.check = function () {
    console.log(_frame + '检查完毕');
    console.log(_engine + '检查完毕');
    console.log(_wheel + '检查完毕');
  };
}

var Builder = function() {

}

var CarBuilder = function() {
  this.__proto__ = new Builder();
  var _car = new Car();

  this.buildFrame = function() {
    _car.setFrame("911 frame");
  }

  this.buildWheel = function() {
    _car.setWheel("911 wheel");
  }

  this.buildEngine = function() {
    _car.setEngine("911 engine");
  }

  this.buildCar = function() {
    return _car;
  }
}


var Director = function(builder) {
  var _builder = builder;
  this.build = function() {
    _builder.buildFrame();
    _builder.buildWheel();

    return _builder.buildCar();
  }
}

var build911 = new CarBuilder();
var director = new Director(build911);

var my911 = director.build();

my911.check();

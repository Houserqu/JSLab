var People = function (name) {
  var o = {};
  o.__proto__ = People.prototype;
  var result = People.call(o, name)
  return result;
}

var tom = People('tom');
var jon = People('jon');
console.log(tom, jon);
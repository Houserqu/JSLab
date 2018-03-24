var foo = function Foo() {
  var i = 0;
  console.log(i++);
}

var f1 = foo,
  f2 = foo;

f1();
f1();
f2();
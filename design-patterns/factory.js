function createStudents(name, sex, age) {
  let student = new Object();

  student.name = sex;
  student.sex = sex;
  student.age = age;

  student.say = function() {
    console.log('my name :' + this.name);
  }

  return student;
}

let xiaoming = new createStudents('xiaoming', '1', 10);
let xiaomei = new createStudents('xiaomei', '2', 20);

xiaoming.say();
xiaomei.say();

console.log(xiaoming);
console.log(xiaomei);

function Foo(){
  console.log('haha');
}

let foo = new Foo();
console.log(foo instanceof Foo);
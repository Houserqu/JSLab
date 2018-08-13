function Person() {
  this.type='person';
}

function Student(name){
  this.name = name;
};

Student.prototype = Person;

var tom = new Student('tom')

console.log(tom);
console.log(tom.__proto__);
console.log(Student.prototype);
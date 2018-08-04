function Person(sex){
  this.sex = sex;
}


Person.name = 'function person'

Person.say = function() {
  console.log(this.name);
}


var person1 = new Person('11111');

console.log('height:',person1.height);

Person.prototype.height = '12m';

console.log('height:', person1.height);


console.log('school:', person1.school);

person1.__proto__.school = 'ujn';

console.log('school:', person1.school);


// console.log('123' instanceof Person);
// console.log(Object.getPrototypeOf(person1));

// console.log(person1.__proto__);
// console.log(person1.constructor);

// console.log(person1.name);
// //delete person1.name;
// console.log(person1.name)

// console.log(Person.hasOwnProperty('name'))
// console.log(Person.name)

for( x in person1){
  console.log(x);
}
debugger;

console.log(Object.keys(person1));

var obj = {
  name: 'name',
  get latest(){
    return 3
  }
}

console.log(obj.latest);
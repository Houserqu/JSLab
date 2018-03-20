let Person = function() {
  this.age = 99;
  console.log(this);

  let f = function(){
    console.log(this);
  }

  f();
  
}

let o = {
  f: Person
}

o.f();
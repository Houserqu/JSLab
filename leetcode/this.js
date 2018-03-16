function fruits() {}

fruits.prototype = {
  color: 'red',
  say: function (str) {
    console.log(this);
    console.log('my color :' +  this.color + str);
  }.bind(this)
}

let banana = {
  color: "yellow"
}

let apple = new fruits;

//apple.say.apply(banana, ["good"]);
//apple.say.call(banana, "good");
//apple.say();

let ob = {
  color: 'red',
  say: function (str) {
    console.log(this);
    console.log('my color :' +  this.color + str);
  }.bind(this)
}

ob.say();
//var input = readline().split();
  
var input = ['R','R','R'];

var sum = 0;

for(var i = 0; i < input.length; i++){
  if(input[i] == 'L'){
    sum--;
  }else{
    sum++;
  }
}

var t = -3%4;

if(t<0){
  t+=4;
}

console.log(t)

switch(t){
  case 0: console.log('N');break;
  case 1: console.log('E');break;
  case 2: console.log('S');break;
  case 3: console.log('W');break;
}


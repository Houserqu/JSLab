var M = [9,1,4]

M.sort(function(a, b){
  return parseInt(b) - parseInt(a);
})

var sum_a = 0;
var sum_b = 0

for(var i = 0; i < M.length; i++){
  if( i % 2 == 0 ){
    sum_a += parseInt(M[i]);
  } else {
    sum_b += parseInt(M[i]);
  }
}

console.log(Math.abs(sum_a - sum_b));


console.log(Math.ceil(4.0));
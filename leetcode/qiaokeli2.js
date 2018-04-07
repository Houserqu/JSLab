var N = 3, M = 9;

// var start = 1;
// for(var k = 2; k <= N; k++){
//   start += start * 2;
// }

for(var i = Math.ceil(M/N); i < M; i++){
  var today = i;
  var hasEat = i;
  var flag = true;

  var flag = true;
  for(var j = 2; j <= N; j++) {
    today = Math.ceil(today/2);
    hasEat += today;

    if(hasEat > M){
      flag = false;
      break
    }
  }

  // 找到最大值
  if(!flag){
    console.log(i-1);
    break;
  }
}
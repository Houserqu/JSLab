var N = 1;

for(var i = 0; i < N; i++){
  var lines = ['3', '1', '2', '3', '5'];
  var K = parseInt(lines[0]);
  
  lines.shift();

  console.log(lines);
  
  var a = 0;
  var b = lines.length - 1;
  
  for(var j = 0; j < K-1; j++) {

      if( parseInt(lines[a+1]) / parseInt(lines[b]) < parseInt(lines[a])/parseInt(lines[b-1])){
        a = a + 1
      }else {
        b = b - 1
      }
  }
  
  console.log(lines[a], lines[b])
}
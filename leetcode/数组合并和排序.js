while(line = readline()){
  var a = readline().split(" ");
  var b = readline().split(" ");

  var c = a.concat(b)

  var result = [];
  
  for(var i = 0; i < c.length; i++){
      if(!result.includes(c[i])){
          result.push(c[i]);
      }
  }
  
  result.sort(function(a, b){
    return parseInt(a) - parseInt(b);
  })
  
  console.log(result.toString().replace(/,/g, ' '));
}

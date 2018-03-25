var f_arr = "6 2".split(" ");
var n = parseInt(f_arr[0]);
var k = parseInt(f_arr[1]);

console.log(n,k)

var input = "1 5 3 3 4 2".split(" ");

console.log(input);

var n_double = [];

for(var p = 0; p < n; p++){
  if(!n_double.includes(input[p])){
    n_double.push(input[p]);
  }
}

var result = 0;

for(var i = 0; i < n_double.length; i++){
    for(var j = i; j < n; j++){
        if(parseInt(n_double[j]) - parseInt(n_double[i]) == k || parseInt(n_double[j]) - parseInt(n_double[i]) == -k){
            result++;
            break;
        }
    }
}

console.log(result);
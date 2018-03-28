var nk = "3 2";
var nk_arr = nk.split(" ");
var n = parseInt(nk_arr[0]);
var k = parseInt(nk_arr[1]);

console.log(n,k);

var result = 0;

for(var i = 1; i <= n; i++){
    for(var j = 1; j <= n; j++){
        if(i%j >= k){
            result++;
            console.log(i,j)
        }
    }
}

console.log(result);
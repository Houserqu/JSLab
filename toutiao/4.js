while (line = readline()) {
  var n = line;
  var m = readline();
}

n = 3;
m = 10;

let timeArr = "0 3 3 7 7 0".split(' ');

let input = []; //播出时间段数组

for(let i = 0; i < n*2; i+=2){
    times.push([parseInt(timeArr[i]), parseInt(timeArr[i+1])])
}

// 根据开始时间排序
input.sort((a, b) => {
  return a[0] - b[0]
});

let result = 0; //结果

for(let i = 0; i < input.length; i++) {
  if(i < input.length - 1){
    if(input[i][1] <= input[i+1][0]){
         result++;
    }
  }
}


console.log(times);


var number = [
  ["66666","6...6","6...6","6...6","66666"],
  ["....6","....6","....6","....6","....6"],
  ["66666","....6","66666","6....","66666"],
  ["66666","....6","66666","....6","66666"],
  ["6...6","6...6","66666","....6","....6"],
  ["66666","6....","66666","....6","66666"],
  ["66666","6....","66666","6...6","66666"],
  ["66666","....6","....6","....6","....6"],
  ["66666","6...6","66666","6...6","66666"],
  ["66666","6...6","66666","....6","66666"]
]

var str = "6+6*2+3*100";

var result = eval(str);

console.log(result);

var result_arr = result.toString().split("");

for(var i = 0; i < 5; i++){
  var line = "";
  for(var k = 0; k < result_arr.length; k ++){
    line = line + number[result_arr[k]][i] + "..";
  }
  line = line.slice(0,-2);
  console.log(line);
}

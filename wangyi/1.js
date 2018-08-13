// 本题为考试单行多行输入输出规范示例，无需提交，不计分。
  var lines = '1 2 3'.split(" ");
  var a = parseInt(lines[0]);
  var b = parseInt(lines[1]);
  var c = parseInt(lines[2]);

  var r = [];
  r[0] = a * b * c;
  r[1] = (a + b) * c;
  r[2] = a * (b + c);

  var result = r[0];

  r.forEach(item => {
    if(item > result){
      result = item
    }
  })

  console.log(result);
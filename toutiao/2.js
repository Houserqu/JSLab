/**
 * 3
1,10;32,45
78,94;5,16
80,100;200,220;16,32
 */

while (line = readline()) {
  var m = line;
  var input = [];

  m.forEach(item => {
    let curLine = readline();
    let curLineArr = curLine.splice(';');
    curLineArr.forEach(item => {
      input.push(item.splice(','))
    })
  })

  // 排序
  input.sort((a, b) => {
    return a[0] - b[0]
  });

  // 迭代器
  const reducer = (value, cur) => {
    // 初始状态
    if (value.length == 0) {
      value.push(cur);
      return value;
    }

    // 用末尾项与当前项合并
    let merged = merge(value[value.length - 1], cur);

    value.pop(); // 弹出末尾项

    let curValue = value.concat(merged); // 合并结果值

    return curValue;
  }

  // 合并两个数组
  const merge = (a, b) => {
    if (a[1] < b[0] || b[1] < a[0]) {
      return [a, b];
    }

    if (a[1] >= b[0]) {
      return [[Math.min(b[0], a[0]), Math.max(b[1], a[1])]]
    }
  }

  var resultArr = input.reduce(reducer, []);

  console.log(resultArr);
}

// var m = 3;

// var input = [
//   [1,10], [32,45],[78,94],[5,16],[80,100],[200,220],[16,32]
// ];





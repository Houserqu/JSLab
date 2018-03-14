/*
  题目：给定一个数组，里面全是正整数。数字大小表示这一步最多可以向后移动几个节点。
  总是从数组第一个元素开始移动。问如何移动，可以以最少步数移动到最后一个节点。

  例如：[3,4,2,1,3,1]初始状态指向3表示下一步可以移动1格，或者2格，或者3格。

  最优的方式是指向3的时候移动一步，第二次选择移动4步，一共只需要两步即可移动到数组尾。
*/

/*
  - 寻找当前直接能到达最远点 index
  - 查找距离内最大点
/*

/*
  [3,4,3,1,1,1,1,1,1,1,1]
   0,1,2,3,4,5,6,7,8,,9
  3,4,3,4,7
*/

let lessMove = (input) => {
  let cur_point = input[0]; // 当前点值
  let cur_index = 0; //当前点所在位置

  let result = [];  //途径点数组

  // 下一个点
  let cur_next_point = 0; 
  let cur_next_index = 0;

  while(cur_index < input.length){
    //console.log(cur_point);
    result.push(cur_point);
    // 本轮次中最远点
    let temp_max_index = cur_point + cur_index;
    if(temp_max_index >= input.length - 1){
      break;
    }
    for(let i = 1; i <= cur_point; i++){
      // 当前点位置
      let index = cur_index + i;
  
      //加上当前点能到最远位置
      let max = input[index] + i + cur_index;
  
      // 如果当前点能到最远位置大于暂存位置
      if(max > temp_max_index){
        cur_next_index = index;
        cur_next_point = input[index];
        
        temp_max_index = max; // 暂存最远点
      }
    }

    cur_index = cur_next_index;
    cur_point = cur_next_point;
  }

  result.push(input[input.length-1]);

  return result
}

let input_example = [3,1,2,1,3,1,1,3,1,1,2];

console.log(lessMove(input_example));
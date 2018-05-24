function getIntersection(...args) {
  // your code here
  console.log(args);

  let left = Math.min(args[0][0], args[0][1]);
  let right = Math.max(args[0][0], args[0][1]);

  console.log(left, right);


  // 排序区间
  args.forEach(item => {
    if(item[0] < item[1]){
      if(item[0] > left){
        left = item[0]
      }

      if(item[1] < right){
        right = item[1]
      }
    }else{
      if(item[1] > left){
        left = item[1]
      }

      if(item[0] < right){
        right = item[0]
      }
    }
  })

  if(left > right){
    return null;
  } else {
    return [left, right];
  }
}


console.log(getIntersection([1, 2], [2, 3]));


var a = [1,2,3];

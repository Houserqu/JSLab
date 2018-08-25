while (line = readline()) {
  var lines = '4 3'.split(" ");
  var n = parseInt(lines[0]);
  var t = parseInt(lines[1]);

  var arrstr = '10 3 7 5';
  var arr = arrstr.split(" ");

  let min = parseInt(arr[0]);
  let minIndex = 0;

  console.log(arr, n, t)

  for(let s = 0; s < n; s++){
    arr[s] = parseInt(arr[s]);
    if (arr[s] < min) {
      min = arr[s];
      minIndex = s
    }
  }

  console.log(arr);

  let result = 1;

  for (let k = minIndex + 1; k < n; k++) {
    if (arr[k] >= arr[minIndex]) {
      minIndex = k;
      result++;
    }
  }

  for (let i = 1; i < t; i++) {
    for (let j = 0; j < n; j++) {
      if (arr[j] >= arr[minIndex]) {
        minIndex = j;
        result++;
      }
    }
  }

  console.log(result);
}
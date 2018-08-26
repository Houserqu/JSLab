function binarySearch(arr, target) {
  let left = 0, right = arr.length - 1;

  while(left <= right){
    let middle = left + Math.floor(( right - left ) / 2);
    if (arr[middle] == target){
      return middle;
    } else if (arr[middle] < target) {
      left = middle + 1
    } else {
      right = middle - 1;
    }
  }

  return -1;
}

console.log(binarySearch([1,2,4,5], 1));
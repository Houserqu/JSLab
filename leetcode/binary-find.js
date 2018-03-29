/**
 * 二分查找
 * @param {array} arr 正序整数数组
 * @param {int} target 查找目标
 */
function binarySearch(arr, left, right, target) {
  if(left > right) return -1;
  
  var mid = Math.floor((left + right) / 2);

  if(target == arr[mid]){
    return mid;
  }

  if(target > arr[mid]) {
    return binarySearch(arr, mid + 1, right, target);
  }

  if(target < arr[mid]) {
    return binarySearch(arr, left, mid - 1, target);
  }
 
}

console.log(binarySearch([1,2,3,5,6,8,9,10], 0, 7, 1));
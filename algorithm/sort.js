/**
 *  冒泡排序 O(n^2)
 * @param {Array} arr 
 */
var bubbleSort = function (arr) {
  var len = arr.length;
  for(var i = 0; i < len; i++){
    for(var j = 0; j < len-i; j++){
      if(arr[j] > arr[j+1]){
        var temp = arr[j];
        arr[j] = arr[j+1];
        arr[j+1] = temp;
      }
    }
  }
  return arr
}

/**
 * 改进快速排序
 * @param {Array} arr 
 */
var superBubbleSort = function (arr) {
  var len = arr.length;
  var pos = 0;
  var i = len - 1;
  while(i > 0){
    for(var j = 0; j < len-i; j++){
      if(arr[j] > arr[j+1]){
        pos = i;
        var temp = arr[j];
        arr[j] = arr[j+1];
        arr[j+1] = temp;
      }
    }
    i = pos;
  }
  return arr 
}

/**
 * 选择排序
 * @param {Array} arr 
 */
var selectSort = function(arr) {
  var len = arr.length;
  for(var i = 0; i < len; i++){
    var temp_index = i;
    for(var j = i + 1; j < len; j++){
      if(arr[j] < arr[temp_index]){
        temp_index = j
      }
    }

    var temp = arr[temp_index];
    arr[temp_index] = arr[i];
    arr[i] = temp;
  }

  return arr;
}

/**
 * 快速排序
 * @param {Array} arr 
 */
var quickSort = function (array, left, right) {
  if (Object.prototype.toString.call(array).slice(8, -1) === 'Array' && typeof left === 'number' && typeof right === 'number') {
      if (left < right) {
          var x = array[right], i = left - 1, temp;
          for (var j = left; j <= right; j++) {
              if (array[j] <= x) {
                  i++;
                  temp = array[i];
                  array[i] = array[j];
                  array[j] = temp;
              }
          }
          quickSort(array, left, i - 1);
          quickSort(array, i + 1, right);
      }
      return array;
  } else {
      return 'array is not an Array or left or right is not a number!';
  }
}

var myQuickSort = function(arr, left, right){
  if(left < right){
    var index = left;
    var temp ;
    for(var i = left; i <= right; i++){
      if(arr[i] < arr[right]){
        temp = arr[i];
        arr[i] = arr[left];
        arr[index] =temp;
        index++;
      }
    }

    temp = arr[right];
    arr[right] = arr[index];
    arr[index] = temp;
    
    myQuickSort(arr, left, index);
    myQuickSort(arr, index+1, right);
  }

  return arr;
}

/**
 * 插入排序 O(n^2)
 * @param {Array} arr 
 */
var insertSort = function(arr) {
  for (var i = 1; i < arr.length; i++) {
    var key = arr[i];
    var j = i - 1;
    while (j >= 0 && arr[j] > key) {
      arr[j + 1] = arr[j];
      j--;
    }
    arr[j + 1] = key;
  }
  return arr;
}

/**
 * 二分插入排序，采用二分法查找
 * @param {Array} arr 
 */
var superInsertSort = function(arr) {
  for (var i = 1; i < array.length; i++) {
    var key = array[i], left = 0, right = i - 1;
    while (left <= right) {
        var middle = parseInt((left + right) / 2);
        if (key < array[middle]) {
            right = middle - 1;
        } else {
            left = middle + 1;
        }
    }
    for (var j = i - 1; j >= left; j--) {
        array[j + 1] = array[j];
    }
    array[left] = key;
  }
  console.timeEnd('二分插入排序耗时：');

  return array;
}

/**
 * 希尔排序 O(nlogn)
 * @param {Array} arr 
 */
var shellSort = function(arr){
  var len = arr.length,
  temp,
  gap = 1;

  while(gap < len/5) {          //动态定义间隔序列
    gap =gap*5+1;
  }

  for (gap; gap > 0; gap = Math.floor(gap/5)) {
    for (var i = gap; i < len; i++) {
        temp = arr[i];
        for (var j = i-gap; j >= 0 && arr[j] > temp; j-=gap) {
            arr[j+gap] = arr[j];
        }
        arr[j+gap] = temp;
    }
  }
  return arr;
}

/**
 * 归并排序 O(nlogn)
 * @param {Array} arr 
 */
function mergeSort(arr) {  //采用自上而下的递归方法
  var len = arr.length;
  if(len < 2) {
      return arr;
  }
  var middle = Math.floor(len / 2),
      left = arr.slice(0, middle),
      right = arr.slice(middle);
  return merge(mergeSort(left), mergeSort(right));
}

/**
 * 归并排序辅助方法
 * @param {Array} left 
 * @param {Array} right 
 */
function merge(left, right)
{
  var result = [];
  while (left.length && right.length) {
      if (left[0] <= right[0]) {
          result.push(left.shift());
      } else {
          result.push(right.shift());
      }
  }

  while (left.length)
      result.push(left.shift());

  while (right.length)
      result.push(right.shift());
  return result;
}

console.log(myQuickSort([4,2,1,5,6,3,9,7,8,10],0,9));

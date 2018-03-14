/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
// TODO: 需要改善
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
  let num_1 = nodeToNumber(l1);
  let num_2 = nodeToNumber(l2);

  console.log(num_1, num_2);
  
  var sum = num_1 + num_2;
  console.log(sum);
  let result = spiceNumber(sum);
  console.log('result:',result);
  return result;
};

let nodeToNumber = (node) => {
  let i = 0;
  let number = 0;

  for(i; ;i++){
    if(node.val != null ){
      console.log(node.val);
      number += node.val * Math.pow(10, i);
      if(node.next){
        node = node.next;
      }else {
        break;
      }
    } else {
      break;
    }
  }
  console.log('number',number);
  return number;
}

let spiceNumber = (number) => {
  let number_str = number.toString();
  console.log(number_str);
  let len = number.toString().length;
  console.log(len);
  let result = [];
  for(let i = 0; i < len; i ++){
    let val = number % 10;
    result.push(val);
    number = Math.floor(number / 10);
  }

  return result;
}

// addTwoNumbers(
//   {"val":1,"next":{"val":0,"next":{"val":9,"next":null}}},
//   {"val":5,"next":{"val":7,"next":{"val":8,"next":null}}}
// );

//console.log(spiceNumber(3241));

//console.log(nodeToNumber({"val":1,"next":{"val":0,"next":{"val":9,"next":null}}}));

console.log(spiceNumber(1.9341684684684683e+61))
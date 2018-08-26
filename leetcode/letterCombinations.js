let result = [];

/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function (digits) {
  const letters = [
    [],
    [],
    ['a', 'b', 'c'],
    ['d', 'e', 'f'],
    ['g', 'h', 'i'],
    ['j', 'k', 'l'],
    ['m', 'n', 'o'],
    ['p', 'q', 'r', 's'],
    ['t', 'u', 'v'],
    ['w', 'x', 'y', 'z'],
  ];

  let digitsArr = digits.split('');
  let result = [];

  doCombination(letters, '', digitsArr, result);

  console.log(result);
};

/**
 * 递归查找组合
 * @param {array} letters 所有按钮
 * @param {string} cur 当前字符
 * @param {array} digits 输入的数字
 * @param {array} result 结果
 */
var doCombination = function (letters, cur, digits, result) {
  if (cur.length >= digits.length){
    result.push(cur);
    return;
  }

  letters[parseInt(digits[cur.length])].forEach(element => {
    let newCur = cur + element;
    dfs(letters, newCur, digits, result);
  });
}

letterCombinations('23');
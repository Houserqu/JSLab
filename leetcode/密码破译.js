/**
 * 密码破译
  时间限制：C/C++语言 1000MS；其他语言 3000MS
  内存限制：C/C++语言 65536KB；其他语言 589824KB
  题目描述：
  我们来做一个简单的密码破译游戏。破译的规则很简单，将数字转换为字母，1转化为a，2转化为b，依此类推，26转化为z。现在输入的密码是一串数字，输出的破译结果是该数字串通过转换规则所能产生的所有字符串。

  输入
  多行数据，每行为一个数字串。

  输出
  多行数据，每行对应输出通过数字串破译得到的所有字符串，并按照字符串顺序排列，字符串之间用单个空格分隔。每行开头和结尾不允许有多余的空格。


  样例输入
  1

  12

  123

  样例输出
  a

  ab l

  abc aw lc
 */

var saveLet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

function numToChar(num) {
  return saveLet[num-1];
}

function a (str) {
  var str_arr = str.split('');

  var result = '';

  for(var i = 0, len = str_arr.length; i < len ; i++) {
    result += numToChar(str_arr[i]);
  }
  console.log(result);
}

a('123');
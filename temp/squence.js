// let reg = 'abc'.split('').join('.*');

// let regex = new RegExp(`.*${reg}.*`);

// let result = regex.test('aiub006c');

// console.log(result);

var isSubsequence = function (s, t) {

  let s_arr = s.split('');
  console.log(s_arr);

  for (let i = 0; i < t.length; i++) {
    if (t.charAt(i) == s_arr[0]) {
      s_arr.shift();
      if (s_arr.length == 0) {
        return true
      }
    }
  }
  return false;
};

console.log(isSubsequence('', 'ahbgdc'));
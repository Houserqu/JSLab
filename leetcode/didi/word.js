function findWord(input) {
  var inputStr = input.split(' ');

  var targetArr = inputStr[0].split('');

  inputStr.shift();


  var word_a = ['q', 'w', 'e', 'r', 't', 'a', 's', 'd', 'f', 'g', 'z', 'x', 'c', 'v']
  var word_b = ['y', 'u', 'i', 'o', 'p', 'h', 'j', 'k', 'l', 'b', 'n', 'm']

  inputStr.forEach(element => {
    var cur_arr = element.split('');
    var a = Math.abs(cur_arr.length - targetArr.length);
    
    var score = a * 3;

    for (let i = 0; i < Math.min(cur_arr.length, targetArr.length); i++ ) {
      if(cur_arr[i] == targetArr[i]) continue;

      if ((word_a.indexOf(cur_arr[i]) > 0 && word_a.indexOf(targetArr[i]) > 0) || (word_b.indexOf(cur_arr[i]) > 0 && word_b.indexOf(targetArr[i]) > 0)){
        score += 1
      } else {
        score += 2
      }
    }

    console.log(score);
  });
}

findWord('slep slap sleep step shoe shop snap slep')
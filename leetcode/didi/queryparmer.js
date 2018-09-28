parseQueryString('https://www.didichuxing.com/path?key=1&ke', '&');

function parseQueryString(url, key) {
  var parmar_str = url.split('?');
  console.log(parmar_str);
  if(parmar_str.length <= 1) {
    return '_EMPTY_'
  }
  var parmar_key_str = parmar_str[1].split('&');

  var parmars = {};

  parmar_key_str.forEach(element => {
    var cur = element.split('=');
    console.log(cur);
    if(cur.length == 2){
      parmars[cur[0]] = cur[1];
    }
  });

  var result = parmars[key]
  if(result){
    console.log(result)
  } else {
    console.log('_EMPTY_')
  }
}
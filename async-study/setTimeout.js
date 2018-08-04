var count = function () {
  return new Promise((resolve, reject) => {
    console.log('start');
    setTimeout(() => {
      return '123';
    }, 3000);
  })
}

async function get(){
  let result = await count();
  console.log('result', result.toString());
}

get();
// .then(data => {
//   console.log(data);
// })

var countstr = count();

console.log(countstr);
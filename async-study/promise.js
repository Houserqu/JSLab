// var p1 = new Promise((resolve, reject) => {
//   setTimeout(() => resolve(), ms, 'done');
// })

function timeoutB(time) {
  return new Promise((resolve, reject) => {
    setTimeout((msg) => resolve(msg), time, time);
  })
}

function timeoutA(ms){
  return new Promise((resolve, reject) => {
    setTimeout((time) => reject(time), ms, 'A');
  })
}

// timeoutA(1000).then(result => {
//   console.log(result);
//   return result
// }).then(result => {
//   return timeoutB(result)
// }).then(result => {
//   console.log(result)
//   return result;
// }).then(result => {
//   console.log(result);
// }).catch(e => {
//   console.log('error:',e);
// })

Promise.all([timeoutA, timeoutB]).then(result => {
  console.log(result);
})
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
    setTimeout((time) => resolve(time), ms, 'A');
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

// Promise.all([timeoutA, timeoutB]).then(result => {
//   console.log(result);
// })

main = async () => {
  const resultA = await timeoutA(1000);
  console.log('a ', resultA);
  const resultB = await timeoutB(2000);
  console.log('a ', resultB);
}

main2 = () => {
  timeoutA(1000).then(data=>{
    console.log('a ', data);
    return timeoutB(2000)
  }).then(data => {
    console.log('b', data);
  })
}

main();


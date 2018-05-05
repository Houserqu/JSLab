var p1 = new Promise((resolve, reject) => {
  resolve("p1")
})

function timeout(ms){
  return new Promise((resolve, reject) => {
    setTimeout(() => resolve(p1), ms, 'done');
  })
}

timeout(100).then(result => {
  return result
}).then(result => {
  console.log(result)
}).finally(()=> {
  console.log("finally");
})
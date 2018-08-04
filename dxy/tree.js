data = [
  {
    id: '1',
    options: ['红', '绿', '蓝'],
  },
  {
    id: '2',
    options: ['15', '15', '16'],
  },
  {
    id: '3',
    options: ['L', 'S', 'M'],
  }
]

let len = data.length;

let result = [];

// for (let i = 0; i < data[0].options.length; i++) {

//   for (let j = 0; j < data[1].options.length; j++) {

//     for (let k = 0; k < data[2].options.length; k++) {
//       let row = [];
//       row.push(data[0].options[i], data[1].options[j], data[2].options[k])
//       result.push(row);
//     }
//   }
// }

function findChild(loop, cur){
  if(loop >= data.length){
    result.push(cur);
    return;
  } else {
    data[loop].options.forEach(item => {
      findChild(loop + 1, [...cur, item])
    })
  }
}

findChild(0, []);


// data.forEach(item => {
//   findChild([], item.options);
// });

console.log(result);


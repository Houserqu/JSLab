var arr = { a: {value:2}, b: 2 };
 const { a } = arr; 
 arr.a.value=9; 
 console.log(a);
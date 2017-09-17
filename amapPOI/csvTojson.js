node_cj = require("node-csv-json");

//将csv转换成json文件

node_cj({
  input: "data.csv", 
  output: "data.json"
}, function(err, result){
  if(err) {
    console.error(err);
  }else {
    console.log(result)
  }
});
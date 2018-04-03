const path = require('path');


var nowpath = function() {
  console.log("__dirname",__dirname);
  console.log("resolve", path.resolve());
}

module.exports = nowpath;
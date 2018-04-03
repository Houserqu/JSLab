let apath = require('./a');
let path = require('path');

var mypath = path.resolve();

apath();

console.log(__dirname);
console.log("resolve", path.resolve());

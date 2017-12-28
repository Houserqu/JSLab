let reg = new RegExp(/.^[0-9]+/g);

let reg_phone = new RegExp(/^1[7|8]9/);

let reg_xml = new RegExp((/<.*?/g));
// console.log(reg.exec('abababbbbaaasd'));
// console.log('0abcddeee12f43'.match(reg));

let html = `<html><h1>haha</h1></html>`;

console.log(html.match(reg_xml));

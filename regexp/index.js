let reg = new RegExp(/.^[0-9]+/g);

let reg_phone = new RegExp(/^1[7|8]9/);

let reg_xml = new RegExp((/<.*?/g));
// console.log(reg.exec('abababbbbaaasd'));
// console.log('0abcddeee12f43'.match(reg));

let html = `<html><h1>haha</h1>></html><>`

console.log(re = /a(b+)a/g.exec("abbaaabbbba"));
console.log(re[0],re[1], re.input);

console.log(html.match(/<{1}>/g));

console.log(/<{1}>/g.test(html));

console.log(html.replace(/<{1}>/g, "aa"));
console.log(html.match(/<{1}>/g));


/**
 * 将11位电话号码的第4位到第7位转换成 *
 * @param  {[string]} phone [完整第电话号码]
 * @return {[string]}        [隐藏后的电话号码]
 */
function phoneHide(phone) {
  //phone 校验
  if(typeof(phone) != 'string'){
    return 'inviate type';
  }

  phone = String(phone);

  if(phone.length != 11){
    return 'inviate length';
  }

  return phone.slice(0,3)+'****'+phone.slice(7,11);
}

console.log(phoneHide('18953136382'));

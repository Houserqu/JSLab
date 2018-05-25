function Student(name, province, city, area){
  this.name = name;
  this.province = province;
  this.city = city;
  this.area = area;

  this.getName = function(){
    return this.name
  }

  this.getProvince = function () {
    return this.province
  }

  this.getCity = function () {
    return this.city
  }

  this.getArea = function () {
    return this.area
  }

  // 外观接口
  this.getInfo = function(){
    console.log('姓名：', this.getName());
    console.log('省份：', this.getProvince());
    console.log('城市：', this.getCity());
    console.log('地区：', this.getArea());
  }
}

var student = new Student('张三', '湖北省', '黄冈市', '罗田县');

student.getInfo();
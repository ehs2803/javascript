var family = {
  'address': 'Seoul',
  members: {},
  addFamily: function(age, name, role) {
    this.members[role] = {
      age: age,
      name: name
    };
  },
  getHeadcount: function() {
    return Object.keys(this.members).length;
  }
};
// 객체는 값들을 그룹으로 묶은 데이터 모음. 키 값을 한쌍으로 정의하며 이를 속성이라 부름.
family.addFamily(30, 'chloe', 'aunt');
family.addFamily(3, 'lyn', 'niece');
family.addFamily(10, 'dangdangi', 'dog');
console.log(family.getHeadcount());
// json은 자바스크립트의 객체와 매우 유사한 구조를 지닌 데이터 교환 형식. 키:값 쌍의 모음들로 구성.
// 반드시 속성 키 이름은 큰 따옴표로 표시된 문자열. 값은 오직 문자열, 숫자, 배열, true, false, null 또는 다른 json객체만 가능.
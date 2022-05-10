// 속성 기술자를 통해 user객체의 age 속성 정의
let user = {};
Object.defineProperty(user, "age", {
  get: function () {
    return this._age;
  },
  set: function (age) {
    if (age < 0) {
      console.error('0보다 작은값은 올 수 없습니다.');
    } else {
      this._age = age;
    }
  },
  enumerable: true
});
user.age = 10;
console.log(user.age);
user.age = -1;

// 객체 정의. name 속성의 접근 기술자 정의. get, set 메소드 정의.
let user2 = {
  get name() {
    return this._name;    
  },
  set name(val) {
    if (val.length < 3) {
      throw new Error('3자 이상이어야 합니다.');
    }
    this._name = val;    
  }
}
user2.name = 'harin';
console.log(user2.name);
user2.name = 'ha';
// 속성 이름에 _를 붙이는 것은 비공개 속성임을 나타냄. 자바스크립트 객체는 속성 접근 제어자가 없어서 모든 속성은 공개.
// 그래서 대체로 이름 규칙을 통해 비공개임을 나타냄.
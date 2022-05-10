const studentProto = {
  gainExp: function() {
    this.exp++;
  }
};

const harin = {
  name: '하린',
  age: 10,
  exp: 0,
  __proto__: studentProto
};

const bbo = {
  name: "뽀",
  age: 20,
  exp: 10,
  __proto__: studentProto
};

bbo.gainExp();
harin.gainExp();
harin.gainExp();
// 두 객체 모두 공통된 경험치를 얻는 행위가 가능. 모두 같은 원형 객체에 연결되어 있기 때문.
console.log(harin);
console.log(bbo);

// __proto__ 속성으로 원형 객체를 정의 가능.
// 모든 자바스크립트 객체는 __proto__ 속성을 가지는데 예제 코드에서 처럼 별도로 __proto__ 속성에 다른 객체를 할당하지 않으면
// 기본적으로 Object.prototype 객체가 연결.
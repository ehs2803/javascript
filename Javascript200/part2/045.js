let user = {
  name: "jeado"
};
let descriptor = Object.getOwnPropertyDescriptor(user, 'name');
console.log(descriptor);

let user2 = {};
Object.defineProperty(user2, "name", {
  value: "jeado", // 값
  enumerable: true, // for...in 루프나 object.keys 메소드 같이 속성을 나열할 때 나열 가능 여부를 정의. false일때 나열 x
  configurable: true, // 값을 변경할 수 있는지 여부 정의. false일 경우 값이 변하지 않음.
  writable: false // 속성 기술자를 변경할 수 있는지 여부 정의. false일 경우 속성 기술자를 다시 변경 x
});
console.log(user2.name);
user2.name = "bbo";
console.log(user2.name);

let user3 = {
  name: "jeado",
  toString() {
    return this.name;
  }
};
Object.defineProperty(user3, "toString", {
  enumerable: false
});
for (let key in user3) {
  console.log(key);
}

let user4 = {};
Object.defineProperty(user4, "name", {
  value: "jeado",
  configurable: false
});
delete user4.name
console.log(user4);
Object.defineProperty(user4, "name", {
  writable: true
});
// 자바스크립트의 모든 객체 속성은 자기 자신에 대한 정보를 담고 있는 속성 기술자를 가지고 있음. 속성 기술자는 객체로 표현.

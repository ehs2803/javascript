function Storage() {
  this.dataStore = {};
}
Storage.prototype.put = function(key, data) {
  this.dataStore[key] = data;
}
Storage.prototype.getData = function(key) {
  return this.dataStore[key];
}

const productStorage = new Storage();
productStorage.put('id001', { name: '키보드', price: 2000 });
console.log(productStorage.getData('id001'));

function RemovableStorage() {
  Storage.call(this);
}
RemovableStorage.prototype = Object.create(Storage.prototype);
RemovableStorage.prototype.removeAll = function() {
  this.dataStore = {}
}
const productStorage2 = new RemovableStorage();
productStorage2.put('id001', { name: '키보드', price: 2000 });
productStorage2.removeAll();
const item2 = productStorage2.getData('id001');
console.log(item2);

// 자바스크립트에서 생성자 함수로부터 만들어진 객체는 그 생성자 함수의 프로토타입 객체를 상속한다.
// 모든 인스턴스는 해당 생성자 함수의 프로토타입 객체의 속성과 메소드를 사용 가능.

// 자바스크립트에서 모든 함수는 prototype 속성으로 프로토타입 객체를 가진다.
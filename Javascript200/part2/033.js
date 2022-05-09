const symbol = Symbol();
const hello = Symbol('hello');

console.log(Number(3) === Number(3));
console.log(Symbol('symbol') === Symbol('symbol'));
console.log(Symbol() === Symbol());
console.log(typeof Symbol());

const nationility = Symbol('nationility');
const user = {
  name: 'jay'
};
user[nationility] = 'korean';
console.log(user[nationility]);
// 심볼은 객체의 키로 사용가능.
for (let key in user) {
 console.log(key);
}
console.log(Object.keys(user));
console.log(Object.getOwnPropertyNames(user));
console.log(JSON.stringify(user));

const symbolProperties = Object.getOwnPropertySymbols(user);
console.log(symbolProperties);
console.log(user[symbolProperties[0]]);

// 심볼은 함수 호출에 통해 생성 가능.
// symbol 함수 호출 시 값을 전달가능. 이 값은 디버깅 용도이며 고유한 symbol 값으로 만들어지지 않는다. 즉 symbol은 늘 고유한 값 반환
const map = new Map();

map.set('one', 1);
map.set('two', 2);

console.log(map.get('one'));
console.log(map.has('one'));
map.delete('one');

console.log(map.has('one'));
console.log(map.has('two'));
// Map은 ES6부터 표준으로 추가된 데이터 집합체이다. 키와 값을 한 쌍으로 저장하고, 중복된 키는 허용하지 않다. 또한 반복가능한 객체로써 Iterator를 통해 Map 객체 내부를 순환할 수 있다.
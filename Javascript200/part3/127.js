const map = new Map();

map.set('one', 1);
map.set(2, 'two');
map.set([ 1, 2, 3 ], 'Three elements');
map.set({ a: 'A', b: 'B' }, 'object element');
map.set(function() {}, 'function element');

console.log(map.size);
// Map은 키에 어떤 종류의 자료형도 선언하는 것이 가능. 원시 자료형뿐 아니라 객체, 배열, 함수형 등 다양한 자료형으로 키를 선언할 수 있다.
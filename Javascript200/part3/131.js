const s = new Set();

s.add('one');
s.add('two');
s.add('three');

console.log(s.has('one'));
s.delete('one');
console.log(s.has('one'));
console.log(s.has('two'));
// Set은 ES6부터 표준으로 추가된 값의 집합체이다. Set은 값으로만 이루어진 데이터 구조로 중복값은 허용x
const arr = ['one', 'two', 'three', 'two', 'one', 'four'];
const s = new Set(arr);
console.log([...s]); // []와 ...연산자를 통해 Set 객체값들이 전개된 배열로 반환.
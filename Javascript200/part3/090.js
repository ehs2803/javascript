const arr = ['spring', 'summer', 'fall', 'winter', 'is', 'down'];

console.log(`"winter" is in this index ${arr.indexOf('winter')}`);
console.log(`"winter" is not in here, look this value ${arr.indexOf('winter', 4)}`);

// 배열.indexOf(검색할 값, 시작인덱스)
// 못찾으면 -1반환 
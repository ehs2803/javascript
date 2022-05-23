const arr = [
    { id: 0, name: '혜림', age: 6 }, 
    { id: 1, name: '현일', age: 3 }, 
    { id: 2, name: '현아', age: 5 }, 
    { id: 3, name: '우림', age: 2 }
];

const isHyunAHere = arr.some(el => el.name == '현아');
const olderThanSix = arr.some(el => el.age > 6);

console.log(isHyunAHere);
console.log(olderThanSix);
// 배열 요소가 특정 조건을 만족하는지 확인 (일부분만 만족해도 true)
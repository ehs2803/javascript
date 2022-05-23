const arr = [
    { id: 0, name: '혜림', age: 6 }, 
    { id: 1, name: '현일', age: 3 }, 
    { id: 2, name: '현아', age: 5 }, 
    { id: 3, name: '우림', age: 2 }
];

const isAllHyunA = arr.every(el => el.name == '현아');
const youngerThanSevenAll = arr.every(el => el.age < 7);

console.log(isAllHyunA);
console.log(youngerThanSevenAll);
// 배열 요소가 특정 조건을 만족하는지 확인 (모든것이 만족해야 true)
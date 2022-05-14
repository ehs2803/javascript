const arr = [1, 2, 3];
console.log(arr.shift());
console.log(arr.shift());
console.log(arr.shift());
console.log(arr.shift()); // undefined
// 배열 맨 앞 요소 추출. 원본 배열 수정. 더이상 추출할 요소 없으면 undefined반환
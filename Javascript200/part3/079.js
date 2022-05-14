const str = '12345678';

const distributedArr = Array.from(str);
console.log(distributedArr);

const modifiedArr = Array.from(distributedArr, el => el * 2);
console.log(modifiedArr);

// Array 내장겍체 메소드 from은 대입된 문자열 값을 구분자 없이 분할.
// 분할된 문자는 배열 요소 각각에 대입되어 결과값으로 배열을 반환.
// Array.from(배열로 변환될 값, 반활될 배열 내부 요소에 대한 callback 함수)
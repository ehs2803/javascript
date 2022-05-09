console.log("5" + 1); // 51
console.log("5" - 1); // 4
console.log("5" * 2); // 10
console.log("There is " + 5);
console.log("Five" * 2); // NaN
// 덧셈 연산자는 대입된 값에 따라 숫자형 또는 문자형으로 반환
// 뺄셈, 곱셈, 나눗셈 연산자는 항상 숫자형을 반환

console.log('- 연산자를 활용한 자료형 변환');
var str = 5 + "1";
console.log(str);
console.log(typeof str);

var num = +str; // 단항 양수 +를 통해 문자형을 숫자형으로 변환할 수 있음
console.log(num);
console.log(typeof num);

console.log('- 함수를 활용한 자료형 변환');
str = String(num);
console.log(str);
console.log(typeof str);

num = Number(str);
console.log(num);
console.log(typeof num);
// 자료형 변환 or 형변환
// 명시적 변환, 자동 변환
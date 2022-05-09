console.log(Infinity); /* Infinity */ // 다른 어떤 수보다 큰 수 
console.log(1 / Infinity); /* 0 */
console.log(0 / 0); /* NaN */
console.log(Infinity - Infinity); /* NaN = Not a number */
console.log(0 / "말도 안되는 값"); /* NaN :산술연산의 결과가 유효하지 않은 값 또는 숫자가 너무 커서 표현할 수 없는 값*/
// 다른 언어와 달리 숫자의 형태를 정수, 부동 소수점, 큰수 등 구체적으로 나누지 않고 숫자형 하나로 정의 함.
// 자바스크립트 숫자형은 64-bit Floating Poing = 64비트 부동 소수점이다.
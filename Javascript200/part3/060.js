const str = new String('자바스크립트');
const num = new Number(200);
const bool = new Boolean(true);
const date = new Date();
const map = new Map();
const set = new Set();

console.log(Math.PI);
console.log(Date.parse('2019-01-01'));
console.log(JSON.parse('{}'));

/*
자바스크립트 ECMAScript 구현 명세에 의해 정의된 표준 내장 객체가 있음.
표준 내장 객체는 전역 스코프 안에 있는 객체들을 참조하고 있어, 자바스크립트를 실행할 때 어떤 환경(브라우저, 서버)이라도 전역에서 사용가능

몇몇표준 내장 객체는 객체임에도 불구하고 함수처럼 호출 가능. 이러한 형태를 내장 함수 객체라고 함.
new 지시자를 사용해 함수 형태로 호출하며, 생성자를 생성. 이외에도 표준 내장 객체 내부에는 속성과 메소드가 정의.
*/
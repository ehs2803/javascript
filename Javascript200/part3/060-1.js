const str1 = '자바스크립트 200제';
const str2 = new String('자바스크립트 200제');

console.log(typeof str1);
console.log(typeof str2);

console.log(str1 === '자바스크립트 200제');
console.log(str2 === new String('자바스크립트 200제'));

console.log(str1.valueOf());
console.log(str2.valueOf());

/*
자바스크립트 표준 내장 객체의 종류

Object : 다른 표준 내장 객체의 기본이 되는 일반 객체
Number : 숫자형을 감싼 객체. 숫자형과 관련된 함수와 속성을 갖고 있다.
String : 문자형을 감싼 객체. 문자형을 조작하거나 특정 문자열을 찾고 추출하는 등의 메소드와 속성을 활용할 수 있음
Array : 모든 배열은 Array.prototype을 상속. 리스트처럼 배열 역할을 지니며, 배열 요소를 추가/삭제/순회/변형하는 다양한 메소드 속성 있음
Math : 수리 연산을 하기 위한 속성과 메소드. 다른 내장 객체와 달리 new를 통해 인스턴스를 생성하지 않음. static으로 정의된 속성과 메소드를 직접 호출해야 한다.
Date : 시간에 관련된 객체. 현재 시간 비롯, 국제 표준시에 따른 시간 변환 계산도 가능
JSON : javascript object notation을 의미. 이를 다른 자료형으로 변환하거나 다시 제이슨으로 변환하는 등의 메소드 제공
RegExp : 정규표현식은 특정 문자열 처리를 위해 사용하는 문자열 패턴 정의를 의미. 정규표현식을 적용 가능한 문자열 탐색, 비교, 대체 등의 문자열 처리 메소드들을 지원
Map : ES6부터 표준으로 추가되었고 키:값 데이터 구조를 지닌 데이터 집합체이다. 키의 중복성을 허용하지 않으며 관련된 속성, 메소드가지고 있고 Iterator를 통해 순회.
Set : ES6부터 표준으로 추가되었고 오직 값으로 이루어진 데이터 집합체. Iteraotr로 순회. 값의 중복성을 허용하지 않음.
*/
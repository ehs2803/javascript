// 자료형 or 타입
var x = 5; // 숫자형(Number)
var y = 'five'; // 문자형(String)
var isTrue = true; // 불린형(Boolean)
var empty = null; // null
var nothing // undefined
var sym = Symbol('me'); // Symbol

var item = {
	price: 5000,
	count: 10
}; // 객체(Object)
var fruits = ['apple', 'orange', 'kiwi']; // 배열(Array)
var addFruit = function (fruit) {
	fruits.push(fruit);
} // 함수(function)
addFruit('watermelon');
console.log(fruits);
/*
원시 타입 : 숫자형, 불린형, 문자형, 심볼형, null(빈값), undefined(존재하지 않는 값)
참조 타입 : 객체({}안에 키:값 형태로 이루어진 속성들의 모음. 키는 반드시 문자형)

원시 타입 : 값이 변수에 할당될 때 메모리 상에 고정된 크기로 저장. 해당 변수가 직접 값을 보관.
참조 타입 : 변수에 고정된 크기를 저장하지 않고 값의 메모리 주소를 참조. 객체는 속성들의 집합. 집합 내부에는 순서도 크기도 고정되어 있지 않다.

Global Object 객체는 모든 객체의 부모가 되는 객체. 이를 부모삼아 함수, 배열, 원시 자료형을 감싼 새로운 형태의 객체(String, Number, Boolean)와 
특수연산에 특화된 내장 객체(Math, JSON, REGEX) Iterable과 Collection 특성의 객체(Map, WeakMap, WeakSet)등의 표준 내장 객체가 있다.
*/
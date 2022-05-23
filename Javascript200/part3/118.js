const str = 'To lose your path is the way to find that path';

const regex1 = /path/;
const regex2 = /q/;
const regex3 = /t/g; // 모든소문자 t 찾기
const regex4 = /t/ig; // i는 대소문자 구분 x

console.log(str.search(regex1));
console.log(str.search(regex2));
console.log(str.search(regex3));
console.log(str.search(regex4));
//정규표현식(Regular Expression)은 특정규칙을 가진 문자열의 집합을 의미. 간단하게 regexp or regex라고 부른다.
// 특수문자 /와/를 사이에 두는 표현식을 통해 일치하는 문자열을 찾거나 반환하고 또는 일괄 치환하기도 한다.

// 자바스크립트에서 정규표현식을 활용하는데 두 가지 방법이 있다.
// 1. String 객체의 메소드 중 매개변수로 정규표현식을 대입하는 메소드 사용.
// 2. 정규표현식 자체를 RegEx객체로 해석. RegEx 객체의 내장 메소드를 활용.

// search 메소드는 정규표현식을 대입받아 문자열 앞에서부터 일치하는 첫번째 값의 인덱스 위치 반환. 없으면 -1 반환

/* 4가지 플래그
g(global)  : 대상 문자열의 전역 범위에서 해당하는 모든 문자를 찾음.
i(case insensitive) : 대소문자 구분 x
m(multiline) : 주로 ^와 $ 문자와 같이 비교. 다중 행에서 ^와 $ 문자는 각각 문자열의 처음와 끝을 의미. 즉 m 플래그가없으면 다중행과 상관없이 ^와 $는 문자열의 처음과 끝을 가리킨다.
그러나 m 플래그가 있으면 ^와 $은 각 행마다 처음과 끝을 가리킨다.
y(sticky) : 문자열의 lastindex 속성을 설정한 이후에 사용 가능한 플래그. lastindex로 설정한 위치부터 표현식에 일치하는 문자열 찾음.

정규표현식에서 문자 클래스는 특정 세트의 문자와 일치하는지 확인
\w : 모든 단어 문자(영숫자 및 밑줄)와 일치 여부를 확인.
\W : 단어 문자가 아닌 문자(영숫자 및 밑줄)와 불일치 여부 확인
\d : 임의의 숫자 0부터 9와 일치 여부 확인
\D : 숫자가 아닌 모든 문자 확인. 즉 숫자가 아닌 값만 반환하거나 true를 나타냄
\s : 공백문자(공백, 탭, 줄바꿈)와 일치여부 확인
\S : 공백문자가 아닌 문자 확인
*/
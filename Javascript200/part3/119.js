const str = 'To lose your path is the way to find that path';

const sensitiveCaseRegex = /to/;
const ignoreAllCaseRegex = /to/gi;
const findRangeRegex = /([a-f])\w+/i;
const findAllRangeRegex = /([a-f])\w+/gi;

console.log(str.match(sensitiveCaseRegex));
console.log(str.match(ignoreAllCaseRegex));
console.log(str.match(findRangeRegex));
console.log(str.match(findAllRangeRegex));
// String 객체의 match 메소드는 정규 표현식에 맞는 부분을 검색해서 해당 값을 반환.
// 그리고 정규식에 맞는 값이 있는 경우 다음과 같은 문자열의 추가 정보와 함께 배열을 반환
// 인자로 대입한 값과 일치하는 값, index속성(대응된 부분의 첫번째로 해당되는 인덱스), input속성(원본 문자열)
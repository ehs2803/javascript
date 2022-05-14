const str = 'Make your lives extradordinary';

console.log(str.includes('Make'));
console.log(str.includes('Make', 1));
// 문자열.include(문자열, 인덱스) -> String 내장객체 메소드 include는 일치하는 문자열 존재시 true, 없으면 false
// 두번째 인자 인덱스를 지정하면 해당 인덱스 위치부터 문자열을 확인
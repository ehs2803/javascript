var subject = '자바스크립트';
switch (subject) {
  case 'C언어':
    console.log('초보자를 위한 C++ 200제');
    break;
  case '자바스크립트':
    console.log('초보자를 위한 자바스크립트 200제');
    break;
  case '파이썬':
    console.log('초보자를 위한 파이썬 200제');
    break;
  default:
    console.log('이젠 초보자가 아닙니다');
    break;
}
/*
switch의 표현식은 case의 값과 일치 여부를 확인하며, 이때 === 일치 연산자를 사용
=== 일치 연산자는 값과 자료형을 모두 비교하고 결과값으로 true, false를 반환
*/
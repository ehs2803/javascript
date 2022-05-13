export default class Hello {
  constructor(greeting) {
    this.greeting = greeting;
  }
  hi(name) {
    console.log(`${this.greeting} ${name}`);
  }
}
// default 키워드를 사용해 모듈에서 기본으로 내보내는 값을 정의 가능. 숫자, 문자, 불리언과 같은 기본형 값과 객체, 함수, 클래스와 같은 참조형 값 모두 올 수 있음.
// default 키워드는 하나의 모듈에서 한번만사용 가능.
// default 키워드 다음에 var, let, const 같은 변수선언 키워드가 올 수 없다.
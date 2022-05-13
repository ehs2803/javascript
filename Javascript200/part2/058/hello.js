export const version = 'v1.0'

export var personA = {
  name: 'a'
};

export function add(a, b) {
  return a + b;
}

export class Person {
  constructor(name) {
    this.name = name;
  }
}
 
// 이름있는 변수나 함수 혹은 클래스를 export 키워드를 사용해 내보낼 수 있다. 기본값 default와 다르게 이름이 있기 때문에 중복되지 않은 한 여러 이름있는 것들으 내보낼 수 있다.

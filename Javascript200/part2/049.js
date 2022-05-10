function Teacher(name, age, subject) {
  this.name = name;
  this.age = age;
  this.subject = subject;
  this.teach = function (student) {
    console.log(student + '에게 ' + this.subject + '를 가르칩니다.');
  };
}

const jay = new Teacher('jay', 30, 'JavaScript');
console.log(jay);
jay.teach('bbo');

console.log(jay.constructor);
console.log(jay instanceof Teacher);

const jay2 = Teacher('jay', 30, 'JavaScript');
console.log(jay2); // 객체 반환 x -> undefined
console.log(age); // 30
// new 키워드 x일때 생성자 함수의 this는 전역 객체를 가리키게 됨. 전역객체에 name과 age 그리고 subject 속성으로 전달받은 매개변수가 할당되어 전역변수 age출력시 30 출력

// 자바스크립트 함수는 재사용 가능한 코드의 묶음으로 사용하는 것 외에 객체를 생성하기 위한 방법으로도 사용.
// 객체를 생성하기 위해서 직접적으로 객체를 반환해도 되지만 new 키워드를 사용해 함수를 호출하게 되면 return 문이 없어도 새로운 객체 반환
// 그리고 함수 바디에서 this키워드를 사용하여 반환되는 객체의 초기 상태와 행위 정의 가능.
// 이렇게 객체를 생성하는 역할을 하는 함수를 생성자 함수라고 함. 생성자 함수는 new 키워드를 사용하지 않으면 일반적인 함수와 동일하게 동작하며 새로운 객체 반환 x
// 그렇기 때문에 생성자 함수의 함수명을 대문자로 시작하는 관례를 가짐.
const CONST_USER = { name: 'jay', age: 30 };
console.log(CONST_USER.name, CONST_USER.age);
CONST_USER.name = "jay2";
CONST_USER.age = 31;
console.log(CONST_USER.name, CONST_USER.age);
CONST_USER = { name: 'bbo' }; // error
// const로 정의되었기 때문에 재할당만 되지 않는다. 즉 새로운 객체로 할당은 못하고 객체 내부의 상태만 변경 가능.
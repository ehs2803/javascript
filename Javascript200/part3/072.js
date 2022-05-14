const num = 5;
const bool = true;
const str = "문자열 값";
const arr = [1, 2, 3];
const obj = {a: 15};

console.log(num.toString());
console.log(bool.toString());
console.log(str.toString());
console.log(arr.toString());
console.log(obj.toString());

num.__proto__.toString = () => {
    return 'toString 덮어쓰기';
};
console.log(num.toString());

// 자바스크립트의 모든 객체는 object를 상속받기 때문에, 다른 모든 객체는 prototype을 통해 object의 내장 메소드 toString()에 접근하고 재정의한다.
// 이는 object객체의 toString을 상속받은 것과 다르다.
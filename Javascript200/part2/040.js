hello(); // 안녕하세요
function hello() {
  console.log("안녕하세요");
}

hello2(); // Uncaught TypeError: hello is not a functio
var hello2 = function () {
  console.log("안녕하세요");
}
// 함수를 선언하기 전에 호출이 가능. 이러한 현상을 호이스팅.
// 함수를 선언문이 아닌 표현식을 통해 변수에 할당하면 TypeError 발생.
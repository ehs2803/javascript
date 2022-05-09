function sum() {
  var total = 0;
  for (var i = 0; i < arguments.length; i++) {
    total += arguments[i];
  }
  console.log(arguments instanceof Array);
  return total;
}
//arguments 객체가 선언된 매개변수 그 이상으로 값을 받을 수 있음.

var sumOf1to3 = sum(1, 2, 3);
console.log(sumOf1to3);

function testArg() {
  var newArr = Array.prototype.slice.call(arguments);
  console.log(newArr);
  console.log(newArr.indexOf('b'));
  console.log(arguments.indexOf('b'));
}

testArg('a', 'b');
// 매개변수 = 전달 인자 
// 매개변수는 함수 선언 시 작성되는 변수. 전달 인자는 함수가 호출될 때 전달되는 값
// 자바스크립트는 전달 인자와 매개변수 개수가 달라도 에러 발생 x